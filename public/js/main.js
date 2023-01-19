const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_Status = document.getElementById("temp_status");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal == "") {
    city_name.innerText = `plz write the name before search`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e7d7cd0e54a692647e55f1b75e80c23c`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      console.log(arrData);
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      temp_Status.innerText = arrData[0].weather[0].main.temp;
      // const tempStatus = arrData[0].weather[0].main;
      // if (tempStatus == "Sunny") {
      //   temp_Status.innerHTML =
      //      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      // } else if (tempStatus == "Clouds") {
      //   temp_Status.innerHTML =
      //      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      // } else if (tempStatus == "Rainy") {
      //    temp_Status.innerHTML =
      //         "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      // } else {
      //     temp_Status.innerHTML =
      //         "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      // }
    } catch {
      city_name.innerText = `plz enter city name properly`;
    }
  }
};
submitBtn.addEventListener("click", getInfo());
