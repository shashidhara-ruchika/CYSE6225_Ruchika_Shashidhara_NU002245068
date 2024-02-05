# CYSE6225_Ruchika_Shashidhara_NU002245068
My web application for: [CYSE6225 Network Structures &amp; Cloud Computing](https://spring2024.csye6225.cloud/)

## [Assignment 1](https://spring2024.csye6225.cloud/assignments/01/)
The objective of this assignment is to select a technology stack for a backend (API only) web application and to implement health check API.

### Web Application

* Programming Language: `TypeScript` 
* Relational Database: `PostgreSQL`
* Backend Frameworks: `Node.js` , `Express.js`
* ORM Framework: `Sequelize`

## How to run the application

1. Generate the npm packages

```
npm install
```

2. Add `.env` file
   
```
PORT=8080
DATABASE_NAME='app_db'
DATABASE_USER='myuser'
DATABASE_PASSWORD='password'
DATABASE_HOST='localhost'
DATABASE_POOL_MAX=5
DATABASE_POOL_MIN=0
DATABASE_POOL_MAX=30000
DATABASE_POOL_MAX=10000
DROP_DATABASE='true'
```

1. Run the application

```
npm run start
```

4. Debug the application
```
npm run dev
```



## Commands Used

### Linux

```
cd
```

```
mkdir
```

```
rmdir
```

```
ls
```

```
curl
```

### Git

```
git clone
```

```
git branch
```

```
git checkout -b
```

```
git add
```

```
git commit -m
```

```
git push -u origin
```



### Postgres
```
CREATE DATABASE app_db;
```

```
CREATE USER myuser WITH PASSWORD 'password';
```

```
GRANT ALL PRIVILEGES ON DATABASE app_db TO myuser;
```

```
GRANT USAGE, CREATE ON SCHEMA public TO myuser;
```

```
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO myuser;
``` 

```
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO myuser;
```


## References

1. [Creating a user, db & providing access in psql](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) 
2. [Sequelize](https://sequelize.org/docs/v6/getting-started/)
3. [Log4js](https://www.npmjs.com/package/log4js)
4. [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
5. [HEAD & OPTIONS](https://stackoverflow.com/questions/6660019/restful-api-methods-head-options#:~:text=OPTIONS%20tells%20you%20things%20such,status%20code%20would%20be%20returned.)
6. [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)

