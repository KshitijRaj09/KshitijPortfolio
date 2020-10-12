const css = document.getElementById("second-css");
const theme = document.querySelector('.theme-1');

theme.addEventListener('click', ()=>{
    if(!css.href.includes("css/darkmode.css")){
        css.href="css/darkmode.css";
    }

    else{
           css.href="";
    }
});

var date = new Date();
const year = document.getElementById("year");
year.innerHTML = date.getFullYear()+ " ";