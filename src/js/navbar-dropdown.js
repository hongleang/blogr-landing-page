const navDropdownItems = document.querySelectorAll('.nav-dropdown-item');
const navDropdownItemsChildren = document.querySelectorAll('.nav-dropdown-item__childrens');

const navDropdown = (event) => {
  const item = event.currentTarget;
  const arrow = item.children[0].children[0];
  const subItem = item.nextElementSibling;

  arrow.classList.toggle('active');
  subItem.classList.toggle('active');
};

Array.from(navDropdownItems)
     .forEach( item => item.addEventListener('click', navDropdown));