(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// const text="I am a Software Engineer and a Data Science Enthusiast ! "; //you can change the template here 

// let index=0;

// function autowrite(){
//     document.querySelector('.underText').innerHTML=text.slice(0,index);
//     ++index;

//     if(index>text.length){
//         index=0;
//     }
// }

// setInterval(autowrite,100);