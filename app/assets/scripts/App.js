import axios from 'axios';

axios.get('https://itk-exam-api.herokuapp.com/api/offices').then(response => {
    formatOffices(response.data);
})

function formatOffices(offices) {
    let containerEl = document.getElementById('offices');

    for (let i = 0; i < offices.length; i++) {
        var newOffice = `<div class="location-item">
            <img src="${offices[i].photo}" alt="">
            <h2>${offices[i].name}</h2>
            <p>${offices[i].description}</p>
        </div>`;
        containerEl.innerHTML += newOffice;
    }
}
