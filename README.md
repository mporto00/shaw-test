# shaw-test
Shaw &amp; Partners application test

## How to execute

Clone repository into your computer and run:

```npm run production```

**Important:**

To execute in Linux you need first alter package.json file in:
> .\shaw-test\package.json

altering the line (6) from:
> "production": "SET \"NODE_ENV=production\" && nodemon server.js",
>
to:
> "production": "NODE_ENV=production nodemon ./server.js"
>

## How to run automated test

```npm run test```
