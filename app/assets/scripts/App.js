import axios from 'axios';

axios.get('https://itk-exam-api.herokuapp.com/api/offices').then(response => {
    formatOffices(response.data);
})

function formatOffices(offices) {
    let containerEl = document.getElementById('offices');

    for (let i = 0; i < offices.length; i++) {

        let template = `<div class="info"><h2 class="location-info">${offices[i].name}</h2>
            <p>${offices[i].description}</p></div>`;

        if (offices[i].photo == null){
            let letter = offices[i].name;

            let newOffice = `<div class="location-item">
            <div class="image-location-container">${letter.charAt(0)}</div>
            ${template}
        </div>`;
            containerEl.innerHTML += newOffice;           
        } else {
        let newOffice = `<div class="location-item">
            <div class="image-location-flag"><img src="${offices[i].photo}" alt=""></div>
            ${template}
        </div>`;
            containerEl.innerHTML += newOffice;
        }
    }
}


let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        let current = document.querySelector(".active");
        current.classList.remove("active");
        this.className += " active";

        let change = document.getElementById('offices');
        if (listItems[0].classList.contains("active")){
            change.classList.remove("hide");
            change.classList.remove("location-grid");
            change.classList.add("location-list");
        } else if (listItems[1].classList.contains("active")) {
            change.classList.remove("hide");
            change.classList.remove("location-list");
            change.classList.add("location-grid");
        } else {
            change.classList.remove("location-list");
            change.classList.remove("location-grid");
            change.classList.add("hide");
        }
    });
}

