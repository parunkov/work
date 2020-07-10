import '../../variables.scss';
import './like.scss';
import './like.pug';
import $ from 'jquery';

class Like {
  constructor(like) {
    this.$like = like;
    this.$input = like.find('.like__input');
    this.$text = like.find('.like__text');
    this.value = +this.$text.html();
    this.init();
  }
  init() {
    const onClick = () => {
      if (this.$input.prop('checked')) {
        this.$input.prop('checked', false);
        this.$text.html(this.value - 1);
      } else {
        this.$input.prop('checked', true);
        this.$text.html(this.value + 1);
      }
    };
    this.$like.click(onClick);
  }
}

const likes = [];

$('.like__label').each((i) => {
  likes[i] = new Like($('.like__label').eq(i));
});



// $(document).ready(() => {
//   const $like = $('.like__label');
//   $like.each((i) => {
//     const $input = $('.like input').eq(i);
//     const onClick = (e) => {
//       e.preventDefault();
//       const $text = $('.like__text').eq(i);
//       const value = +$text.html();
//       if ($input.prop('checked')) {
//         $input.prop('checked', false);
//         $text.html(value - 1);
//       } else {
//         $input.prop('checked', true);
//         $text.html(value + 1);
//       }
//     };
//     $like.eq(i).click(onClick);
//   });
// });
