<img src="https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/logo3.png" alt="Your Logo" height="100">

Health Matrix offers a comprehensive solution for booking appointments and managing hospital operations. Our platform streamlines scheduling, optimizes resource allocation, and enhances patient care.. 
## CONTRIBUTORS


- Deepanshu Rajput (Solo Project)



##
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/dashboard.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/login.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/signup.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/epartment.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/apointment.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/aoin_detel.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/about.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/admindash.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/adminadd.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/doctoradd.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/message.png)
![Logo](https://github.com/the-panshu/Hospital/blob/main/GIT_UPLOAD_Health/doc.png)


## Installation FrontEnd & Backend
To Install npm Module

```bash
cd Frontend
npm install
```

```bash
cd Backend
npm install
```

```bash
cd Dashboard
npm install
```

## Run FrontEnd & Backend



```bash
cd Frontend
npm run dev
```

```bash
cd Backend
npm run dev
```

```bash
cd Dashboard
npm run dev
```

## Env Variable

```python
.env 

# Our Server Runs
PORT=
MONGO_URI=
FRONTEND_URL=
DASHBOARD_URL=

#Cloudinary details
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#Tokens details
JWT_SECRET_KEY=
JWT_EXPIRES=
COOKIE_EXPIRE=

```
## FEATURES IMPLEMENTATION


1.User Login/Signup Page.

2.Authentication & Autherization using JSON Web Token.

3.Create Dashboard for User and Admin.

4.From User End :  
  
 - You Can Send Message Directly to our Admin.
- You Can Book an Appointment based on your requirement & with any Doctor.
- Created a About Us Page.
  
5.From Admin End :  
  
 - We can Register Doctor.
- We can add New Admins.
- We can Confirm Appointment ==> {Pending, Accepted, Rejected}.
- We can see Number of Appointments.
- We can all the Messages send by Users.

6.LogOut Feature is implemented by expiring Tokens.

## SPECIAL FEATURES

1.Admin can see the all the appointments and can also choose what to do with them {Pending, Accepted, Rejected}.

2.Multiple User & Doctor Can register on our site Dynamically.

3.Admin Can See all the messages send by Users.

4.Images are uploaded on Cloud using Cloudinary.

## TECH STACK 

1.Frontend:  React.js

2.Backend: Node.js, Express.js

3.Database: MongoDB

## TOOLS USED

1.MongoDB Compass : For Creating Databases.

2.Postman : For Testing Api End Points.

3.Cloudinary : For Uploading images on Cloud.
