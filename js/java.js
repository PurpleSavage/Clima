
/* nueva página*/
const optionMenu=document.querySelector(".select-menu"),
        selectBtn=document.querySelector(".select-btn"),
        options=document.querySelectorAll(".option"),
        sBtn_text=document.querySelector(".sBtn-text"),
        cityName=document.getElementById("city")
selectBtn.addEventListener("click",(e)=>{
    optionMenu.classList.toggle("active")
})
options.forEach(option=>{
    option.addEventListener("click",()=>{
        let selectedOption=option.querySelector(".option-text").innerText;
        sBtn_text.innerText=selectedOption;
        cityName.innerText=selectedOption;
        optionMenu.classList.remove("active")
    })
})
