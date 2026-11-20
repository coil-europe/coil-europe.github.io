# ============================================================================
# COIL EUROPE | INTRODUCTION TO REGRESSION IN R
# Research question: What is the relationship between health spending and
# life expectancy across European countries in 2023?
# Dataset: COIL_dataset.xlsx, worksheet 'Data'
# Source: https://coil-europe.github.io/#data
# ============================================================================

# 1. PREPARE R ---------------------------------------------------------------
# Install readxl only if it is not installed yet, then load it:
if (!requireNamespace('readxl', quietly = TRUE)) install.packages('readxl')
library(readxl)

# Place COIL_dataset.xlsx in your R working directory, OR select it interactively.
# Tip: In RStudio, use Session > Set Working Directory > Choose Directory.
# Read the 'Data' worksheet; do NOT use 'EU_average' because it is an aggregate.
file_path <- 'COIL_dataset.xlsx'
# Or pick the file in a window instead (remove the # at the start of the next line):
# file_path <- file.choose()
coil <- read_excel(file_path, sheet = 'Data')

# Check the available variables and the first few observations.
names(coil)
head(coil)

# 2. SELECT THE YEAR 2023 -----------------------------------------------------
# Each row should represent one country in 2023.
data2023 <- subset(coil, year == 2023)

# Keep the SAME observations in both models for a fair comparison.
vars <- c('country', 'year', 'life_expectancy',
          'health_spending', 'gdp_per_capita')
stopifnot(all(vars %in% names(data2023)))
reg_data <- data2023[complete.cases(data2023[, vars]), vars]
stopifnot(!anyDuplicated(reg_data$country))

cat('Number of countries in the analysis:', nrow(reg_data), '\n')
print(reg_data[, c('country', 'life_expectancy', 'health_spending')])

# 3. UNDERSTAND THE VARIABLES ------------------------------------------------
# Y: life_expectancy = life expectancy at birth, in YEARS.
# X1: health_spending = current health expenditure, % OF GDP.
# X2: gdp_per_capita = GDP per capita, PPP, constant 2021 international dollars.
# A 1-unit change in health_spending means ONE PERCENTAGE POINT of GDP,
# NOT a 1% relative increase in spending.

summary(reg_data[, c('life_expectancy', 'health_spending',
                     'gdp_per_capita')])

# Pearson correlation measures the direction and strength of a LINEAR
# relationship. It does NOT establish causality.
cor(reg_data$health_spending, reg_data$life_expectancy)

# 4. GRAPH 1: SCATTER PLOT ----------------------------------------------------
# Do you expect a positive or a negative association?
plot(reg_data$health_spending, reg_data$life_expectancy,
     pch = 19, col = 'steelblue',
     xlab = 'Current health expenditure (% of GDP)',
     ylab = 'Life expectancy at birth (years)',
     main = 'European countries, 2023')
grid()

# 5. MODEL 1: SIMPLE LINEAR REGRESSION ----------------------------------------
# Model: Life expectancy = beta0 + beta1 * Health spending + error
# H0: beta1 = 0 (no linear association)
# H1: beta1 != 0 (a linear association)
model1 <- lm(life_expectancy ~ health_spending, data = reg_data)
summary(model1)

# HOW TO READ THE OUTPUT:
# (Intercept): predicted life expectancy when health_spending = 0.
#   This value may be outside the observed data range; do not overinterpret it.
# health_spending Estimate: expected DIFFERENCE in life expectancy (years)
#   associated with a 1-percentage-point higher share of GDP spent on health.
# Pr(>|t|): p-value testing whether the coefficient equals zero.
# Multiple R-squared: proportion of sample variation in life expectancy
#   explained by this simple linear model.
# Statistical significance is NOT the same as a causal effect.

# GRAPH 2: REGRESSION LINE ----------------------------------------------------
plot(reg_data$health_spending, reg_data$life_expectancy,
     pch = 19, col = 'steelblue',
     xlab = 'Current health expenditure (% of GDP)',
     ylab = 'Life expectancy at birth (years)',
     main = 'Model 1: simple linear regression')
