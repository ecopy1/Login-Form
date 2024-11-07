const Wrapper = document.querySelector(".wrapper")
const LoginLink = document.querySelector(".Login-Link")
const RegisterLink = document.querySelector(".register-link")
const btnpopup = document.querySelector(".btnlogin-popup")
const iconclose = document.querySelector(".icon-close")

RegisterLink.addEventListener("click", ()=> {
    Wrapper.classList.add('active');
});

LoginLink.addEventListener("click", ()=> {
    Wrapper.classList.remove('active');
});

btnpopup.addEventListener("click", ()=> {
    Wrapper.classList.add('active-popup');
});

iconclose.addEventListener("click", ()=> {
    Wrapper.classList.remove('active-popup');
});