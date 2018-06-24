var wins = 0;
var losses = 0;

var math = 0;

// Random Number //
var number = Math.floor((Math.random()* 100) + 19);

// Random Crystal Values //
var red = Math.floor((Math.random()* 12)+ 1);
var green = Math.floor((Math.random()* 12)+ 1);
var purple = Math.floor((Math.random()* 12)+ 1);
var mango = Math.floor((Math.random()* 12)+ 1);

var configmath = function() {
    $('#wins').empty();
    $('#wins').append(wins);
    $('#losses').empty();
    $('#losses').append(losses);
    $('.math').empty();
    $('.math').append(math);

}

var reset = function() {
    math = 0;
    number = Math.floor((Math.random()* 100)+ 19);

    $('.number').empty();
    $('.number').append(number);

    red = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    purple = Math.floor((Math.random()* 12) + 1);
    mango = Math.floor((Math.random()* 12) + 1);
    configmath();
}

var config = function() {
    if (math == number) {
        wins = wins + 1;
        reset();
    } else if (math > number) {
        losses = losses + 1;
        reset();
    } else {
        configmath();
    }}


    $('.math').append(math);
    $('.number').append(number);

    $(document).ready(function() {

    $('#red').click(function() {
        math = math + green;
        config();
    })
    $('#green').click(function() {
        math = math + red;
        config();
    })
    $('#purple').click(function() {
        math = math + purple;
        config();
    })
    $('#mango').click(function() {
        math = math + mango;
        config();
    })
});