grid()
abline(model1, col = 'firebrick', lwd = 2)
legend('bottomright', legend = c('Countries', 'Fitted regression line'),
       pch = c(19, NA), lty = c(NA, 1),
       col = c('steelblue', 'firebrick'), bty = 'n')

# 6. MODEL 2: MULTIPLE LINEAR REGRESSION --------------------------------------
# Question: Is health spending still associated with life expectancy
# AFTER ACCOUNTING FOR GDP PER CAPITA?
# Model: Life expectancy = beta0 + beta1 * Health spending
#                          + beta2 * GDP per capita + error
# Divide GDP per capita by 1,000 for easier interpretation.
# This changes the units, not the model fit or statistical significance.
reg_data$gdp_1000 <- reg_data$gdp_per_capita / 1000
model2 <- lm(life_expectancy ~ health_spending + gdp_1000,
             data = reg_data)
summary(model2)

# HOW TO READ MODEL 2:
# health_spending coefficient: expected difference in life expectancy
#   for a 1-percentage-point difference in health spending,
#   HOLDING GDP PER CAPITA CONSTANT.
# gdp_1000 coefficient: expected difference in life expectancy (years)
#   for an additional 1,000 international dollars of GDP per capita,
#   HOLDING HEALTH SPENDING CONSTANT.
# Compare the health_spending coefficient in Models 1 and 2.
# Does its size or sign change? What might explain that change?

# 7. COMPARE MODEL 1 AND MODEL 2 ----------------------------------------------
model_comparison <- data.frame(
  Model = c('Simple regression', 'Multiple regression'),
  N = c(nobs(model1), nobs(model2)),
  R_squared = c(summary(model1)$r.squared,
                summary(model2)$r.squared),
  Adjusted_R_squared = c(summary(model1)$adj.r.squared,
                         summary(model2)$adj.r.squared),
  Health_coefficient = c(coef(model1)['health_spending'],
                         coef(model2)['health_spending'])
)
print(round(model_comparison[, c('N', 'R_squared',
                                 'Adjusted_R_squared',
                                 'Health_coefficient')], 3))
print(model_comparison$Model)

# R-squared cannot decrease when an explanatory variable is added.
# Adjusted R-squared penalises unnecessary predictors.
# Because Model 1 is nested in Model 2, we can also test the added predictor:
anova(model1, model2)

# GRAPH 3: OBSERVED VS PREDICTED LIFE EXPECTANCY -------------------------------
predicted2 <- predict(model2)
plot(reg_data$life_expectancy, predicted2,
     pch = 19, col = 'darkgreen',
     xlab = 'Observed life expectancy (years)',
     ylab = 'Predicted life expectancy (years)',
     main = 'Model 2: observed vs predicted')
abline(a = 0, b = 1, col = 'firebrick', lwd = 2, lty = 2)
grid()
# Points closer to the diagonal indicate smaller prediction errors.

# GRAPH 4: RESIDUALS VS FITTED VALUES ----------------------------------------
plot(fitted(model2), resid(model2),
     pch = 19, col = 'steelblue',
     xlab = 'Fitted life expectancy (years)',
     ylab = 'Residual (observed - predicted)',
     main = 'Model 2: residuals vs fitted')
abline(h = 0, col = 'firebrick', lwd = 2, lty = 2)
grid()

# Look for curves, systematic patterns or increasing residual spread.
# A random-looking cloud around zero is more reassuring.

# GRAPH 5: NORMAL Q-Q PLOT OF RESIDUALS ---------------------------------------
qqnorm(resid(model2), pch = 19, col = 'steelblue',
       main = 'Model 2: normal Q-Q plot')
qqline(resid(model2), col = 'firebrick', lwd = 2)
# Large deviations from the line may indicate non-normal residuals.


# ============================================================
# PART 8: MAKING PREDICTIONS USING REGRESSION MODELS
# ============================================================

