const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const header_item = document.querySelector('header')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	const scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header_item.style.backgroundColor = '#29323c';
	} else {
		header_item.style.backgroundColor = 'transparent';
	}
});

// IM DEAD INSIDE Right NOW
// I DONT WANNA CODE ANYMORE damn

document.addEventListener('scroll', () => {
	const header_element = window.scrollY;
	if (header_element > 350) {
		header_item.style.backgroundColor = '#29323c';
	} else {
		header_item.style.backgroundColor = 'transparent';
	}
})

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
