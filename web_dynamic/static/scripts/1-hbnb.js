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
});
