

async function reverseGeoCode(latitude,longitude) {
  try{
    const reversedata= await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=f5e9de3ee32b4d729bb75fa7cd4aaa59`);
    const data=await reversedata.json();
    const locationName=data?.features[0].properties.formatted;
    console.log(locationName);
    if(locationName){
      return locationName;
    }
  }
catch{
err=>console.error(err);
}
return {};

}

export default reverseGeoCode;