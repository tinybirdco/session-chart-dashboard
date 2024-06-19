'use client'

'use client'

import { BarList } from '@tinybirdco/charts'

const TINYBIRD_TOKEN = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN;

export function SensorTypes(params: {
  city?: string
}) {
  return (
    <BarList
      endpoint="https://api.us-east.tinybird.co/v0/pipes/sensor_types.json"
      token={TINYBIRD_TOKEN}
      index="sensor_type"
      categories={['requests']}
      colorPalette={['#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title=""
      height="300px"
      params={params}
    />
  )
}