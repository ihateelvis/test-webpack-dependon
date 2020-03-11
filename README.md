# test-webpack-dependon
A tiny repo to test out the dependOn feature of webpack

Follow the following steps to get this running:
1. Clone this project. In the base folder, run `npm install` (`npm v6.13.4` and `node v10.18.1` are sufficient).
1. In the base directory, run `npm run deploy`.
1. Navigate to:
    1. http://127.0.0.1:8080/basepage-1.html (to see the single module case, importing `ModuleA`)
    1. http://127.0.0.1:8080/basepage-2.html (to see the multi-module case, importing all of modules `A` through `C`).
