const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form 
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// Toggle class active untuk shopping-cart 
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
}

// Klik di luar elemen

const hm = document.getElementById('hamburger-menu');
const sb = document.getElementById('search-button');
const sc = document.getElementById('shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// modal box 
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((itemDetailButton) => {
  if (itemDetailButton && itemDetailModal) {
    itemDetailButton.addEventListener('click', (e) => {
      itemDetailModal.style.display = 'flex';
      e.preventDefault();
    });
  }
});



// klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal {
  const modal = document.querySelector('#item-detail-modal');
  window.onclick = (e) =>{
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
