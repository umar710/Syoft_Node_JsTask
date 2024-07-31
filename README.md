About: This Assignment.

I have develop three end/api points

1) Register API
2) Login API
3) Product CRUD API


* Register API :- https://syoft-node-jstask.onrender.com/user/register

1) Admin User :-
    {
    "username": "adminUser",
    "email": "admin@example.com",
    "password": "Admin@1234", 
    "role": "admin"
  }


2) Manager User :-
   {
    "username": "managerUser",
    "email": "manager@example.com",
    "password": "Manager@1234",
    "role": "manager"
  }


3) Staff User :-
   {
    "username": "staffUser",
    "email": "staff@example.com",
    "password": "Staff@1234",
    "role": "staff"
  }


* Login API :- https://syoft-node-jstask.onrender.com/user/login

  1) Admin Login :-
     {
    "email": "admin@example.com",
    "password": "Admin@1234"
    }


2) Manager Login :-
   
 {
    "email": "manager@example.com",
    "password": "Manager@1234"
  }

3) Staff Login :-
   {
    "email": "staff@example.com",
    "password": "Staff@1234"
   }



Products :- ~ The product model will have fields like title, description & inventory count. All the CRUD(Create, Read, Update & Delete) API’s should require token in header to perform actions.

1* Product Creation can be accessed with admin token only. {API_URL}:-  https://syoft-node-jstask.onrender.com/products
  
 1) Product Creation API:-
    API_URL = https://syoft-node-jstask.onrender.com/products
    METHOD = POST
    Auth_Type =  Bearer Token
    
    dummyProducts =
    {
    "title": "Wireless Mouse",
    "description": "A high-precision wireless mouse with ergonomic design and long battery life.",
    "inventoryCount": 150
   }

  {
    "title": "Bluetooth Headphones",
    "description": "Noise-cancelling Bluetooth headphones with rich sound quality and comfortable fit.",
    "inventoryCount": 85
  }
  

2* Product Get can be accessed with admin, manager token only. {API_URL}:- https://syoft-node-jstask.onrender.com/products
  
  2) Product GET API:-
    API_URL = https://syoft-node-jstask.onrender.com/products
    METHOD = GET
    Auth_Type =  Bearer Token


3* Product Update can be accessed with admin, manager token only. {API_URL}:- https://syoft-node-jstask.onrender.com/products
  
  3) Product Update API:-
    API_URL = https://syoft-node-jstask.onrender.com/products
    METHOD = PUT
    Auth_Type =  Bearer Token


4* Product Delete can be accessed with admin token only. {API_URL}:- https://syoft-node-jstask.onrender.com/products/66aa54204ce8c7a7a37cad50
  
  4) Product Delete API:-
    API_URL = https://syoft-node-jstask.onrender.com/products/66aa54204ce8c7a7a37cad50
    METHOD = DELETE
    Auth_Type =  Bearer Token


5* Staff will not have any CRUD rights. {API_URL}:- https://syoft-node-jstask.onrender.com/products
  
  5) Product GET API:- API_URL = https://syoft-node-jstask.onrender.com/products/staff
    METHOD = GET
    Auth_Type =  Bearer Token
