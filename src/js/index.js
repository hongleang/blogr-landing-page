const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const arrowSigns = document.querySelectorAll('.arrow');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownItemsChildren = document.querySelectorAll('.dropdown-item__childrens');

let dropDown = false;
let modalIsOpen = false;

const openModal = () => {
  const modal = document.querySelector('.modal');
  modalIsOpen = !modalIsOpen;
  
  if (modalIsOpen) {
    hamburgerIcon.src = "./images/icon-close.svg";
  } else {
    Array.from(arrowSigns).forEach( arrow => arrow.classList.remove('active'));
    Array.from(dropdownItemsChildren).forEach( item => item.classList.remove('active'));
    hamburgerIcon.src = "./images/icon-hamburger.svg";
  }
  
  modal.classList.toggle('active');
};

const openDropdown = (event) => {
  const item = event.currentTarget;
  const arrow = item.children[0].children[0];
  const subItem = item.nextElementSibling;

  arrow.classList.toggle('active');
  subItem.classList.toggle('active');
};



hamburgerBtn.addEventListener('click', openModal);

Array.from(dropdownItems)
     .forEach( item => item.addEventListener('click', openDropdown));
