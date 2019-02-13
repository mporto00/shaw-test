# shaw-test
Shaw &amp; Partners application test

## How to execute

Clone repository into your computer and run:

```npm run local```

**Important:**

To execute in Linux you need first alter package.json file in:
> .\shaw-test\package.json

altering the line (6) from:
> "local": "SET \"NODE_ENV=local\" && nodemon server.js",
>
to:
> "local": "NODE_ENV=local nodemon ./server.js"
>

## How to run automated test

```npm run test```
