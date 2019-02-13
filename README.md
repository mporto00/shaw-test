# Shaw and Parters Application Test

Backend Challenge

  - Step 1 - Create an API that will proxy all client requests to the appropriate GitHub endpoint. - **Ok**
  - Step 2 - Create tests for your application covering all endpoints. - **Ok**

## Link for live app

* [LiveApp]

## How to execute

  Clone repository into your computer and run:
```sh
$ npm run production
```  

**Important:**

To execute in Linux you need first alter package.json file in:
> .\shaw-test\package.json

altering the line (6) 

**from**: *"production": "SET \"NODE_ENV=production\" && nodemon server.js",*

**to**: *"production": "NODE_ENV=production nodemon ./server.js"*

## How to run automated test

```sh
$ npm run test
```  

### Postman collection for local execution and tests

* [PostmanCollection]


[//]: # (refer links)
   [LiveApp]: <https://shaw-app-test.herokuapp.com>
   [PostmanCollection]: <https://www.getpostman.com/collections/8c0f1e00497e71eca927>
