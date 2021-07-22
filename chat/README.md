### chat
1. project 생성
``` bash
    $ mkdir chat
    $ cd chat
    $ npm init -y
    $ npm i -D express
    $ npm i -D socket.io moment
    $ npm i nodemon 
```

2. Project Directory
<pre>
  /chat
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- src
    |       |--- js
    |       |     |--- chat.js
    |       |--- index.html
    |--- app.js
</pre>

3. scripts
```
    json
{
  "name": "chat",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1",
    "moment": "^2.29.1",
    "socket.io": "^4.1.3"
  },
  "dependencies": {
    "nodemon": "^2.0.12"
  }
}
```
