# React-babel-redux-starter-kit
React babel redux starter kit is a project template using React.js, Babel, and Redux.

### Node version
node : v7.0.0  
npm  : 3.10.8  

### Nginx configuration
* add these configurations to ssl.conf

  local 
```
location ~* ^/rbrsk/(.*) {
   proxy_pass http://127.0.0.1:8896/$1$is_args$args;
   proxy_redirect http:// https://;
   client_max_body_size 2g;
}
```


### Modules
css      : sass  
core     : react  
flux     : redux  
async    : axios  
routing  : react-router  
language : babel  
unit test   : mocha and chai  
components  : material design & Atomic Design  
task runner : webpack  

### To run
* Clone this repository:
    > git clone THIS_REPO_URL

* Then install the dependencies:
    > npm install  
    > npm i --save --unsafe-perm node-sass

* Run development server:
    > npm start

* Open this URL
    > https://localhost/rbrsk/editUser

### To build package
    production
    > npm run build 

    development
    > npm run build_dev


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
