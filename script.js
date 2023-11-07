// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var container = $(".container-lg");

 
 
  
  for (var i = 9; i <= 17; i++) {
    var hours = i;
    if(hours > 12){
      hours = i-12+"PM";
    }
    else{
      hours = i+"AM";
    }

    var time = $("<div>").attr('id', 'hour-'+i).addClass("row time-block").attr('num', i);
    var hourclass = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hours);
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


    
    $(".saveBtn").on("click", function(){
      var hour = $(this).data('num');
      var event = $("#hour-" + hour).val();
      localStorage.setItem("hour-" + hour, event);
    });

    for (var i = 9; i <= 17; i++) {
      localStorage.getItem("hour-" + i);
    }
  


  $('#currentDay').text(dayjs().format('dddd, MMMM, D'))
  
});



