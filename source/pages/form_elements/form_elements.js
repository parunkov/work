import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page.js';
import '../../components/ui_kit/ui_kit.js';
import '../../components/input/input.js';
import '../../components/checkbox/checkbox.js';
import '../../components/radio/radio.js';
import '../../components/toggle/toggle.js';
import '../../components/like/like.js';
import '../../components/rate/rate.js';
import '../../components/slider/slider.js';
import '../../components/btn/btn.js';
import '../../components/pagination/pagination.js';
import '../../components/dropdown/dropdown.js';
import '../../components/info/info.js';
import '../../components/review/review.js';
import './form_elements.scss';
// import './form_elements.pug';

$('.form_elements__checkbox-1:gt(0)').prop('checked', true);
$('.form_elements__toggle').eq(0).prop('checked', true);
$('.form_elements__2-like').prop('checked', true);
$('.form_elements__item--17 .iqdropdown').addClass('menu-open');
$('.form_elements__checkbox-2:lt(4)').prop('checked', true);
$('.form_elements__checkbox-2').eq(0).prop('checked', false);
$('.form_elements__item--20 .iqdropdown').addClass('menu-open');
$('.form_elements__item--22 .iqdropdown').addClass('menu-open');
$('.form_elements__revew-1-like').prop('checked', true);
$(document).ready(() => {
	console.log($('.form_elements__item--22 .iqdropdown button').eq(1));
	$('.form_elements__item--22 .iqdropdown button').eq(1).trigger('click');
	$('.form_elements__item--22 .iqdropdown button').eq(1).trigger('click');
	$('.form_elements__item--22 .iqdropdown button').eq(3).trigger('click');
	$('.form_elements__item--22 .dropdown__set').trigger('click');
});

