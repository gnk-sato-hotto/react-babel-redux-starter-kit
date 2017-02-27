# React-babel-redux-starter-kit
React babel redux starter kit is a project template using React.js, Babel, and Redux

### Node version
node : v7.0.0  
npm  : 3.10.8  

### Nginx configuration
* add these configurations to ssl.conf
  production
    > location / {
    >     proxy_pass http://127.0.0.1:8897/;
    > }

  local
    > location ~\* ^/rbrsk/(.\*) {
    >     proxy_pass http://127.0.0.1:8896/$1$is_args$args;
    >     proxy_redirect http:// https://;
    >     client_max_body_size 2g;
    > }


### Modules
language : babel
core : react  
flux : redux  
routing : react-router  
async : axios  
css : sass  
task runner : webpack  
unit test: mocha and chai  
components: material design

### To run
* Clone this repository:
    > $ git clone THIS_REPO_URL

* Then install the dependencies:
    > $ npm install  
    > $ npm i --save --unsafe-perm node-sass

* Run development server:
    > $ npm start

### To build package
    development
    > $ npm run build_dev

    production
    > $ npm run build

### Eslint
    > npm install --save-dev eslint eslint-plugin-react

To do the actual linting, run:
    > npm run lint

### Unit Test
framework : mocha  
assert    : chai  
testDir   : test/  
testFileName : *.spec.js  

To execute the tests, run:

    > npm run test