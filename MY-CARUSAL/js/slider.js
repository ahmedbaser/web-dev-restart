const image = [
    'images/background.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
    
]
let imgIndex = 0;
const imgEl = document.getElementById('slider-img')
setInterval(() => {
    if(imgIndex === image.length) {
        imgIndex = 0;
    }
  const imageUrl = image[imgIndex];  
  console.log(imgIndex, imageUrl);
  imgEl.setAttribute('src', imageUrl)
  imgIndex++;
}, 1000) 