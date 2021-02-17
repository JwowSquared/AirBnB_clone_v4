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

  $.ajax({
    url: 'http://127.0.0.1:5001/api/v1/places_search/',
    type: 'POST',
    data: JSON.stringify({}),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      let i;
      const out = $('section.places');
      for (i = 0; i < data.length; i++) {
        let inner = `<article><div class='title_box'><h2>${data[i].name}</h2>`;
        inner += `<div class='price_by_night'>$${data[i].price_by_night}</div></div>`;
        inner += `<div class='information'><div class='max_guest'>${data[i].max_guest} Guest`;
        if (data[i].max_guest > 1) inner += 's';
        inner += `</div><div class='number_rooms'>${data[i].number_rooms} Bedroom`;
        if (data[i].number_rooms > 1) inner += 's';
        inner += `</div><div class='number_bathrooms'>${data[i].number_bathrooms} Bathroom`;
        if (data[i].number_bathrooms > 1) inner += 's';
        inner += `</div></div><div class='description'>${data[i].description}</div></article>`;
        out.append(inner);
      }
    }
  });
});