# We have estimated two regression models:
#
# Model 1: Life expectancy ~ Health spending
# Model 2: Life expectancy ~ Health spending + GDP per capita
#
# Now we will use these models to predict life expectancy.


# ------------------------------------------------------------
# TASK 1: Prediction using simple linear regression
# ------------------------------------------------------------

# Imagine a country that spends 8% of its GDP on healthcare.
# What is its predicted life expectancy?

new_country1 <- data.frame(
  health_spending = 8
)

prediction1 <- predict(model1, newdata = new_country1)

print(prediction1)

# QUESTION:
# How would you interpret this predicted value?

# ------------------------------------------------------------
# TASK 2: Prediction using multiple linear regression
# ------------------------------------------------------------

# Imagine a country with:
# Health spending = 8% of GDP
# GDP per capita = 40,000 international dollars

new_country2 <- data.frame(
  health_spending = 8,
  gdp_1000 = 40
)

prediction2 <- predict(model2, newdata = new_country2)

print(prediction2)

# QUESTION:
# Is the prediction different from Model 1?
# Why might the two models produce different predictions?


# ------------------------------------------------------------
# TASK 3: Comparing two hypothetical countries
# ------------------------------------------------------------

# Both countries have the same health spending,
# but different GDP per capita.

countries <- data.frame(
  country = c("Country A", "Country B"),
  health_spending = c(8, 8),
  gdp_1000 = c(30, 60)
)

# Calculate predicted life expectancy for both countries.

countries$predicted_life_expectancy <-
  predict(model2, newdata = countries)

print(countries)

# Calculate the difference between predictions.

difference <-
  countries$predicted_life_expectancy[2] -
  countries$predicted_life_expectancy[1]

cat("Difference in predicted life expectancy:",
    round(difference, 2), "years\n")

# QUESTIONS:
# Which country has higher predicted life expectancy?
# How large is the difference?
# Which regression coefficient explains this difference?


# ------------------------------------------------------------
# TASK 4: Prediction interval
# ------------------------------------------------------------

# A prediction is not an exact value.
# We can calculate a 95% prediction interval
# for the life expectancy of a hypothetical country.

prediction_interval <- predict(
  model2,
  newdata = new_country2,
  interval = "prediction",
  level = 0.95
)

print(prediction_interval)

# OUTPUT:
# fit = predicted life expectancy
# lwr = lower limit of the prediction interval
# upr = upper limit of the prediction interval

# QUESTION:
# Why is a prediction interval more informative
# than a single predicted value?


# ============================================================
# FINAL DISCUSSION
# ============================================================

# 1. Can regression models be used for prediction?
# 2. Why can predictions from Model 1 and Model 2 differ?
# 3. Does a prediction imply a causal relationship?
# 4. Why should we be careful when predicting values
#    outside the range of the observed data?


# 9. DISCUSSION QUESTIONS ----------------------------------------------------
# 1. What is the dependent variable in our analysis?
# 2. What does the health_spending coefficient mean in Model 1?
# 3. Is that coefficient statistically significant at the 5% level?
# 4. What happens to the coefficient when GDP per capita is added?
# 5. Which model has the higher adjusted R-squared?
# 6. Can we claim that higher health spending CAUSES longer life expectancy?
#    No: this is observational, cross-country data from a single year.
# 7. What other factors might matter? (Age structure, health behaviours,
#    quality of care, income inequality, environmental conditions, etc.)

# 10. OPTIONAL STUDENT CHALLENGE ---------------------------------------------
# Add a third explanatory variable, e.g. tertiary_enrolment, but first
# check missing values. Compare models only on the SAME set of countries.
# IMPORTANT: tertiary_enrolment is GROSS tertiary enrolment, not the
# percentage of adults who have completed tertiary education.
# Also remember that countries may differ in population size, and that
# health spending as % of GDP is NOT the same as spending per person.

# END OF EXERCISE ------------------------------------------------------------
