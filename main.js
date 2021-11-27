alert("javascript file called");

var desktop_shareBtn = document.querySelector("#btn");
var shareDiv = document.querySelector(".share");
var shareBtn = document.querySelector("#sharebtn");

desktop_shareBtn.addEventListener("click", function(){

    if (shareDiv.style.display==="none"){
        shareDiv.style.display = "inline-flex";
    }
    else{
        shareDiv.style.display = "none";
    } 

}
);
