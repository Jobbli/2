document.querySelector('.js-year').innerHTML = new Date().getFullYear();

const scrollToElement = (elSelector, triggerSelector) => {
  const el = document.querySelector(elSelector);
  const triggers = document.querySelectorAll(triggerSelector);

  const callback = (item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  triggers.forEach(callback);
};

scrollToElement('#form', 'img');
scrollToElement('#form', 'a[href="#form"]');
scrollToElement('#video', 'a[href="#video"]');

