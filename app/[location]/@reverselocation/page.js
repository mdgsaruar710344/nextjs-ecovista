import reverseGeoCode from "@/app/lib/GetReverseCode";



 const LocationPage=async ({params,searchParams})=> {
  let locationName;
  const latitude=searchParams?.latitude;
  const longitude=searchParams?.longitude;

    if(latitude&&longitude){
      locationName=await reverseGeoCode(latitude,longitude);
    }
  console.log(latitude,longitude);

  console.log('location name:',locationName);
  return (
    <div>
      This is Location slot for reverselocation
      <br></br>
      {locationName && locationName}
    </div>
  );
}

export default LocationPage;