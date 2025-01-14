document.addEventListener('DOMContentLoaded', function () {
    // image pop-up
    var img = document.getElementById("profileImage");
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    // When the user clicks on the image, open the modal
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // When the user clicks on <span> (x), close the modal
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Print CV function
    var printCvLink = document.getElementById("printCv");
    printCvLink.onclick = function(event) {
        event.preventDefault(); 
        window.print(); // Trigger print dialog
    }
});
