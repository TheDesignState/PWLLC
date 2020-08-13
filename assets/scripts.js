$(document).ready(function(){

  $("nav").find("li").on("click", "a", function () {
    $('.navbar-collapse.in').collapse('hide');
});


$("#home-link").click(function() {
  $('html,body').animate({
      scrollTop: $("body").offset().top},
      'slow');
});

$("#services-link").click(function() {
  $('html,body').animate({
      scrollTop: $("#services").offset.top},
      'slow');
});




// Question 1
  $("#q1-plus").click(function(){
    $("#q1-plus").addClass('d-none');
    $("#q1-minus").removeClass('d-none');
    $("#q2-minus").addClass('d-none');
    $("#q3-minus").addClass('d-none');
    $("#q4-minus").addClass('d-none');
    $("#q2-plus").removeClass('d-none');
    $("#q3-plus").removeClass('d-none');
    $("#q4-plus").removeClass('d-none');
    $("#a1").removeClass('d-none');
    $("#a2").addClass('d-none'); 
    $("#a3").addClass('d-none'); 
    $("#a4").addClass('d-none'); 
  });

  $("#q1-minus").click(function(){
    $("#q1-minus").addClass('d-none');
    $("#q1-plus").removeClass('d-none');
    $("#a1").addClass('d-none');
  });


  
// Question 2
$("#q2-plus").click(function(){
  $("#q2-plus").addClass('d-none');
  $("#q2-minus").removeClass('d-none');
  $("#q1-minus").addClass('d-none');
  $("#q3-minus").addClass('d-none');
  $("#q4-minus").addClass('d-none');
  $("#q1-plus").removeClass('d-none');
  $("#q3-plus").removeClass('d-none');
  $("#q4-plus").removeClass('d-none');
  $("#a2").removeClass('d-none');
  $("#a1").addClass('d-none'); 
  $("#a3").addClass('d-none'); 
  $("#a4").addClass('d-none'); 
});

$("#q2-minus").click(function(){
  $("#q2-minus").addClass('d-none');
  $("#q2-plus").removeClass('d-none');
  $("#a2").addClass('d-none');
});



// Question 3
$("#q3-plus").click(function(){
  $("#q3-plus").addClass('d-none');
  $("#q3-minus").removeClass('d-none');
  $("#q1-minus").addClass('d-none');
  $("#q2-minus").addClass('d-none');
  $("#q4-minus").addClass('d-none');
  $("#q1-plus").removeClass('d-none');
  $("#q2-plus").removeClass('d-none');
  $("#q4-plus").removeClass('d-none');
  $("#a3").removeClass('d-none');
  $("#a1").addClass('d-none'); 
  $("#a2").addClass('d-none'); 
  $("#a4").addClass('d-none'); 
});

$("#q3-minus").click(function(){
  $("#q3-minus").addClass('d-none');
  $("#q3-plus").removeClass('d-none');
  $("#a3").addClass('d-none');
});


// Question 4
$("#q4-plus").click(function(){
  $("#q4-plus").addClass('d-none');
  $("#q4-minus").removeClass('d-none');
  $("#q1-minus").addClass('d-none');
  $("#q2-minus").addClass('d-none');
  $("#q3-minus").addClass('d-none');
  $("#q1-plus").removeClass('d-none');
  $("#q2-plus").removeClass('d-none');
  $("#q3-plus").removeClass('d-none');
  $("#a4").removeClass('d-none');
  $("#a1").addClass('d-none'); 
  $("#a2").addClass('d-none'); 
  $("#a3").addClass('d-none'); 
});

$("#q4-minus").click(function(){
  $("#q4-minus").addClass('d-none');
  $("#q4-plus").removeClass('d-none');
  $("#a4").addClass('d-none');
});


  
 


});