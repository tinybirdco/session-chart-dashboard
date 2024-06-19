'use client'

import { BarList } from '@tinybirdco/charts'

const TINYBIRD_TOKEN = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN;

export function TopEndpoints() {
  return (
    <BarList
      endpoint="https://api.us-east.tinybird.co/v0/pipes/top_endpoints.json"
      token={TINYBIRD_TOKEN}
      index="endpoint"
      categories={['requests']}
      colorPalette={['#86BFDB', '#008060', '#0EB1B9', '#9263AF', '#5A72BF', '#FFBFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1', '#5B6FC0']}
      borderColor="#NANNANNAN"
      title="Endpoint requests"
      height="300px"
    />
  )
}
