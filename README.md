# MyClass
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

<h1 align="center">MyClass</h1>
<hr id='#'>
<h2>Table of Contents</h2>
<ul>
  <li><a href='#intro'>Introduction</a></li>
  <li><a href='#prerequiste'>Prerequiste</a></li>
  <li><a href='#database'>Database</a></li>
  <li><a href='#install'>Installation</a>
    <ul type='circle'>
      <li><a href='#clone'>Clone</a></li>
      <li><a href='#env'>Environment</a></li>
      <li><a href='#start'>Start</a></li>
    </ul>
  </li>
  <li><a href='#endpoints'>Endpoints</a></li>
  <li><a href='#def'>Defendencies</a></li>
  <li><a href='#license'>License</a></li>
</ul>
<hr>

<h2 id='intro'>Introduction</h2>
<p>MyClass adalah Aplikasi backend yang telah mengadopsi fitur-fitur berikut :
Absent,
Class Schedule,
Material Sharing.
Aplikasi backend dibangun menggunakan bahasa Node JS
Aplikasi backend dibangun menggunakan database MySQL</P>
<hr>

<h2 id='prerequiste'>Prerequiste</h2>
<ul>
  <li>Node.js - Download and Install <a href='https://nodejs.org/en/'>Node.js</a> - Simple bash script to manage multiple active node.js versions.</li>
  <li>Nodemon - Download and Install <a href='https://nodemon.io/'>Nodemon</a> - nodemon is a tool that automatically restarting the node application when file changes in the directory are detected.</li>
  <li>Express JS - Download and Install <a href='https://expressjs.com/'>Express JS</a> - web framework for Node.js</li>
</ul>
<hr>

<h2 id='database'>Database</h2>
<p>This project using MySQL as DBMS</p>
<p>Clone/download ale_geek_battle.sql above then import to phpmyadmin !</p>
<hr>

<h2 id='install'>Installation</h2>
<h3 id='clone'>Clone</h3>

```bash
$ git clone https://github.com/sandirr/MyClass
$ cd MyClass
$ npm install
```

<hr>
<h3 id='env'>Create Environment Variable</h3>

```bash
$ npm i dotenv
```
- **create .env file and copy this**:
```
PORT = 3232

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASS = ''
DB_NAME = 'ale_geek_battle'

JWT_KEY = 'rahasiabanget'
```

<hr>
<h3 id='start'>Start Development Server</h3>

```bash
$ npm start
```
<hr>
<h2 id='def'>Other Dependencies</h2>

