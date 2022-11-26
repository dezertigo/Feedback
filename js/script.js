const spoiler = document.querySelectorAll('.spoiler');
const spoilerWrapper = document.querySelectorAll('.spoiler__wrapper')
const body = document.querySelector('body');
if (spoiler) {
  body.addEventListener('click', spoilerToggle);
  function spoilerToggle(e) {
    if (e.target.closest('.spoiler')) {
      if (e.target.closest('.spoiler').classList.contains('active')) {
        e.target.closest('.spoiler').classList.remove('active');
        e.target.closest('.spoiler__preview').nextElementSibling.style.height = null;
      } else if (e.target.closest('.spoiler')) {
        spoiler.forEach(function (el) {
          el.classList.remove('active');
        });
        spoilerWrapper.forEach(function (el) {
          el.style.height = null;
        });
        e.target.closest('.spoiler').classList.toggle('active');
        e.target.closest('.spoiler__preview').nextElementSibling.style.height = e.target.closest('.spoiler__preview').nextElementSibling.scrollHeight + 'px';
      }
    }
  }
}

// const select = document.querySelector('select');
// let optionValues = [];
// for (let option of select.options) {
//   optionValues.push(option.label);
// }
// console.log(optionValues);

