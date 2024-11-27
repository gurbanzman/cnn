const progress = document.querySelector(".progress");
const progressBar = document.getElementById("progress");
const listButton = document.getElementById("list-button");
const searchButton = document.getElementById("search-button");
const underMenu = document.getElementById("under--menu");

// when opening the website, closing loading components 
window.onload = () => {
   setTimeout(() => {
      progress.classList.add("close");
   }, 1300);
}

handleOpenAndCloseBtn(listButton);
handleOpenAndCloseBtn(searchButton);






// intervalid, loading progress
const intervalid = setInterval(() => {
   const computedStyle = getComputedStyle(progressBar);
   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
   if(width >= 100){
      clearInterval(intervalid);
      return;
   }
   progressBar.style.setProperty('--width',width + 0.5);
}, 0.3);

//  dynamic clicking open and close submenu
function handleOpenAndCloseBtn(btn){
   btn.addEventListener("click",() => {
      if(underMenu.classList.contains("open")){
         underMenu.classList.remove("open");
         listButton.classList.remove("icon-remove")
      }else{
         underMenu.classList.add("open");
         listButton.classList.add("icon-remove")
      }
   });
}
