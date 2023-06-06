const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`Please double check your class names, there is no ${selector} class`);
}


const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click',()=>{ // when you click nav-btn class
  links.classList.toggle('show-links') // toggle `show-links` at links element
})

const date = getElement('#date');
const currentYear = new  Date().getFullYear();
date.textContent = currentYear;