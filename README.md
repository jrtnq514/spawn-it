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
var studentLastName = spawn.string.names.lastName();
var gradePercentage = spawn.number.int.between(0, 100);

var test = {
  student: {
    firstName: studentFirstName,
    lastName: studentLastName
  },
  percentage: gradePercentage
};
```
####Only need a single module?
Sometimes you only need part of the functionality. Spawn-it lets you do that.
```javascript
var spawnNumber = require('spawn-it').number;

var myRandomInt = spawnNumber.int.between(-10, 10);
```

###Spawnable Data
* Boolean
  * simple
  ```javascript
  spawn.boolean.simple()
  ```
  * array
  ```javascript
  spawn.boolean.array(length)
  ```
  * coin flip
  ```javascript
  spawn.boolean.coinFlip()
  ```
  * bit
  ```javascript
  spawn.boolean.bit()
  ```
* Date
  * weekday
    * name
    ```javascript
    spawn.date.weekday.name()
    ```
    * abbr
    ```javascript
    spawn.date.weekday.abbr()
    ```
    * number
    ```javascript
    spawn.date.weekday.number()
    ```
    * allNames
    ```javascript
    spawn.date.weekday.allNames()
    ```
    * allAbbr
    ```javascript
    spawn.date.weekday.allAbbr()
    ```
  * month
    * name
    ```javascript
    spawn.date.month.name()
    ```
    * abbr
    ```javascript
    spawn.date.month.abbr()
    ```
    * number
    ```javascript
    spawn.date.month.number()
    ```
    * allNames
    ```javascript
    spawn.date.month.allNames()
    ```
    * allAbbr
    ```javascript
    spawn.date.month.allAbbr()
    ```
  * year
    * full
    ```javascript
    spawn.date.year.full([min, max])
    ```
    * short
    ```javascript
    spawn.date.year.short()
    ```
  * decade
    * full
    ```javascript
    spawn.date.decade.full()
    ```
    * short
    ```javascript
    spawn.date.decade.short()
    ```
    * name
    ```javascript
    spawn.date.decade.name()
    ```
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
    * array
    ```javascript
    spawn.number.int.array(length[, intMin, intMax])
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
    * last name
    ```javascript
    spawn.string.names.lastName()
    ```
    
###Contributors
[Josh Taylor](https://github.com/jrtnq514)  
[Nathan Francy](https://github.com/nathanfrancy)  

###License
[MIT](https://github.com/jrtnq514/spawn-it/blob/master/LICENSE)
