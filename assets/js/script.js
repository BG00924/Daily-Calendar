$(document).ready(function() {
    //initial variables begin; used to select the appropriate textarea and pull its value
    var nineAmText = $('#text-9');
    var tenAmText = $('#text-10');
    var elevenAmText = $('#text-11');
    var twelvePmText = $('#text-12');
    var onePmText = $('#text-1');
    var twoPmText = $('#text-2');
    var threePmText = $('#text-3');
    var fourPmText = $('#text-4');
    var fivePmText = $('#text-5');
    //initial variables end
    //local storage variables begin; used to pull values from local storage by their keys
    var savedNineAmEvent = localStorage.getItem('nine-am-event') || '';
    var savedTenAmEvent = localStorage.getItem('ten-am-event') || '';
    var savedElevenAmEvent = localStorage.getItem('eleven-am-event') || '';
    var savedTwelvePmEvent = localStorage.getItem('twelve-pm-event') || '';
    var savedOnePmEvent = localStorage.getItem('one-pm-event') || '';
    var savedTwoPmEvent = localStorage.getItem('two-pm-event') || '';
    var savedThreePmEvent = localStorage.getItem('three-pm-event') || '';
    var savedFourPmEvent = localStorage.getItem('four-pm-event') || '';
    var savedFivePmEvent = localStorage.getItem('five-pm-event') || '';
    //localstorage variables end
    // button variables begin; used to select the appropriate button to save each  time block
    var nineAmButton = $('#nine-am');
    var tenAmButton = $('#ten-am');
    var elevenAmButton = $('#eleven-am');
    var twelvePmButton = $('#twelve-pm');
    var onePmButton = $('#one-pm');
    var twoPmButton = $('#two-pm');
    var threePmButton = $('#three-pm');
    var fourPmButton = $('#four-pm');
    var fivePmButton = $('#five-pm');
    //button variables end
    //this sets the value of each textarea to what was saved in localstorage giving persistance to the data
    nineAmText.val(savedNineAmEvent);
    tenAmText.val(savedTenAmEvent);
    elevenAmText.val(savedElevenAmEvent);
    twelvePmText.val(savedTwelvePmEvent);
    onePmText.val(savedOnePmEvent);
    twoPmText.val(savedTwoPmEvent);
    threePmText.val(savedThreePmEvent);
    fourPmText.val(savedFourPmEvent);
    fivePmText.val(savedFivePmEvent);

    //Begin save functions
    //Saves 9AM block
    function saveTextNine() {
        var nineInput = nineAmText.val().trim();
        //console.log(nineInput)
        localStorage.setItem('nine-am-event', nineInput);
    };
    nineAmButton.click(saveTextNine);
    //Saves 10AM block
    function saveTextTen(){
        var tenInput = tenAmText.val().trim();
        localStorage.setItem('ten-am-event', tenInput);
    };
    tenAmButton.click(saveTextTen);
    //Saves 11AM block
    function saveTextEleven(){
        var elevenInput = elevenAmText.val().trim();
        localStorage.setItem('eleven-am-event', elevenInput);
    };
    elevenAmButton.click(saveTextEleven);
    //Saves 12PM block
    function saveTextTwelve(){
        var twelveInput = twelvePmText.val().trim();
        localStorage.setItem('twelve-pm-event', twelveInput);
    };
    twelvePmButton.click(saveTextTwelve);
    //Saves 1PM block
    function saveTextOne(){
        var oneInput = onePmText.val().trim();
        localStorage.setItem('one-pm-event', oneInput);
    };
    onePmButton.click(saveTextOne);
    //Saves 2PM block
    function saveTextTwo(){
        var twoInput = twoPmText.val().trim();
        localStorage.setItem('two-pm-event', twoInput);
    };
    twoPmButton.click(saveTextTwo);
    //Saves 3PM block
    function saveTextThree(){
        var threeInput = threePmText.val().trim();
        localStorage.setItem('three-pm-event', threeInput);
    };
    threePmButton.click(saveTextThree);
    //Saves 4PM block
    function saveTextFour(){
        var fourInput = fourPmText.val().trim();
        localStorage.setItem('four-pm-event', fourInput);
    };
    fourPmButton.click(saveTextFour);
    //Saves 5PM block
    function saveTextFive(){
        var fiveInput = fivePmText.val().trim();
        localStorage.setItem('five-pm-event', fiveInput);
    };
    fivePmButton.click(saveTextFive);
    //End save functions
})

    //Sets and adds date in the header
    var currentDate = moment();
    var display = document.getElementById('currentDay');
    display.innerHTML = currentDate.format('dddd, MMMM Do');

    //
    var currentTime = moment().format("dddd MMMM Do YYYY, h:mm a");
    //Converts the date/time moment output to hours for the loop conditionals
    var currentTimeInt = moment().hour();

    // Sets a specific hour to each text area to allow for a loop to apply styles based on hour
    $(".row1").attr("data-time", moment("9:00am", "h:mm a").format("HH"));
    $(".row2").attr("data-time", moment("10:00am", "h:mm a").format("HH"));
    $(".row3").attr("data-time", moment("11:00am", "h:mm a").format("HH"));
    $(".row4").attr("data-time", moment("12:00pm", "h:mm a").format("HH"));
    $(".row5").attr("data-time", moment("1:00pm", "h:mm a").format("HH"));
    $(".row6").attr("data-time", moment("2:00pm", "h:mm a").format("HH"));
    $(".row7").attr("data-time", moment("3:00pm", "h:mm a").format("HH"));
    $(".row8").attr("data-time", moment("4:00pm", "h:mm a").format("HH"));
    $(".row9").attr("data-time", moment("5:00pm", "h:mm a").format("HH"));
    
    // Loop that cycles through and applies styles to each row based on current hour of the day
    for (var i = 1; i <= 12; i++) {
        var inputTime = $("." + "row" + i).attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        //Applies present class if current time matchs the hour assigned to that textarea
        if (currentTimeInt === inputTimeInt) {
            $("." + "row" + i).removeClass("past");
            $("." + "row" + i).addClass("present");
            $("." + "row" + i).removeClass("future");
        }
        //Applies past class if current time matchs the hour assigned to that textarea
        if (currentTimeInt > inputTimeInt) {
            $("." + "row" + i).removeClass("present");
            $("." + "row" + i).removeClass("future");
            $("." + "row" + i).addClass("past");
        }
        //Applies future class if current time matchs the hour assigned to that textarea
        if (currentTimeInt < inputTimeInt) {
            $("." + "row" + i).removeClass("present");
            $("." + "row" + i).addClass("future");
            $("." + "row" + i).removeClass("past");
        }
    }















// var auditTask = function() {
//     var date = moment();

// }