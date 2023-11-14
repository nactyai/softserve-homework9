$(document).ready(function () {
  $('.checkbox').on('change', function () {
    let checked = $('.checkbox:checked');
    let notChecked = $('.checkbox:not(:checked)');

    if (checked.length === 3) {
      notChecked.prop('disabled', true);
    } else {
      notChecked.prop('disabled', false);
    }
  });
});