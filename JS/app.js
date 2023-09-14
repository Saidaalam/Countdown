$(".timer").countdown("2024/01/01", function (event) {
  $(".days").html(event.strftime("%D"));
  $(".hours").html(event.strftime("%H"));
  $(".mins").html(event.strftime("%M"));
  $(".secs").html(event.strftime("%S"));
  
});