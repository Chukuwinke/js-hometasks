const clickedButtons = document.querySelectorAll('.btn-wrapper .btn');
window.onkeypress = event => {
    clickedButtons.forEach(element => {
        if(element.getAttribute('data-key-char') == event.key){
            element.style.backgroundColor = 'blue'
        }
        else{
            element.style.backgroundColor = '#33333a'
        }
    })
}