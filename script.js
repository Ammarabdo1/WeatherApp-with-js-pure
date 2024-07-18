const searchInput = document.querySelector(".searchInput");
const searchIcon = document.querySelector(".searchIcon");
const Data = document.querySelector(".Data");
const allCitys = document.getElementById("allCitys");
const choseCity = document.querySelectorAll(".choseCity");
const notFoundDiv = document.getElementById("notFound");
const header = document.querySelector(".header");

const AllCities = [
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "The Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sudan, South",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const cityImages = {
  "Åland Islands": "images/Åland Islands.webp",
  Albania: "images/Albania.webp",
  Algeria: "images/Algeria.webp",
  "American Samoa": "images/American Samoa.webp",
  Andorra: "images/Andorra.webp",
  Angola: "images/Angola.webp",
  Anguilla: "images/Anguilla.webp",
  Antarctica: "images/Antarctica.webp",
  "Antigua and Barbuda": "images/Antigua and Barbuda.webp",
  Argentina: "images/Argentina.webp",
  Armenia: "images/Armenia.webp",
  Aruba: "images/Aruba.webp",
  Australia: "images/Australia.webp",
  Austria: "images/Austria.webp",
  Azerbaijan: "images/Azerbaijan.webp",
  Egypt: "images/Egypt.webp",
  Iraq: "images/Iraq.webp",
  Iran: "images/Iran.webp",
  Italy: "images/Italy.webp",
  "Saudi Arabia": "images/Saudi Arabia.webp",
  America: "images/America.jpeg",
};
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const emojis = {
  Clouds: "⛅",
  Clear: "🌞",
  Rain: "💧",
};

const ShowData = async (city) => {
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  let notFound = "Not found";
  let foundName = notFound;
  try {
    await fetch(FULL_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.name != undefined) {
          foundName = data.name;
        }
        Data.innerHTML = `
          <div>
              <h3>${data.name} </h3>
              <img src='${cityImages[data.name]}' >
          </div>
          <h1>${data.weather[0].main}${emojis[data.weather[0].main]}</h1>
          <p>🔥Temp: ${data.main.temp}℉</p>
          <p>💢Min Temp: ${data.main.temp_max} ℉</p>
          <p>💥Max Temp: ${data.main.temp_min} ℉</p>
      `;
      });
  } catch (error) {
    console.log(error.message);
  }

  if (foundName == notFound) {
    notFoundDiv.style.color = "red";
    notFoundDiv.innerText = "❌Not found...";
    header.style.color = 'orange';
  } else {
    notFoundDiv.style.color = "green";
    notFoundDiv.innerText = "✅Is existed...";
    header.style.color = 'green';
  }
};

//! focus in search input action
searchInput.addEventListener("focus", () => {
  if (
    searchInput.className == "searchInput" &&
    searchIcon.className == "searchIcon" &&
    allCitys.id == "allCitys"
  ) {
    searchInput.className = searchInput.className.replace(
      "searchInput",
      "searchInput2"
    );
    searchIcon.className = searchIcon.className.replace(
      "searchIcon",
      "searchIcon2"
    );
    allCitys.id = "allCitys2";
  }
});

//! click in choseCity button action
choseCity.forEach((city) => {
  city.addEventListener("click", () => {
    if (
      searchInput.className == "searchInput2" &&
      searchIcon.className == "searchIcon2" &&
      allCitys.id == "allCitys2"
    ) {
      searchInput.className = searchInput.className.replace(
        "searchInput2",
        "searchInput"
      );
      searchIcon.className = searchIcon.className.replace(
        "searchIcon2",
        "searchIcon"
      );
      allCitys.id = "allCitys";
    }
    searchInput.value = city.innerText;
    ShowData(searchInput.value);
  });
});

//! keyup in search input action
searchInput.addEventListener("keyup", () => {
  choseCity.forEach((city) => {
    if (city.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
      city.style.display = "block";
    } else {
      city.style.display = "none";
    }
  });
  ShowData(searchInput.value);
});

// searchDiv.addEventListener("scroll", () => {
//   console.log('run!')
//   if (
//     searchInput.className == "searchInput2" &&
//     searchIcon.className == "searchIcon2" &&
//     allCitys.id == "allCitys2"
//   ) {
//     searchInput.className = searchInput.className.replace(
//       "searchInput2",
//       "searchInput"
//     );
//     searchIcon.className = searchIcon.className.replace(
//       "searchIcon2",
//       "searchIcon"
//     );
//     allCitys.id = "allCitys";
//   }

// });
