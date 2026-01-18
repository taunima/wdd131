const selectElem = document.querySelector('select');
const logo = document.querySelector('#byui-logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add("dark");
        logo.src = 'images/byui-logo-white.png';
    } else if (current == 'light') {
        document.body.classList.remove("dark");
        logo.src = 'images/byui-logo-blue.webp';
    }
}           
                    