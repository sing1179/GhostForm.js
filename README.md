# GhostForm – Java Spring Boot Autofill Backend

### Overview

GhostForm is a Java Spring Boot backend service that provides REST API endpoints for analyzing and autofilling web forms. It also tracks simple analytics for each form processed.

---

### Features

- REST API for form analysis and autofill suggestions
- In-memory analytics tracking
- Simple, hardcoded autofill logic
- Ready to run as a standalone Spring Boot application

---

### Prerequisites

- Java 17 or later
- Maven or Gradle
- (Optional) Postman or curl for API testing

---

### Setup

1. **Clone or copy the code**

   - Place all classes in a single file named `GhostformApplication.java`  
     (or split into separate files for best practice).

2. **Create a Maven project and add Spring Boot dependencies**

   Add the following to your `pom.xml`:
   ```xml
   <dependencies>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-web</artifactId>
     </dependency>
   </dependencies>
   ```

3. **Build and run the application**

   ```bash
   mvn spring-boot:run
   ```
   or
   ```bash
   ./gradlew bootRun
   ```

---

### API Endpoints

#### Analyze Form

- **POST** `/api/v1/form/analyze`
- **Request Body Example:**
  ```json
  {
    "fields": [
      {"name": "email", "type": "text"},
      {"name": "password", "type": "password"}
    ]
  }
  ```
- **Response Example:**
  ```json
  {
    "autofill": {
      "email": "user@example.com",
      "password": "P@ssw0rd!"
    }
  }
  ```

#### Get Analytics

- **GET** `/api/v1/form/analytics`
- **Response Example:**
  ```json
  [
    {
      "id": 1,
      "fieldCount": 2,
      "timestamp": "2024-06-07T12:34:56.789+00:00"
    }
  ]
  ```

---

### Notes

- All analytics are stored in memory and will be lost when the server restarts.
- Autofill logic is simple and can be extended for more intelligent suggestions.
- For production, split classes into separate files and add persistence, validation, and security.

---

### License

MIT License
