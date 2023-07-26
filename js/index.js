import { Router } from "./router.js"
const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explore", "/pages/explore.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();


const home = document.querySelector('.home');
const universe = document.querySelector('.universe');
const explore = document.querySelector('.explore');

home.addEventListener('click', () => {
    home.classList.add('active');
    universe.classList.remove('active');
    explore.classList.remove('active');
})

universe.addEventListener('click', () => {
    navChange();
})

function navChange() {
    home.classList.remove('active');
    universe.classList.add('active');
    explore.classList.remove('active');
}


explore.addEventListener('click', () => {
    home.classList.remove('active');
    universe.classList.remove('active');
    explore.classList.add('active');
})