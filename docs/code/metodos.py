# COIL methods module: every Python snippet shown in the slides, in order.
# Run from the folder that contains coil_indicators_gretl.csv (Data section of the website).
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import statsmodels.formula.api as smf
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# Load: one row per country and year; drop the EU aggregate
d = pd.read_csv("coil_indicators_gretl.csv")
d = d[d.iso3 != "EUU"]
d["log_gdp"] = np.log(d.NY_GDP_PCAP_PP_KD)

# 0. Data workshop: first chart, youth unemployment in the three COIL countries
h = d[d.iso3.isin(["ESP", "SVK", "MNE"])]
h.pivot(index="year", columns="country", values="SL_UEM_1524_ZS").plot()
plt.ylabel("Youth unemployment, 15-24 (%)")
plt.show()

# 1. Correlation (2023)
s = d[d.year == 2023]
print(s[["IT_NET_USER_ZS", "NY_GDP_PCAP_PP_KD"]].corr())

# 2. Linear regression (2022)
s = d[d.year == 2022]
f = "SL_UEM_1524_ZS ~ SE_TER_ENRR + log_gdp"
m = smf.ols(f, data=s).fit()
print(m.summary())

# 3. Panel regression: country fixed effects + time trend (2010-2023)
y, x = "SH_XPD_CHEX_GD_ZS", "SP_POP_65UP_TO_ZS"
p = d[d.year.between(2010, 2023)].dropna(subset=[y, x]).copy()
p["trend"] = p.year - 2010
f = f"{y} ~ {x} + trend + C(iso3)"
m = smf.ols(f, data=p).fit(cov_type="cluster",
    cov_kwds={"groups": pd.factorize(p.iso3)[0]})
print(m.params[[x, "trend"]], m.pvalues[[x, "trend"]])

# 4. Classification: logistic regression (2022)
s = d[d.year == 2022].copy()
fem = s.SL_TLF_CACT_FE_ZS
s["high"] = (fem > fem.median()).astype(int)
m = smf.logit("high ~ SP_DYN_TFRT_IN + log_gdp", data=s).fit()
s["pred"] = (m.predict(s) > 0.5).astype(int)
print(pd.crosstab(s.high, s.pred))

# 5. PCA (2022), standardised variables
cols = ["NY_GDP_PCAP_PP_KD", "NV_SRV_TOTL_ZS", "IT_NET_USER_ZS",
        "SP_POP_65UP_TO_ZS", "SL_UEM_TOTL_ZS", "SP_DYN_LE00_IN"]
s = d[d.year == 2022].dropna(subset=cols)
z = StandardScaler().fit_transform(s[cols])
pca = PCA().fit(z)
print(pca.explained_variance_ratio_.round(3))
print(pd.DataFrame(pca.components_[:2].T, index=cols).round(2))

# 6. k-means clustering (2023), standardised variables
cols = ["IT_NET_USER_ZS", "IT_NET_BBND_P2"]
s = d[d.year == 2023].dropna(subset=cols).copy()
z = StandardScaler().fit_transform(s[cols])
km = KMeans(n_clusters=3, n_init=25, random_state=2026)
s["cluster"] = km.fit_predict(z)
print(s.groupby("cluster")[cols].mean().round(1))
print(s.groupby("cluster").iso3.apply(list))

# 7. Missing values: how many per indicator in the three COIL countries
home = d[d.iso3.isin(["ESP", "SVK", "MNE"]) & (d.year <= 2024)]
print(home.groupby("iso3").apply(lambda g: g.isna().sum()).T)
