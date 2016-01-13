/**
 * Created by user on 1/11/16.
 */
var express = require('express');
var path = require('path');
var adjectives = require('../json_data/adjectives.json');
var nouns = require('../json_data/nouns.json');

var router = express.Router();

router.get('/', function(request, response){
   response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/data', function(request, response){
   //var returnResponse = "this is a test";
    var twitterNames = generateTwitterNames();
   response.send(twitterNames);
});

module.exports = router;

//generate random array of adjectives and nouns
var generateTwitterNames = function(){
    var allTwitterNames = [];

    //shuffle the two arrays
    var shuffledAdjectives = shuffleArray(adjectives.adjectives);
    var shuffledNouns = shuffleArray(nouns.nouns);

    //build new array
    for(var i=0; i<10; i++){
        allTwitterNames.push(adjectives.adjectives[i] + nouns.nouns[i]);
    }
    return allTwitterNames;
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
