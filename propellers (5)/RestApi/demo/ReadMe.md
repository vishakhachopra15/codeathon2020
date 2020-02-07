run project ./mvnw spring-boot:run
run jar file java -jar <jarfilePath>

**Database Connect**
http://localhost:8080/h2-console/
url=jdbc:h2:mem:testdb
driverClassName=org.h2.Driver
username=sa
password=password



select * from EMPLOYEES

POST http://localhost:8080/api/v1/employees
{
    "id": 2,
    "firstName": "Test",
    "lastName": "Test",
    "emailId": "CPDASANI1@GMAIL.COM"
}