$(document).ready(function() {


    //local storage variable
    var savedNineAmEvent = localStorage.getItem('nine-am-event') || '';
    var savedTenAmEvent = localStorage.getItem('ten-am-event') || '';
    var savedElevenAmEvent = localStorage.getItem('eleven-am-event') || '';
    var savedTwelvePmEvent = localStorage.getItem('twelve-pm-event') || '';
    var savedOnePmEvent = localStorage.getItem('one-pm-event') || '';
    var savedTwoPmEvent = localStorage.getItem('two-pm-event') || '';
    var savedThreePmEvent = localStorage.getItem('three-pm-event') || '';
    var savedFourPmEvent = localStorage.getItem('four-pm-event') || '';
    var savedFivePmEvent = localStorage.getItem('five-pm-event') || '';
    

    //initial variables
    var nineAmText = $('#text-nine');
    var tenAmText = $('#text-ten');
    var elevenAmText = $('#text-eleven');
    var twelvePmText = $('#text-twelve');
    var onePmText = $('#text-one');
    var twoPmText = $('#text-two');
    var threePmText = $('#text-three');
    var fourPmText = $('#text-four');
    var fivePmText = $('#text-five');

    var nineAmButton = $('#nine-am');
    var tenAmButton = $('#ten-am');
    var elevenAmButton = $('#eleven-am');
    var twelvePmButton = $('#twelve-pm');
    var onePmButton = $('#one-pm');
    var twoPmButton = $('#two-pm');
    var threePmButton = $('#three-pm');
    var fourPmButton = $('#four-pm');
    var fivePmButton = $('#five-pm');

    nineAmText.val(savedNineAmEvent);
    tenAmText.val(savedTenAmEvent);
    elevenAmText.val(savedElevenAmEvent);
    twelvePmText.val(savedTwelvePmEvent);
    onePmText.val(savedOnePmEvent);
    twoPmText.val(savedTwoPmEvent);
    threePmText.val(savedThreePmEvent);
    fourPmText.val(savedFourPmEvent);
    fivePmText.val(savedFivePmEvent);


    function saveTextNine() {
        var nineInput = nineAmText.val().trim();
        //console.log(nineInput)
        localStorage.setItem('nine-am-event', nineInput);
    };

    function saveTextTen(){
        var tenInput = tenAmText.val().trim();
        localStorage.setItem('ten-am-event', tenInput);
    };

    function saveTextEleven(){
        var elevenInput = elevenAmText.val().trim();
        localStorage.setItem('eleven-am-event', elevenInput);
    };

    function saveTextTwelve(){
        var twelveInput = twelvePmText.val().trim();
        localStorage.setItem('twelve-pm-event', twelveInput);
    };

    function saveTextOne(){
        var oneInput = onePmText.val().trim();
        localStorage.setItem('one-pm-event', oneInput);
    };

    function saveTextTwo(){
        var twoInput = twoPmText.val().trim();
        localStorage.setItem('two-pm-event', twoInput);
    };

    function saveTextThree(){
        var threeInput = threePmText.val().trim();
        localStorage.setItem('three-pm-event', threeInput);
    };

    function saveTextFour(){
        var fourInput = fourPmText.val().trim();
        localStorage.setItem('four-pm-event', fourInput);
    };

    function saveTextFive(){
        var fiveInput = fivePmText.val().trim();
        localStorage.setItem('five-pm-event', fiveInput);
    };


var auditTask = function() {
    var currentDate = moment();
    var display = $('#currentDay');
    display.innerHTML = currentDate;

    //$(currentDay).innerHTML(date)
    //console.log(currentDate);
}

auditTask();

    nineAmButton.click(saveTextNine);
    tenAmButton.click(saveTextTen);
    elevenAmButton.click(saveTextEleven);
    twelvePmButton.click(saveTextTwelve);
    onePmButton.click(saveTextOne);
    twoPmButton.click(saveTextTwo);
    threePmButton.click(saveTextThree);
    fourPmButton.click(saveTextFour);
    fivePmButton.click(saveTextFive);
})



















// var auditTask = function() {
//     var date = moment();

// }