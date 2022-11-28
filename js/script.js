window.addEventListener('DOMContentLoaded', ()=> {
const body = document.querySelector('body');
const selectDefault = document.querySelectorAll('.form__select');
const placeholderText = ['Practice / Institution*', 'Medical Profession*', 'Type of Inquiry*'];
selectDefault.forEach((item, i) => {
  item.style.display = 'none';
  let customSelect = document.createElement('div');
  customSelect.classList.add('spoiler');
  let arrOption = [];
  for (let option of item.options) {
    arrOption.push(option.label)
  }
  let valueOpt ='';
  arrOption.forEach(el => {
    valueOpt +=`<div class="spoiler__item">${el}</div>`
  })
  customSelect.innerHTML = `
                <div class="spoiler__preview">
                  <div class="spoiler__left">${placeholderText[i]}</div>
                  <div class="spoiler__right">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.175 0L5 3.71159L8.825 0L10 1.14825L5 6L0 1.14825L1.175 0Z" fill="#545A6D" fill-opacity="0.6"/>
                      </svg>
                  </div>
                </div>
                <div class="spoiler__wrapper">
                ${valueOpt}
                </div>
                `;
 item.after(customSelect);
});

body.addEventListener('click', spoilerClicker);
function spoilerClicker(e) {
  if (document.querySelector(".spoiler__preview")) {
    if (e.target.closest(".spoiler__preview")) {
       if (e.target.closest(".spoiler").classList.contains("active")) {
          e.target.closest(".spoiler").classList.remove("active");
          e.target.closest(".spoiler__preview").nextElementSibling.style.height = null;
       } else if (e.target.closest(".spoiler")) {
          document.querySelectorAll(".spoiler").forEach(function (el) {
             el.classList.remove("active");
          });
          document.querySelectorAll(".spoiler__wrapper").forEach(function (el) {
             el.style.height = null;
          });
          e.target.closest(".spoiler").classList.toggle("active");
          e.target.closest(".spoiler__preview").nextElementSibling.style.height =
             e.target.closest(".spoiler__preview").nextElementSibling.scrollHeight + "px";
       }
    }
    if (e.target.closest(".spoiler__item")) {
       e.target.closest(".spoiler__item").parentElement.parentElement.firstElementChild.firstElementChild.textContent = e.target.closest(".spoiler__item").textContent;
       e.target.closest(".spoiler__item").parentElement.parentElement.firstElementChild.firstElementChild.style.color = '#424242';
       e.target.closest(".spoiler").classList.remove("active");
       e.target.closest(".spoiler__wrapper").style.height = null;
    }
  }
}

function initMap() {
  let map = new google.maps.Map(document.getElementById("contactsMap"), {
    center: { lat: 50.4633236482645, lng: 30.51960270400255},
    zoom: 15,
    disableDefaultUI: true,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
  let marker = new google.maps.Marker({
    position: {lat: 50.4633236482645, lng: 30.51960270400255},
    map: map,
    icon: 'https://i.ibb.co/fvRQNR4/Vector.png',
  });

  let info = new google.maps.InfoWindow({
    content: `<div class="address">
    <p class="address__title">
      Voodoo
    </p>
    <address class="address__location">
      137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine
    </address>
    <ul class="address__list">
      <li class="address__item">
        <div class="address__img">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.375 9.16497V10.79C11.3762 11.095 11.2488 11.3864 11.024 11.5926C10.7993 11.7989 10.498 11.9008 10.1942 11.8733C8.52737 11.6922 6.92629 11.1226 5.51958 10.2104C4.21082 9.37875 3.10122 8.26915 2.26958 6.96039C1.35415 5.54729 0.784463 3.93843 0.606665 2.26414C0.579296 1.96128 0.680479 1.66086 0.885496 1.43627C1.09051 1.21167 1.38049 1.08359 1.68458 1.08331H3.30958C3.85334 1.07795 4.31681 1.47654 4.39291 2.01497C4.4615 2.53501 4.5887 3.04562 4.77208 3.53706C4.9209 3.93295 4.82571 4.37924 4.52833 4.67997L3.84041 5.36789C4.61151 6.72398 5.73433 7.8468 7.09041 8.61789L7.77833 7.92997C8.07906 7.63259 8.52536 7.53741 8.92125 7.68622C9.41269 7.8696 9.9233 7.9968 10.4433 8.06539C10.988 8.14223 11.3886 8.61507 11.375 9.16497Z" stroke="#52514F" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        </div>
        <a href="#" class="address__link">
          1-800-480-9597
        </a>
      </li>
      <li class="address__item">
        <div class="address__img">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H10C10.55 2 11 2.45 11 3V9C11 9.55 10.55 10 10 10H2C1.45 10 1 9.55 1 9V3C1 2.45 1.45 2 2 2Z" stroke="#52514F" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 3L6 6.5L1 3" stroke="#52514F" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <a href="#" class="address__link">
          info@voodoo.com
        </a>
      </li>
    </ul>
  </div>`
  });
  info.open(map, marker);
}
window.initMap = initMap;
});