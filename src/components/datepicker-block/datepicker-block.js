import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker';
import '../../../node_modules/air-datepicker/dist/css/datepicker.css';
import './datepicker-block.scss';
import $ from 'jquery';

$('.datepicker-block__content').datepicker({
  minDate: new Date(),
  range: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2',
  },
  dateFormat: 'dd.mm.yyyy',
});

const myDatepickers = [];

$('.datepicker-block__content').each((i) => {
  myDatepickers[i] = $('.datepicker-block__content').eq(i).datepicker().data('datepicker');
});
const $clear = $('.datepicker-block__clear-btn');
$('.datepicker-block__set-btn').each((i) => {
  $('.datepicker-block__set-btn').eq(i).click((evt) => {
    evt.preventDefault();
  });
});
$clear.each((i) => {
  $clear.eq(i).click((evt) => {
    evt.preventDefault();
    myDatepickers[i].clear();
    $clear.eq(i).css({ display: 'none' });
  });
});
$('.datepicker-block').each(function (i) {
  $(this).mouseup(() => {
    if (myDatepickers[i].selectedDates.length === 0) {
      $clear.eq(i).css({ display: 'none' });
    } else {
      $clear.eq(i).css({ display: 'block' });
    }
  });
});