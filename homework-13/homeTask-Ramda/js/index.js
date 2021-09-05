const themeSwitch = document.getElementById('switch-check')
const darkThemeLink = document.createElement('link');
darkThemeLink.rel ='stylesheet';
document.getElementsByTagName('HEAD')[0].appendChild(darkThemeLink);


let darkTheme = localStorage.getItem('darktheme');


const activateDarkTheme = () => {
    darkThemeLink.href = './css/dark-theme.css'
    localStorage.setItem('darktheme', 'true');
}
const deactivateDarkTheme = () => {
    darkThemeLink.href = ''
    localStorage.setItem('darktheme', null);
}

if (darkTheme === 'true'){
    activateDarkTheme();
    themeSwitch.checked = true;
}

themeSwitch.onclick = () => {
    darkTheme = localStorage.getItem('darktheme');
    if(darkTheme !== 'true'){
        activateDarkTheme();
    }
    else{
        deactivateDarkTheme();
    }
}