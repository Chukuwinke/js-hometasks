let sliderImages = document.querySelectorAll('.image-to-show');
 let resumeButton = document.getElementById('resume');
 let stopButton = document.getElementById('stop');
 let count = 1;
 let arrIndex;
 let slider
 
 sliderImages[0].classList.add('active')
 sliderImages.forEach(element => {
     if(element.className != 'image-to-show active'){
        element.style.display = 'none'
     }
 });
    
 let triggerInterval = () => {
     slider = setInterval((arrIndex) =>{
        arrIndex = count % sliderImages.length;
        sessionStorage.setItem("position", arrIndex)
        sliderImages.forEach((element) => {
            element.style.display ='none'
        });
        sliderImages[arrIndex].style.display = '';
        
        count++;

    }, 1000);
}
     
 stopButton.onclick = () => clearInterval(slider);
 resumeButton.onclick = () => {
     arrIndex = parseInt(sessionStorage.getItem("position"))
     triggerInterval();
 }
triggerInterval();