const amenities = {};

$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      amenities[this.getAttribute('data-id')] = this.getAttribute('data-name');
    } else {
      delete amenities[this.getAttribute('data-id')];
    }
    const out = $('div.amenities h4');
    let text = '';
    let sep = '';
    for (const key in amenities) {
      text += sep + amenities[key];
      sep = ', ';
    }
    if (text === '') {
      out.html('&nbsp;');
    } else {
      out.text(text);
    }
  });

  $.get('http://127.0.0.1:5001/api/v1/status/', function (data) {
    const circle = $('header #api_status');
    if (data.status === 'OK') {
      circle.addClass('available');
    } else {
      circle.removeClass('available');
    }
  });
});
