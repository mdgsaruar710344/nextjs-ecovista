import reverseGeoCode from "@/app/lib/GetReverseCode";



 const LocationPage=async ({params,searchParams})=> {
  const {latitude,longitude}=searchParams;
  console.log(latitude,longitude);
const locationName=await reverseGeoCode(latitude,longitude);
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