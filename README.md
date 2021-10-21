# Client-Contact
A Cleint Contact app built with a Java Spring Boot backend including H2 database and React frontend.

![cleint-contact](./c.png)

# Set Up frontend
> Run the following commands from the root of react-frontend
```
npm i
```
```
npm run build
```
```
<move build file contents to spring-backend/target/classes/static directory>
```

# Set Up backend
> Run the following commands from the root of spring-backend
```
cd backend/src/main/resources
```
```
mvn clean install
```
```
mvn spring-boot:run
```
```
<run jar on local host or deploy to AWS>
