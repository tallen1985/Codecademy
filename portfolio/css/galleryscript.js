
let bigpic = document.getElementById('bigPicImg');
let images = document.querySelectorAll('.galleryThumb');

images.forEach(function(i) {
    i.addEventListener('click', function() {
        bigpic.src = i.src;
    })
})
