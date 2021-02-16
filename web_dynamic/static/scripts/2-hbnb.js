$(document).ready(function () {
  $.get('http://127.0.0.1:5001/api/v1/status/', function (data) {
    const circle = $('header #api_status');
    if (data['status'] === 'OK') {
      circle.addClass('available');
    } else {
      circle.removeClass('available');
    }
  });
});
