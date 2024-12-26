import Image from "next/image";
import GetWeatherInfo from "../lib/GetWeatherInfo";
import LocationSwitcher from "../components/LocationSwitcher";
import { getCityByName } from "../data/database";
import Link from "next/link";


const LocationMainPage=async({params,searchParams})=> {

 const location=params?.location;
 let currentWeather;

      
        const inputLocation= location&& getCityByName(location);
        if(inputLocation){
          console.log("Input Location:",inputLocation);
          const weatherInfo=await GetWeatherInfo(inputLocation.latitude,inputLocation.longitude);
          const {current}=weatherInfo;
          currentWeather=current;
          console.log(weatherInfo);
        }
        if(!inputLocation && !searchParams.latitude ){
          return (
            <div>
              No info for this location!
              <Link href={`/`}> Go to current location</Link>
            </div>
          )
        }
      
      else if(searchParams.latitude&& searchParams.longitude){
        const {latitude,longitude}=searchParams;
        const weatherInfo=await GetWeatherInfo(latitude,longitude);
        const {current}=weatherInfo;
        currentWeather=current;
        console.log(weatherInfo);
      }

  return (

<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Wind!</h2>
    <p>

    Location Main Page.
      <br></br>
       Current Temp: {currentWeather && currentWeather.temp_c} degree Celcius
       <br></br>
       Current wind: {currentWeather && currentWeather.wind_kph} kph
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
  <LocationSwitcher></LocationSwitcher>
</div>

  );
}

export default LocationMainPage;