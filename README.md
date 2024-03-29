<h1 align="center">Snipe Backend Task🧭</h1>

## 📚 | Problem Statement

- Develop a web application using Nest.js featuring a secure authentication system with email-based OTPs, using Firebase Auth and Nodemailer for email  functionality. Additionally, implement a dummy user validation system using a predefined array of user objects.

 1.  **Nest.js Application Setup:**

-   Initialize and configure a new Nest.js project. (You may refer to  [Nest.js documentation](https://docs.nestjs.com/)  if not done previously)
-   Develop necessary routes and middleware for the application.  
    

2.  **Email-OTP Based Authentication:**

-   Create a system for generating and validating OTPs for user authentication.
-   Set up OTP delivery to the user's email address using Nodemailer.  
    
-   Configure Nodemailer for email operations with an SMTP server.
-   Design email templates for sending OTPs.  
    

3.  **User Validation with Dummy User Array:**  
    

-   Create a dummy array of user objects in the backend. Each object should contain:

-   **user_id : A unique identifier for the user.**
-   **name : The user's name.**
-   **email : The user's email address.**

-   Use this array to validate whether a user is valid during the authentication process. Only users in this array should be able to receive an OTP and  complete authentication.

4.  **Testing and Documentation:**  
    

-   Conduct comprehensive testing.

-   Provide clear documentation, including setup and usage instructions.  
    

5.  **Submission Guidelines:**  
    

-   Source code in a version-controlled repository.
-   README file with setup and running instructions.  
    
-   Application with no runtime errors.
-   No external database should be used for the same.
-   No use of cookies, because the APIs can be used for a mobile app as well.

6.  **Evaluation Criteria:**

-   Functionality of authentication and user validation.
-   Code quality and adherence to best practices.
-   Handling of edge cases and error scenarios.  
    
-   Comprehensive documentation.



## 🎯 | Sample Queries

- `POST` Url :- `http://localhost:3000/auth/sendOTP` Body :- `"email" : "2006159@kiit.ac.in"`
- `POST` Url :- `http://localhost:3000/auth/verifyOTP` Body :- `"email"2006159@kiit.ac.in","OTP":"${your_otp}"`

## 🌐 | Test Project

- Clone this repository.
- Install Docker Desktop.
- Create a `.env` file in the root directory of the web-server folder with credentials `EMAIL_USERNAME = "YOUR_EMAIL" EMAIL_PASSWORD = "YOUR_APP_PASSWORD"
`
- Run `docker-compose build` in the root directory of the project. This process takes a a minute or two to complete, for the first time.
- Run `docker-compose up ` to initialize web servers running on port 3000.

<br/>

### Features Implemented:

- Dummy user Validation for safety.
- The web service is dockerized to ease out deployment and production.
- The web-service uses NodeMailer SMTP service to send Emails containing OTP.
- Web Service uses in-memory hash table to store otp's for an email until its verified.

### Current Architecture:

- Containerized approach to solving the problem statement.
- Given the **Non-Blocking and Async Code Execution** of NestJS the code doesn't get blocked of delayed due to a resource consuming task. 

### Future Scope:

- The current architecture is a very basic implementation of the problem statement.
- Depending upon the scale, the entire architecture can be **scaled horizontally** using nginx load balancing.
- Web can use a queueing mechanism like Rabbit or BullMQ to introduce pub-sub architecture to improve performance.

## 🧑🏽 | Author

**Aditya Sinha**

- Linkedin: [@Aditya Sinha](https://www.linkedin.com/in/aditya-s-a07a54121/)
- Github: [@BREACH1247](https://github.com/BREACH1247)

<br/>

---