$(document).ready(function() {

  $('.navigation').mouseover(function() {
    $(".fa-copy").addClass('red');
    $(".fa-eye").addClass('blue');
    $(".fa-star").addClass('green');
    $(".fa-chart-bar").addClass('yellow');
    $(".fa-user").addClass('orange');

  });
  $('.navigation').mouseout(function() {
    $(".fa-copy").removeClass('red');
    $(".fa-eye").removeClass('blue');
    $(".fa-star").removeClass('green');
    $(".fa-chart-bar").removeClass('yellow');
    $(".fa-user").removeClass('orange');
  });

});
