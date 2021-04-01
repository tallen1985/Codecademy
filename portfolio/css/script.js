let imageCount = 0;
const boxImage = document.getElementById("boxImage");
var imageBank = ["./portfolio/images/cat.jpeg","./portfolio/images/shire.jpeg","./portfolio/images/snow.jpeg","./portfolio/images/guitars.jpeg"]

setInterval(changeImage, 5000);

function changeImage() {
        boxImage.src = imageBank[imageCount];
        if (imageCount == 3) {
            imageCount = 0;
        } else {
            imageCount++;
        }
    }

