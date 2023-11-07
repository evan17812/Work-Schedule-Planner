// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  var container = $(".container-lg");
  container.on("click", ".saveBtn", function () {
    var timeblock = $(this).closest(".time-block");
    var info = timeblock.data("info");
    var eventText = timeblock.find(".a").val();
    console.log(eventText);
    localStorage.setItem("event_" + info, eventText);
  });

  // for (var a = 9; a <= 17; a++) {
  //   var eventText = localStorage.getItem("event_" + a);
  //   if (eventText) {
  //     $(".time-block[data-hour='" + hour + "']")
  //       .find(".event-input")
  //       .val(eventText);
  //   }
  // }


  
  for (var i = 9; i <= 17; i++) {
    var hour = i;
    if(hour > 12){
      hour = i-12+"PM";
    }
    else{
      hour = i+"AM";
    }

    var time = $("<div>").attr('id', 'hour-'+i).addClass("row time-block");
    var hourclass = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hour);
    var text = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows","3");
    var button = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label","save");
    var txt = $("<i>").addClass("fas fa-save").attr("aria_hidden","true");

    button.append(txt);
    time.append(hourclass);
    time.append(text);
    time.append(button);
    container.append(time);
}

    for(var i = 9; i < 18; i++){
      if(i == dayjs().format('HH')){
        document.getElementById('hour-'+[i]).setAttribute("class", "row time-block present");
      }
      else if(i > dayjs().format('HH')){
        document.getElementById('hour-'+[i]).setAttribute("class", "row time-block future");
      }
      else if(i < dayjs().format('HH')){
        document.getElementById('hour-'+[i]).setAttribute("class", "row time-block past");
      }
      
    }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // var info = localStorage.getItem('info');
  // description.textContent = info;

  for (var hour = 9; hour <= 17; hour++) {
    var eventText = localStorage.getItem("event_" + hour);
    if (eventText) {
      $(".timeblock[data-hour='" + hour + "']")
        .find(".event-input")
        .val(eventText);
    }
  }




  $('#currentDay').text(dayjs().format('dddd, MMMM, D'))
  
});



