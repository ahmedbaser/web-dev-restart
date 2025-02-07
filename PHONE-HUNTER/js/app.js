const loadPhones = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phone, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
      // display 20 phones only 

      // display no phones found 
    const noPhone = document.getElementById('no-found-message');
    if(phone.length === 0) {
      noPhone.classList.remove('d-none')
    }  
    else {
      noPhone.classList.add('d-none')
    }
    // dispaly 10 phone only
   
    const showAll = document.getElementById('show-all');
    if(dataLimit && phone.length > 10) {
      phone = phone.slice(0, 10);
      showAll.classList.remove('d-none')
    } else {
      showAll.classList.add('d-none')
    }



    phone.forEach(phone => {
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    <div class="card p-4">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
     </div>
  </div>
 ` 

 phoneContainer.appendChild(phoneDiv);
    });
    // stop spinnner or loader 
    toggleSpinner(false)
}

const processSearch = (dataLimit) => {
  toggleSpinner(true);
  const  searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit)
}





// handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
  // start loader 
processSearch(10)
});

document.getElementById('search-field').addEventListener('keypress', function(e) {
 
  if(e.key === 'Enter') {
    processSearch(10);
  }
})

  const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if(isLoading) {
    loaderSection.classList.remove('d-none')
  } else {
    loaderSection.classList.add('d-none')
  }
}
// not the best way to load show all 
document.getElementById('btn-show-all').addEventListener('click', function(){
processSearch();
})

  const loadPhoneDetails = async id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  const res = await fetch(url);
  const data = await res.json();
  dispalyPhoneDetails(data.data);
}


  const dispalyPhoneDetails = phone => {
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailsModalLabel');
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  console.log(phone.mainFeatures.sensors[0]);
  phoneDetails.innerHTML = `
  <p>Release Date: ${phone.releaseDate ? phone.releaseDate: 'No Release date fou nd'}</p>
  <p>Stroage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Stroage found'}</p>
  <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth found'}
  <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor found'}</p> 
  `
}

loadPhones('apple'); 