# C8-47-SERVER

`npm start` to run app on port 4000

---

## API ENDPOINTS

---

- ### User register

`POST /auth/signup`

```
REQUEST
{
  email: STRING
  password: STRING
  confirm_password: STRING
  first_name: STRING
  last_name: STRING
}

RESPONSE
{
  message: STRING
}
```

- ### User log in

`POST /auth/login`

```
REQUEST
{
  email: STRING
  password: STRING
}

RESPONSE
{
  token: TOKEN-NEEDED-TO-INTERACT-WITH-API
  message: STRING
}
```

---

### All the endpoints below needs the following `Header`

```
Authorization Bearer ${TOKEN-RECEIVED-AT-LOGIN}
```

---
