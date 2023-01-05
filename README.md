This is an old project of mine to speed up automation of server side commands via GUI

It uses Angular 1.x, socket.io, and a Flux-like architecture with unidirectional data flow. Write nodejs scripts in `src/scripts` and the glue code is automatically generated to access them from templates in `src/views`.

```
npm i -g bower
npm install
node index
```