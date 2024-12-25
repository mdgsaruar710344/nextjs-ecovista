'use client'

import {useRouter} from "next/navigation";
import { useEffect, useState } from "react";

function GetLocation({searchParams}) {

 const [position,setPosition]= useState({});
 const router= useRouter();


  const location={};

  useEffect(()=>{

    const getlocation = async ()=>{

      navigator.geolocation.getCurrentPosition(position=>{
        location.lat=position.coords.latitude;
        location.lon=position.coords.longitude;
        console.log(position.coords.latitude);
        setPosition(location);
        router.push(`/?lattitude=${position.coords.latitude}&longitude=${position.coords.longitude}`);
        const searchparams= Object.entries(new URLSearchParams(searchParams));
  console.log(searchparams);
        }
      )
    }
   getlocation();
  }

  ,[searchParams]);

  
  

    return (
      <div className="text-yellow-500">
        Location: 
        Latitude: {position.lat}
        <br></br>
        longitude: {position.lon}
      </div>
    );
   
  }
  



export default GetLocation;