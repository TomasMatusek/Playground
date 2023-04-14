FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY build/libs/spring-service-0.0.2.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]