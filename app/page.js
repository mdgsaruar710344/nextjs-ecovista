'use client'

import {useRouter,useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";


export default  function Home() {

    const [loading,setLoading]=useState(false);
    const [location,setLocation]=useState({});

    const router=useRouter();

    const searchParams=  useSearchParams();
    const objectParams=Object.fromEntries(searchParams?.entries())
    console.log(objectParams);
 
    
   useEffect(()=>{


        if(objectParams.latitude && objectParams.longitude){
          router.push(`/location?latitude=${objectParams.latitude}&longitude=${objectParams.longitude}`);
          const location={lat:objectParams.latitude,
            lon:objectParams.longitude
          }
         setLocation(location);
        }

        else{
            setLoading(true);
          navigator.geolocation.getCurrentPosition(position=>{
          const latitude= position.coords.latitude;
          const longitude=position.coords.longitude;
          console.log(latitude,longitude);

          const location={lat:latitude,
            lon:longitude
          }
       
            router.push(`/current?latitude=${latitude}&longitude=${longitude}`);
            setLocation(location);
            setLoading(false);
          }      
        )}
      },[])
    
    


 
  // const searchparams=useSearchParams();
  // const finalParams=new URLSearchParams(searchParams);
  // const objectparams=Object.entries(searchParams);
  // const lastobject= Object.fromEntries(objectparams);
  // console.log(lastobject);


  return (
    <div className="items-center justify-items-center min-h-screen bg-cover text-yellow-500" style={{backgroundImage: "url('/background.png')"}}>
  <h1 className="text-yellow-400">Home  Page

  </h1>
 
  <br></br>
    {loading && < > Loading...</>}
    <div>
      longitude:
      {location.lon}
      <br></br>
      lattitude: {location.lat}
    </div>
    </div>
  );
}
