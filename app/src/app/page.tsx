'use client'

import { useState } from "react";
 
import { CitySelect } from "@/components/CitySelect";
import { SensorTypes} from "./charts/SensorTypes";
import { SensorTypesPie} from "./charts/SensorTypesPie"
import { TopEndpoints} from "./charts/TopEndpoints";
import { Cities } from "./charts/Cities"
import { Requests } from "./charts/Requests"

const pageTitle = "Building a weather dashboard";
const token = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN ?? ''; 

export default function StaticDashboard() {
  const [city, setCity] = useState('Denver');
  const handleCityChange = (value: string) => {
    setCity(value);
  };

  return (
    <main className="mx-auto w-3/4">
      <h1 className="text-2xl font-bold my-8">{pageTitle}</h1>
      <section className="border rounded-md p-4 mb-8" >
        <div>
        <h3 className="text-1xl font-bold my-8">{"Requests by city"}</h3>
        </div>
        <div className="my-3">
          <CitySelect city={city} onChange={handleCityChange} />
        </div>
      <div>
        <Requests city={city} />
      </div>
      <div className="grid grid-cols-2 gap-6"> 
        <SensorTypes city={city} />
        <SensorTypesPie city={city} />
      </div>
      </section>
      <section className="border rounded-md p-4 mb-8" >
      <div>
        <h3 className="text-1xl font-bold my-8">{"Total requests"}</h3>
        </div>
       <div>
        <Requests />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <TopEndpoints />
        <SensorTypes />
        <Cities />
      </div>
      </section>
    </main>
  );
}
