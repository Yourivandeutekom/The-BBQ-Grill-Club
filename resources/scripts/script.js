window.addEventListener('load', () => {

    const navigation = document.getElementById('navigation');
    const logo = document.querySelector('#logo span');
    const menuLink = document.querySelector('nav ul li a');

    window.onscroll = () => {
        scrollFunction();
    }

    const scrollFunction = () => {
        if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            navigation.classList.add('scroll');
        } else {
            navigation.classList.remove('scroll');
        }
    }
});