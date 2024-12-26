const data= [
  {
    "city": "Delhi",
    "country": "India",
    "latitude": 28.6139,
    "longitude": 77.209
  },
  {
    "city": "Karachi",
    "country": "Pakistan",
    "latitude": 24.8607,
    "longitude": 67.0011
  },
  {
    "city": "Dhaka",
    "country": "Bangladesh",
    "latitude": 23.8103,
    "longitude": 90.4125
  },
  {
    "city": "Kathmandu",
    "country": "Nepal",
    "latitude": 27.7172,
    "longitude": 85.324
  },
  {
    "city": "Colombo",
    "country": "Sri Lanka",
    "latitude": 6.9271,
    "longitude": 79.8612
  },
  {
    "city": "Thimphu",
    "country": "Bhutan",
    "latitude": 27.4712,
    "longitude": 89.6419
  },
  {
    "city": "Male",
    "country": "Maldives",
    "latitude": 4.1755,
    "longitude": 73.5093
  },
  {
    "city": "Islamabad",
    "country": "Pakistan",
    "latitude": 33.6844,
    "longitude": 73.0479
  },
  {
    "city": "Mumbai",
    "country": "India",
    "latitude": 19.076,
    "longitude": 72.8777
  },
  {
    "city": "Chittagong",
    "country": "Bangladesh",
    "latitude": 22.3475,
    "longitude": 91.8123
  }
]
const getAllCities=()=>{
 const cities= data.map(city=>city);
 return cities;
}

const getCityByName= (locationName)=>{
const location= data.find(city=>city.city.toLocaleLowerCase()==locationName.toLocaleLowerCase());
return location||null;
}
export {getAllCities,getCityByName};