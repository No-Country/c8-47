# C8-47-SERVER

`npm start` or `npm run dev` to run app on port 4000

---

# ENVIRONMENT VARIABLES

`.env`

```
MONGO_DB_URI to connect to MongoDB
MONGO_DB_URI_TEST in case you want to test in a test environment
JWT_SECRET_CODE to sign tokens
```

---

# API ENDPOINTS

- [User register](#user-register)
- [User log in](#user-log-in)
- [Header IMPORTANT](#all-the-endpoints-below-needs-the-following-header)
- [User](#user)
- [Contact](#contact)
- [Curriculum](#curriculum)
- [Education](#education)
- [Job](#job)
- [Language](#language)
- [Personal](#personal)
- [Presentation](#presentation)
- [Selector](#selector)
- [Skill](#skill)
- [Social](#social)

---

## User register

`POST /auth/signup`

```
REQUEST
{
   email: STRING
   new_password: STRING
   confirm_password: STRING
   first_name: STRING
   last_name: STRING
}

RESPONSE
{
   message: STRING
}
```

## User log in

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

## All the endpoints below needs the following `Header`

```
Authorization Bearer {TOKEN-RECEIVED-AT-LOGIN}
```

---

## User

`GET /user/data`

```
RESPONSE
{
   user_data: {
      _id: STRING
      email: STRING
      first_name: STRING
      last_name: STRING
      role: STRING
      education: [
         {
            _id_: STRING
            title: STRING
            institution: STRING
            start_date: STRING
            end_date: STRING
            certification: BOOLEAN
         }
      ]
      personal: [
         {
            _id: STRING
            title: STRING
            about: STRING
         }
      ]
      contact: {
         _id: STRING
         email: STRING
         web: STRING
         socials: [ STRING ]
         address: {
            state: STRING
            city: STRING
            zip_code: STRING
            street_name: STRING
            street_number: STRING
            door: STRING
         }
      }
      experience:[
         {
            _id: STRING
            title: STRING
            organization: STRING
            start_date: STRING
            end_date: STRING
            main_job: BOOLEAN
            tasks: [ STRING ]
         }
      ]
      curriculums: {
         _id: STRING
         data: STRING
         status: STRING
         deleted_at: NUMBER
         selector: {
            _id: STRING
            organization: STRING
            name: STRING
            email: STRING
         }
      }
      languages: [
         {
            _id: STRING
            language: STRING
            level: STRING
         }
      ]
      presentations: [
         {
            _id: STRING
            text: STRING
         }
      ]
      skills: [
         {
            _id: STRING
            name: STRING
         }
      ]
      tags: [
         {
            _id: STRING
            name: STRING
            description: STRING
         }
      ]
   }
}
```

**Modify password**

`PUT /user/password`

```
REQUEST
{
   password: STRING
   new_password: STRING
   confirm_password: STRING
}

RESPONSE
{
   message: STRING
}
```

**Edit name**

`PUT /user/name`

```
REQUEST
{
   first_name: STRING
   last_name: STRING
}

RESPONSE
{
   message: STRING
   user: {
      first_name: STRING
      last_name: STRING
   }
}
```

---

## Contact

`GET /contact`

```
RESPONSE
{
   contact: {
      _id: STRING
      email: STRING
      phone: STRING
      socials: [ STRING ]
   }
}
```

`POST /contact`

```
REQUEST
{
   email: STRING
   phone: STRING (optional)
}

RESPONSE
{
   message: STRING
   contact: {
      _id: STRING
      email: STRING
      phone: STRING
      socials: [ STRING ]
      user: STRING
   }
}
```

---

## Curriculum

`GET /curriculum`

```
RESPONSE
{
   curriculums: [
      {
         _id: STRING
         deleted_at: NUMBER
         data: STRING
         status: STRING
         tag: STRING
         user: STRING
         selector: {
            _id: STRING
            organization: STRING
            name: STRING
            email: STRING
         }
      }
   ]
}
```

`POST /curriculum`

```
REQUEST
{
   data: STRING
   tag: STRING
}

RESPONSE
{
   message: STRING
   curriculum: {
      _id: STRING
      deleted_at: NUMBER
      data: STRING
      status: STRING
      tag: STRING
      user: STRING
   }
}
```

`PUT /curriculum?id={CURRICULUM_ID}`

```
REQUEST
{
   status: STRING
}

RESPONSE
{
   message: STRING
   curriculum: {
      _id: STRING
      deleted_at: NUMBER
      data: STRING
      status: STRING
      tag: STRING
      user: STRING
   }
}
```

`DELETE /curriculum?id={CURRICULUM_ID}`

```
RESPONSE
{
   message: STRING
}
```

---

## Education

`GET /education`

```
RESPONSE
{
   education: [
      {
         _id: STRING
         title: STRING
         institution: STRING
         start_date: STRING
         end_date: STRING
         comment: STRING
         certification: BOOLEAN
         tag: STRING
         user: STRING
      }
   ]
}
```

`POST /education`

```
REQUEST
{
   title: STRING
   institution: STRING
   start_date: STRING
   end_date: STRING
   comment: STRING (optional)
   certification: BOOLEAN
   tag: STRING
   user: STRING
}

RESPONSE
{
   message: STRING
   education: [
      _id: STRING
      title: STRING
      institution: STRING
      start_date: STRING
      end_date: STRING
      comment: STRING
      certification: BOOLEAN
      tag: STRING
      user: STRING
   ]
}
```

`PUT /education?id={EDUCATION_ID}`

```
REQUEST
{
   title: STRING
   institution: STRING
   start_date: STRING
   end_date: STRING
   comment: STRING (optional)
   certification: BOOLEAN
}

RESPONSE
{
   message: STRING
   education: [
      _id: STRING
      title: STRING
      institution: STRING
      start_date: STRING
      end_date: STRING
      comment: STRING
      certification: BOOLEAN
      tag: STRING
      user: STRING
   ]
}
```

`DELETE /education?id={EDUCATION_ID}`

```
RESPONSE
{
   message: STRING
}
```

---

## Job

`GET /job`

```
RESPONSE
{
   jobs: [
      {
         _id: STRING
         title: STRING
         organization: STRING
         start_date: STRING
         end_date: STRING
         main_job: BOOLEAN
         tasks: [ STRING ]
         tag: STRING
         user: STRING
      }
   ]
}
```

`POST /job`

```
REQUEST
{
   title: STRING
   organization: STRING
   start_date: STRING
   end_date: STRING
   main_job: BOOLEAN
   tasks: [ STRING ]
   tag: STRING
}

RESPONSE
{
   message: STRING
   job: {
      _id: STRING
      title: STRING
      organization: STRING
      start_date: STRING
      end_date: STRING
      main_job: BOOLEAN
      tasks: [ STRING ]
      tag: STRING
      user: STRING
   }
}
```

`PUT /job?id={JOB_ID}`

```
REQUEST
{
   title: STRING
   organization: STRING
   start_date: STRING
   end_date: STRING
   main_job: BOOLEAN
   tasks: [ STRING ]
}

RESPONSE
{
   message: STRING
   job: {
      _id: STRING
      title: STRING
      organization: STRING
      start_date: STRING
      end_date: STRING
      main_job: BOOLEAN
      tasks: [ STRING ]
      tag: STRING
      user: STRING
   }
}
```

`DELETE /job?id={JOB_ID}`

```
RESPONSE
{
   message: STRING
}
```

---

## Language

`GET /language`

```
RESPONSE
{
   languages: [
      {
         _id: STRING
         language: STRING
         level: STRING
         user: STRING
      }
   ]
}
```

`POST /language`

```
REQUEST
{
   language: STRING
   level: STRING
}

RESPONSE
{
   message: STRING
   language: {
      _id: STRING
      language: STRING
      level: STRING
      user: STRING
   }
}
```

`PUT /language?id={LANGUAGE_ID}`

```
REQUEST
{
   language: STRING
   level: STRING
}

RESPONSE
{
   message: STRING
   language: {
      _id: STRING
      language: STRING
      level: STRING
      user: STRING
   }
}
```

`DELETE /language?id={LANGUAGE_ID}`

```
RESPONSE
{
   message: STRING
}
```

---

## Personal

`GET /personal`

```
RESPONSE
{
   personal: {
      _id: STRING
      name: STRING
      birth: STRING
      email: STRING
      phone: STRING
      socials: [ STRING ]
      user: STRING
   }
}
```

`POST /personal`

```
REQUEST
{
   name: STRING
   birth: STRING (optional)
   email: STRING
   phone: STRING (optional)
}

RESPONSE
{
   message: STRING
   personal: {
      _id: STRING
      name: STRING
      birth: STRING
      email: STRING
      phone: STRING
      socials: [ STRING ]
      user: STRING
   }
}
```

`PUT /personal?id={PERSONAL_ID}`

```
REQUEST
{
   name: STRING
   birth: STRING (optional)
   email: STRING
   phone: STRING (optional)
}

RESPONSE
{
   message: STRING
   personal: {
      _id: STRING
      name: STRING
      birth: STRING
      email: STRING
      phone: STRING
      socials: [ STRING ]
      user: STRING
   }
}
```

---

## Presentation

`GET /presentation`

```
RESPONSE
{
   presentations: [
      {
         _id: STRING
         text: STRING
         tag: STRING
         user: STRING
      }
   ]
}
```

`POST /presentation`

```
REQUEST
{
   text: STRING
   tag: STRING
}

RESPONSE
{
   message: STRING
   presentations: {
      _id: STRING
      text: STRING
      tag: STRING
      user: STRING
   }
}
```

`PUT /presentation?id={PRESENTATION_ID}`

```
REQUEST
{
   text: STRING
}

RESPONSE
{
   message: STRING
   presentations: {
      _id: STRING
      text: STRING
      tag: STRING
      user: STRING
   }
}
```

`DELETE /presentation?id={PRESENTATION_ID}`

```
RESPONSE
{
   message: STRING
}
```

---

## Selector

`GET /selector`

```
RESPONSE
{
   selectors: [
      {
         _id: STRING
         name: STRING
         organization: STRING
         email: STRING
         curriculum: STRING
      }
   ]
}
```

`POST /selector`

```
REQUEST
{
   name: STRING (optional)
   organization: STRING
   email: STRING
   curriculumId: STRING
}

RESPONSE
{
   message: STRING
   selector: {
      _id: STRING
      name: STRING (optional)
      organization: STRING
      email: STRING
      curriculum: STRING
   }
}
```

`PUT /selector?id={SELECTOR_ID}`

```
REQUEST
{
   name: STRING (optional)
   organization: STRING
   email: STRING
}

RESPONSE
{
   message: STRING
   selector: {
      _id: STRING
      name: STRING (optional)
      organization: STRING
      email: STRING
      curriculum: STRING
   }
}
```

`DELETE /selector?id={SELECTOR_ID}`

```
RESPONSE
{
   message: STRING
   curriculum: {
      _id: STRING
      deleted_at: NUMBER
      data: STRING
      status: STRING
      selector: STRING
      user: STRING
   }
}
```

---

## Skill

`GET /skill`

```
RESPONSE
{
   skills: [
      {
         _id: STRING
         name: STRING
         tag: STRING
         user: STRING
      }
   ]
}
```

`POST /skill`

```
REQUEST
{
   skills: [
      {
         name: STRING
         tag: STRING
      }
   ]
}

RESPONSE
{
   message: STRING
   skills: [
      {
         _id: STRING
         name: STRING
         tag: STRING
         user: STRING
      }
   ]
}
```

`PUT /skill?id={SKILL_ID}`

```
REQUEST
{
   name: STRING
}

RESPONSE
{
   message: STRING
   skill: {
      _id: STRING
      name: STRING
      tag: STRING
      user: STRING
   }
}
```

`DELETE /skill?id={SKILL_ID}`

```
RESPONSE
{
   message: STRING
}
```

---

## Social

`POST /social`

```
REQUEST
{
   socials: [ STRING ]
}

RESPONSE
{
   message: STRING
   contact: {
      _id: STRING
      email: STRING
      socials: [ STRING ]
      user: STRING
   }
}
```
