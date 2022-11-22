let menu = document.querySelector('#main-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('#main-menu');
	navbar.classList.toggle('open')
}
