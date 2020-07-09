import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/header/header';
import '../../components/input/input';
import '../../components/dropdown/dropdown';
import '../../components/slider/slider';
import '../../components/checkbox/checkbox';
import '../../components/card/card';
import '../../components/footer/footer';
import '../../components/datepicker-block/datepicker-block';
import '../../components/pagination/pagination';
import './search-room.scss';
import $ from 'jquery';
import Datepicker from '../../components/datepicker-block/datepicker-block';

$('.search-room__input-wrapper .input__field').attr('disabled', '');

$('.search-room__aside-title').click((evt) => {
  evt.preventDefault();
  $('.search-room__form').toggleClass('d-block');
  $('.search-room__aside-title').toggleClass('search-room__aside-title_rotate');
});

$('.search-room__expandable-title').click((evt) => {
  evt.preventDefault();
  $('.search-room__expandable-text').toggleClass('d-none');
  $('.search-room__expandable-title').toggleClass('search-room__expandable-title_rotate');
});

$('.search-room__checkbox-wrapper .checkbox__input:gt(0)').prop('checked', true);
$('.search-room__expandable-wrapper .checkbox__input:lt(4)').prop('checked', true);
$('.search-room__expandable-wrapper .checkbox__input').eq(0).prop('checked', false);

$(document).ready(() => {
  const $button1 = $('.search-room__peoples-dropdown-wrapper .dropdown__wrapper button');
  const $button2 = $('.search-room__room-dropdown-wrapper .dropdown__wrapper button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.search-room__peoples-dropdown-wrapper .dropdown__set-btn').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');


  const $input1 = $('.input__field').eq(0);
  const $icon = $('.input__button').eq(0);
  const datepicker = new Datepicker($('.datepicker-block'));
  const $datepickerContainer = $('.search-room__datepicker-container');
  const months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
  ];
  const dateToValue = (date) => (`${(`0${date.getDate()}`).substr(-2)} ${months[date.getMonth()]}`);
  $icon.click(() => {
    $datepickerContainer.toggleClass('search-room__datepicker-container_visible');
  });
  datepicker.$setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.removeClass('search-room__datepicker-container_visible');
    $icon.text('expand_more');
    const dates = datepicker.dates.selectedDates;
    if (dates[1]) {
      $input1.attr('value', `${dateToValue(dates[0])} - ${dateToValue(dates[1])}`);
    } else {
      $input1.attr('value', '');
    }
  });
  datepicker.$clearBtn.click(() => {
    $input1.attr('value', '');
  });

});






// const $input1 = $('.input__field').eq(0);
//   const $icon = $('.input__button');
//   const $myDatepicker = $('.datepicker-block__content').datepicker().data('datepicker');
//   const $datepickerContainer = $('.search-room__datepicker-container');
//   const $setBtn = $('.datepicker-block__set-btn');
//   const $clearBtn = $('.datepicker-block__clear-btn');
//   const months = [
//     'янв', 'фев', 'мар', 'апр', 'май', 'июн',
//     'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
//   ];
//   const dateToValue = (date) => (`${(`0${date.getDate()}`).substr(-2)} ${months[date.getMonth()]}`);
//   $icon.eq(0).click(() => {
//     $datepickerContainer.toggleClass('search-room__datepicker-container_visible');
//   });
//   $setBtn.click((e) => {
//     e.preventDefault();
//     $datepickerContainer.removeClass('search-room__datepicker-container_visible');
//     $icon.eq(0).text('expand_more');
//     if ($myDatepicker.selectedDates[1]) {
//       $input1.attr('value', `${dateToValue($myDatepicker.selectedDates[0])} - ${dateToValue($myDatepicker.selectedDates[1])}`);
//     } else {
//       $input1.attr('value', '');
//     }
//   });
//   $clearBtn.click(() => {
//     $input1.attr('value', '');
//   });

// });