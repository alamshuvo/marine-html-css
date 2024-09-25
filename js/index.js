const modal = document.getElementById("modal");
document.getElementById("offerbtn").addEventListener("click", function() {
    
    modal.style.display = "block";
});
document.getElementById("close").addEventListener("click",
    function () {
        modal.style.display = "none";
    }
)