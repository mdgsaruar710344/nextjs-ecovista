'use client'
import Link from "next/link";
import { getAllCities } from "../data/database";
import { useState } from "react";


function LocationSwitcher() {
 const cities= getAllCities();

const [switcherOn,setSwitcherOn]=useState(false);

const handleSwitcher=()=>{
  setSwitcherOn(!switcherOn);
}

  return (
    <div>

      <button onClick={handleSwitcher} className="bg-blue rounded text-white p-2">Switcher</button>
      {switcherOn?  cities.map((city,idx)=><div key={idx} >
        <Link onClick={handleSwitcher} href={`/${city.city.toLocaleLowerCase()}?latitude=${city.latitude}&longitude=${city.longitude}`} > {city.city} </Link>


      </div>): '' }
    

    </div>
  );
}

export default LocationSwitcher;