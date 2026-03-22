document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("readBtn");
    const content = document.getElementById("moreContent");

    if(btn && content){
        btn.addEventListener("click", function(){

            content.classList.toggle("show");

            btn.innerText = content.classList.contains("show")
                ? "Wrap Up"
                : "Dive Deeper";
        });
    }

});