- [body-parser](#)
- [crypto](#)
- [cors](#)
- [express-fileupload](#)
- [jsonwebtoken](#)
- [morgan](#)
- [mysql](#)
- [uniqid](#)

### HTTP Requests
All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `GET` Get a resource or list of resources
- `POST` Create a resource
- `PATCH` Update a resource
- `DELETE` Delete a resource

<hr id="endpoints">
## Endpoints
**IMPORTANT!** All endpoint except **Login** and **Register** must have **header** :

- **token**: **`token`**
- **user-id** : **`id user`**

### to test => URI : http://localhost:3232/v1

#### **User**
* **Register user**
  - **Request** : **`POST uri/user/register`**
    ```
    {
        "name": "Sandi",
        "email": "andi.irsandi@email.id"
        "password": "1234",
    }
    ```
  - **Response** : 
    ```
    {
        "status": 200,
        "result": "user has been added"
    }
    ```
* **Login User**
  - **Request** : **`POST uri/user/login`**
    ```
    {
        "email": "andi.irsandi@email.id",
        "password": "1234"
    }
    ```
  - **Response** : 
    ```
    {
        "status": 200,
        "result": {
            "id": 4,
            "name": "sandi",
            "email": "andi.irsandi@email.id",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGkuaXJzYW5kaUBlbWFpbC5pZCIsImlkIjo0LCJpYXQiOjE1ODI4NzY3MDYsImV4cCI6MTU4Mjk2MzEwNn0.xIlp-39hrygiOLRjmuVtJe75SiufUhT_cACmj8NY0CA"
        }
    }
    ```
* **Read All User** => Admin only
  - **Request** : **`POST uri/user`**

  - **Response** : 
    ```
    {
    "status": 200,
    "result": [
        {
            "id": 2,
            "name": "andi irsandi",
            "email": "sandi@mail.co",
            "salt": "b21d9a41927e4e6cbc",
            "password": "1830edef78427ec4a3bc407f62652bb08f977f1e5d5716b1f5fdb07fda28a7499ec4822fa48ac54053b62e4f6e2ea5b73c8d70a3d4eb9f413ef690f6c8735af8",
            "status": "admin"
        },
        {
            "id": 4,
            "name": "sandi",
            "email": "andi.irsandi@email.id",
            "salt": "b103e28ebc87485293",
            "password": "968270b919f2e3d690a9ad07f1caa5e1b978940635090a0e9acd27dc62bae5a1a4bb35b0da703744100e685319470156e1a2323db0a1a2fc5a13d31d5c8bbe9e",
            "status": "user"
        }
    ]
}
    ```
* **Delete a User** => Admin only
  - **Request** : **`DELETE uri/user/:userId`**

  - **Response** : 
    ```
    {
        "status": 200,
        "result": "User has been deleted"
    }
    ```

### A. CRUD class_schedule Endpoint
**1. Read All Class Schedule**
 -   **Request**  :  **`GET uri/class`**
 -   **Response**  :
```
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "date": "2020-03-02T17:00:00.000Z",
            "class_name": "Mathematics",
            "class_room": "Room 207"
        },
        {
            "id": 2,
            "date": "2020-03-05T17:00:00.000Z",
            "class_name": "Chemical",
            "class_room": "Room 201"
        }
    ]
}
```
**2. Read a class Schedule**
 -   **Request**  :  **`GET uri/class/:classId`**
 -   **Response**  :
```
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "date": "2020-03-02T17:00:00.000Z",
            "class_name": "Mathematics",
            "class_room": "Room 207"
        }
    ]
}
```
**3. Create a Class Schedule** => Admin only
 -   **Request**  :  **`POST uri/class`**
```
    {
        "date": "2020-03-06",
        "class_name": "History",
        "class_room": "Room 201"
    }
```
 -   **Response**  :
```
{
    "status": 200,
    "result": "success add class"
}
```
**4. Update a Class Schedule** => Admin only

 -   **Request**  :  **`PATCH api/class/:classId`**
 ```
    {
        "date": "2020-03-06",
        "class_name": "History",
        "class_room": "Room 207"
    }
```
 -   **Response**  :
```
{
    "status": 200,
    "result": "success edit class"
}
```
**5. Delete a Class Schedule**
 -   **Request**  :  **`DELETE uri/class/:classId`** => Admin only
 -   **Response**  :
```
{
    "status": 200,
    "result": "success delete class"
}
```

### B. CRUD Material Sharing Endpoint
**1. Read all material by class id**
 -   **Request**  :  **`GET uri/material?class_id`**
 -   **Response**  :
```
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "class_id": 1,
            "material_name": "geometri",
            "material_file": "http://localhost:3232/v1/file/odgcbb8ck75qzle3.pdf"
        }
    ]
}
```
**2. Read a material**
 -   **Request**  :  **`GET uri/material/:materialId`**
 -   **Response**  :
```
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "class_id": 1,
            "material_name": "geometri",
            "material_file": "http://localhost:3232/v1/file/odgcbb8ck75qzle3.pdf"
        }
    ]
}
```
**3. Create/sharing Material for a class** => Admin only
 -   **Request**  :  **`POST uri/material?classId`**
 ```
{
    "material_name": "logaritma",
    "material_file": "850-1978-1-SM.pdf"
}
```
 -   **Response**  :
```
{
    "status": 200,
    "result": "material has been added"
}
```
**4. Update Material** => Admin only
 -   **Request**  :  **`PATCH uri/material/:materialId`**
```
{
    "material_name": "logaritma",
    "material_file": "850-1978-1-SM.pdf"
}
```
 -   **Response**  :
```
{
    "status": 200,
    "result": "material has been updated"
}
```
**5. Delete material** => Admin only
 -   **Request**  :  **`DELETE uri/material/:materialId`**
 -   **Response**  :
```
{
    "status": 200,
    "result": "material has been deleted"
}
```
### C. Absent
**1. Absent**
 -   **Request**  :  **`POST uri/absent`**
```
{
    "class_id": 1,
    "attend": "present"
}
```
 -   **Response**  :
```
{
    "status": 200,
    "result": "absent has been recap"
}
```
**2. Read Absent Recap**
 -   **Request**  :  **`GET uri/absent?classId`**
 -   **Response**  :
```
{
    "status": 200,
    "result": [
        {
            "class": "Mathematics",
            "name": "andi irsandi",
            "attend": "present"
        },
        {
            "class": "Mathematics",
            "name": "andi",
            "attend": "present"
        }
    ]
}
```


<h2 id='license'>License</h2>
&copy; <a href='https://en.wikipedia.org/wiki/Beerware'>Beerware</a>
&copy; <a href='https://github.com/sandirr/'>Andi Irsandi</a>

