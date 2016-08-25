# spawn-it
[![Build Status](https://travis-ci.org/jrtnq514/spawn-it.svg?branch=master)](https://travis-ci.org/jrtnq514/spawn-it)
[![Coverage Status](https://coveralls.io/repos/github/jrtnq514/spawn-it/badge.svg?branch=master)](https://coveralls.io/github/jrtnq514/spawn-it?branch=master)

[Spawn-it](https://github.com/jrtnq514/spawn-it) is a node package for spawning random data.

###Installation
```javascript
$ npm install spawn-it
```
###Features
* Easy to use
* Readable syntax

###Usage
####Example
```javascript
var spawn = require('spawn-it');

var studentFirstName = spawn.string.names.firstName('male');
var gradePercentage = spawn.number.int.between(0, 100);

var test = {
  student: {
    firstName: studentFirstName,
    lastName: 'Smith'
  },
  percentage: gradePercentage
};
```

###Spawnable Data
* Number
  * int
    * between 
    ```javascript
    spawn.number.int.between(min, max)
    ```
    * ofLength
    ```javascript
    spawn.number.int.ofLength(length)
    ```
  * decimal (NOTE: If not returned as string trailing 0's will be removed)
    * between
    ```javascript
    spawn.number.decimal.between(min, max, precision[, toString])
    ```
    * ofLength
    ```javascript
    spawn.number.decimal.ofLength(length, precision[, toString])
    ```
* String
  * names 
    * first name
    ```javascript
    spawn.string.names.firstName(gender)
    ```
