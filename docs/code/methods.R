# COIL methods module: every R snippet shown in the slides, in order (base R, plus ggplot2 and fixest).
# Run from the folder that contains coil_indicators_gretl.csv (Data section of the website).

# Load: one row per country and year; drop the EU aggregate
d <- read.csv("coil_indicators_gretl.csv")
d <- subset(d, iso3 != "EUU")
d$log_gdp <- log(d$NY_GDP_PCAP_PP_KD)

# 0. Data workshop: first chart, youth unemployment in the three COIL countries
library(ggplot2)
h <- subset(d, iso3 %in% c("ESP", "SVK", "MNE"))
ggplot(h, aes(year, SL_UEM_1524_ZS, colour = country)) +
  geom_line() + labs(y = "Youth unemployment, 15-24 (%)")

# 1. Correlation (2023)
s <- subset(d, year == 2023)
cor(s$IT_NET_USER_ZS, s$NY_GDP_PCAP_PP_KD, use = "complete.obs")

# 2. Linear regression (2022)
s <- subset(d, year == 2022)
m <- lm(SL_UEM_1524_ZS ~ SE_TER_ENRR + log_gdp, data = s)
summary(m)

# 3. Panel regression: country fixed effects + time trend (2010-2023)
library(fixest)   # install.packages("fixest") once
p <- subset(d, year >= 2010 & year <= 2023)
p$trend <- p$year - 2010
m <- feols(SH_XPD_CHEX_GD_ZS ~ SP_POP_65UP_TO_ZS + trend | iso3,
           data = p, cluster = ~iso3)
coeftable(m)

# 4. Classification: logistic regression (2022)
s <- subset(d, year == 2022)
fem <- s$SL_TLF_CACT_FE_ZS
s$high <- as.integer(fem > median(fem))
m <- glm(high ~ SP_DYN_TFRT_IN + log_gdp, family = binomial, data = s)
s$pred <- as.integer(predict(m, type = "response") > 0.5)
table(real = s$high, predicted = s$pred)

# 5. PCA (2022), standardised variables
cols <- c("NY_GDP_PCAP_PP_KD", "NV_SRV_TOTL_ZS", "IT_NET_USER_ZS",
          "SP_POP_65UP_TO_ZS", "SL_UEM_TOTL_ZS", "SP_DYN_LE00_IN")
s <- na.omit(subset(d, year == 2022)[, cols])
pc <- prcomp(s, scale. = TRUE)
summary(pc)
round(pc$rotation[, 1:2], 2)

# 6. k-means clustering (2023), standardised variables
cols <- c("iso3", "IT_NET_USER_ZS", "IT_NET_BBND_P2")
s <- na.omit(subset(d, year == 2023)[, cols])
set.seed(2026)
k <- kmeans(scale(s[, -1]), centers = 3, nstart = 25)
split(s$iso3, k$cluster)

# 7. Missing values: how many per indicator in the three COIL countries
home <- subset(d, iso3 %in% c("ESP", "SVK", "MNE") & year <= 2024)
sapply(split(home, home$iso3), function(g) colSums(is.na(g)))
