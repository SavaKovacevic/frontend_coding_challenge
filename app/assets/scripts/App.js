import axios from 'axios';

//STOP LOADER IF DATA IS FETCHED
axios.get('https://itk-exam-api.herokuapp.com/api/offices')
    .then(response => {
        let overlay = document.querySelector('.loader-overlay');
        overlay.classList.remove("loader-overlay")
        overlay.classList.add("hide");
        formatOffices(response.data);
        getCordinates(response.data);
    });

//GRID AND LIST VIEW
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

//CHANGE VIEW
let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        let current = document.querySelector(".active");
        current.classList.remove("active");
        this.className += " active";

        let change = document.getElementById('offices');
        let map = document.getElementById('map');

        if (listItems[0].classList.contains("active")){
            change.classList.remove("hide");
            change.classList.remove("location-grid");
            change.classList.add("location-list");
            map.classList.remove("visible");
            map.classList.add("hide");
        } else if (listItems[1].classList.contains("active")) {
            change.classList.remove("hide");
            change.classList.remove("location-list");
            change.classList.add("location-grid");
            map.classList.remove("visible");
            map.classList.add("hide");
        } else {
            change.classList.remove("location-list");
            change.classList.remove("location-grid");
            change.classList.add("hide");
            map.classList.remove("hide");
            map.classList.add("visible");
        }
    });
}

//MAP
function getCordinates(cordinate) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (let i = 0; i < cordinate.length; i++) {
        var icon = {
            url: cordinate[i].photo, // url
            scaledSize: new google.maps.Size(40, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        };
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(Number(cordinate[i].latitude), Number(cordinate[i].longitude)),
            map: map,
            icon: icon
        });

        var locationInfo = new google.maps.InfoWindow();

        var marker, j;

        google.maps.event.addListener(marker, 'click', (function (marker, j) {
            return function () {
                locationInfo.setContent(cordinate[i].name);
                locationInfo.open(map, marker);
            }
        })(marker, j));
    }
} 

window.addEventListener('load', function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://maps.google.com/maps/api/js?sensor=false';
    document.body.appendChild(script);
});