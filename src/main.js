$(document).ready(function() {
  console.log('Am I working?');

  $('form').on('submit', function(event) {
    event.preventDefault();

    var colorEven = $('#colorEven').val();
    var colorOdd = $('#colorOdd').val();
    var evenText = $('#evenText').val();
    var oddText = $('#oddText').val();
    console.log(evenText);
    console.log(oddText);

    $('tbody tr:nth-child(even)').css('background-color', colorEven);
    $('tbody tr:nth-child(odd)').css('background-color', colorOdd);
    $('tbody tr:nth-child(even)').css('font-size', evenText);
    $('tbody tr:nth-child(odd)').css('font-size', oddText);
  });
});
