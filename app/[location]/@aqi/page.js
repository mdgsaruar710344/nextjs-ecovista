

function AQIPage({params, searchParams}) {
  const {location}=params;
  const {latitude,longitude}=searchParams;
  return (
    <div>
         This is AQI slot
         <br></br>
         Location:
         {location? location:''}
         Latitude:
         <br></br>
         {latitude && latitude}

    </div>
  );
}

export default AQIPage;