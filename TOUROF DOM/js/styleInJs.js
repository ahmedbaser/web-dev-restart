const sections = document.querySelectorAll('section');
for(const section of sections) {
    section.style.border = '2px solid purple';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '15px';
    section.style.backgroundColor = 'gray';
}

// const placesContainer = document.getElementById('places-containr');
// placesContainer.style.backgroundColor = 'yellow'


const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text')
