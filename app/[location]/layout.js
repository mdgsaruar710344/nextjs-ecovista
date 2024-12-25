
export default function LocationLayout({children, aqi,temperature,weather,reverselocation}) {
  return (
  <div>
        <br></br>
        {aqi}
        {weather}
        {temperature}
        {reverselocation}
        {children}
 

  </div>
     

  );
}