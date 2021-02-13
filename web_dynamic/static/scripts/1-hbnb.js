let amenities = {}
let i;

$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      amenities.push({this.data-id: this.data-name});
    } else {
      amenities.delete(this.data-id);
    }
    //update the h4
    const out = $('div.amenities h4');
    out.html = '';
    for (const [key, value] of Object.entries(amenities)) {
      out.html += '&nbsp;' + value;
    }
  });
});
