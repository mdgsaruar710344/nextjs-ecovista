
async function GetWeatherInfo(latitude,longitude) {
  const data= await fetch(`http://api.weatherapi.com/v1/current.json?key=08544e0271f34688b9e203312242512&q=${latitude},${longitude}&aqi=yes`);
  const weatherdata=await data.json();
  // console.log(weatherdata);
  return weatherdata|| {};
}

export default GetWeatherInfo;