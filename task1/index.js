/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
  const headItems = $('.head');
  headItems.css('background-color', 'green');


  if (headItems.find('.inner').length > 0) {
    headItems.find('.inner').css('font-size', '35px');
  }
});
