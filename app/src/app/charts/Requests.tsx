'use client'

import { BarChart } from '@tinybirdco/charts'

const TINYBIRD_TOKEN = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN;

export function Requests(params: {
    city?: string
  }){
  return (
    <BarChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/requests.json"
      token={TINYBIRD_TOKEN}
      index="time"
      categories={['requests']}
      colorPalette={['#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Requests"
      height="150px"
      params={params}
    />
  )
}