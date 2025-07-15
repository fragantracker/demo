

const images = ["images/E_Guitar.jpg", "images/E_Guitar2.jpg", "images/E_Guitar3.jpg"];

var currentIndex = 0;

const nextButton = document.getElementById('next-btn');
const previousButton = document.getElementById('prev-btn');
const thisIsTheImage = document.getElementById('slider-image');


function updateImage(){
    thisIsTheImage.src = images[currentIndex];
}


nextButton.addEventListener("click",() =>{

    currentIndex = (currentIndex + 1) % images.length;
    
    updateImage();
});

previousButton.addEventListener("click",() =>{

    currentIndex = (currentIndex + 1) % images.length;
    updateImage();

})


