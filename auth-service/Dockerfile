# ----------------
# Build stage
# ----------------
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

# ----------------
# Run stage
# ----------------
FROM eclipse-temurin:21-jre

# Create non-root user & group
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Ensure ownership
RUN chown appuser:appgroup app.jar

# Switch to non-root user
USER appuser

ENTRYPOINT ["java", "-jar", "app.jar"]
