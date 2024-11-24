const progress = document.querySelector(".progress");
const progressBar = document.getElementById("progress");

// when opening the website, closing loading components 
window.onload = () => {
   setTimeout(() => {
      progress.classList.add("close");
   }, 1300);
}






// intervalid, loading progress
const intervalid = setInterval(() => {
   const computedStyle = getComputedStyle(progressBar);
   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
   if(width >= 100){
      clearInterval(intervalid);
      return;
   }
   progressBar.style.setProperty('--width',width + 0.3);
   
}, 1);
