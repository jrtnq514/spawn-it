![spawn-it logo](https://cdn.rawgit.com/jrtnq514/spawn-it/master/spawn-it.svg)

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
#### Boolean
```javascript
var spawn = require('spawn-it');

// simple - returns true or false
var randomBool = spawn.boolean.simple();

// array - returns an array of values (true or false) for a given length
var randomBools = spawn.boolean.array(length);

// coin flip - returns "heads" or "tails"
var randomSide = spawn.boolean.coinFlip();

// bit - returns 1 or 0
var randomBit = spawn.boolean.bit();
    
```

#### Date
```javascript
var spawn = require('spawn-it');

// weekday
    // name
    var randomWeekday = spawn.date.weekday.name();
    
    // abbr
    var randomWeekday = spawn.date.weekday.abbr();
    
    // number
    var randomWeekday = spawn.date.weekday.number();
    
    // allNames
    var randomWeekday = spawn.date.weekday.allNames();
    
    // allAbbrs
    var randomWeekday = spawn.date.weekday.allAbbr();
    
// month
    // name
    var randomMonth = spawn.date.month.name();
    
    // abbr
    var randomMonth = spawn.date.month.abbr();
    
    // number
    var randomMonth = spawn.date.month.number();
    
    // allNames
    var randomMonth = spawn.date.month.allNames();
    
    // allAbbrs
    var randomMonth = spawn.date.month.allAbbr();
    
// year
    // full
    var randomYear = spawn.date.year.full(min, max);
    
    // short
    var randomYear = spawn.date.year.short();
    
// decade
    // full
    var randomDecade = spawn.date.decade.full();
    
    // short
    var randomDecade = spawn.date.decade.short();
    
    // name
    var randomDecade = spawn.date.decade.name();
```
#### Number
```javascript
var spawn = require('spawn-it');

// int
    // between
    var randomInt = spawn.number.int.between(min, max);
    
    // ofLength
    var randomInt = spawn.number.int.ofLength(length);
    
    // array
    var randomInts = spawn.number.int.array(length, intMin, intMax)
    
// decimal
    // between
    var randomDecimal = spawn.number.decimal.between(min, max, precision, asString);
    
    // ofLength
    var randomDecimal = spawn.number.decimal.ofLength(length, precision, asString);

```

#### Person
```javascript
var spawn = require('spawn-it');

// names
    // first name
    var randomFirstName = spawn.person.names.firstName(gender);
    
    // last name
    var randomLastName = spawn.person.names.lastName();

```
#### Text
```javascript
var spawn = require('spawn-it');

// char - case is optional
var randomChar = spawn.text.char(case);

// string
    // between
    var randomString = spawn.text.string.between(min, max);
    
    // ofLength
    var randomString = spawn.text.string.ofLength(length);
    
    // random
    var randomString = spawn.text.string.random();
    
// utility
  // capitalizeFirst
  spawn.text.utility.capitalizeFirst(string, toLowerBefore)
```
    
###Contributors
[Josh Taylor](https://github.com/jrtnq514)  
[Nathan Francy](https://github.com/nathanfrancy)  
[Dylan Stanfield](https://github.com/dylanstanfield)

###License
[MIT](https://github.com/jrtnq514/spawn-it/blob/master/LICENSE)
