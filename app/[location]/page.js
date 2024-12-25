import Image from "next/image";
import GetWeatherInfo from "../lib/GetWeatherInfo";


const LocationMainPage=async({params,searchParams})=> {
  const {latitude,longitude}=searchParams;
 const weatherInfo=await GetWeatherInfo(latitude,longitude);
 const {current}=weatherInfo;
 console.log(weatherInfo);
  return (

<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Wind!</h2>
    <p>

    Location Main Page.
      <br></br>
       Current Temp: {weatherInfo && current.temp_c} degree Celcius
       <br></br>
       Current wind: {weatherInfo && current.wind_kph} kph
       <Image 
       alt="wind"
       src="/icon_wind.png"
       height={200}
       width={200}
       >

       </Image>
    </p>
  </div>
  <figure>
   
  </figure>
</div>

  );
}

export default LocationMainPage;