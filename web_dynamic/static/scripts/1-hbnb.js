let amenities = {}
let i;

$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      amenities[this.getAttribute('data-id')] = this.getAttribute('data-name');
    } else {
      delete amenities[this.getAttribute('data-id')];
    }
    //update the h4
    const out = $('div.amenities h4');
    let text = '';
    let sep = '';
    for (const [key, value] of Object.entries(amenities)) {
      text += sep + value;
      sep = ', ';
    }
    if (text === '') {
      out.html('&nbsp;');
    } else {
      out.text(text);
    }
  });
});
