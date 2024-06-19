'use client'

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CitySelect({ city, onChange }: { city: string, onChange: (value: string) => void }) {
  return (
    <Select
      value={city}
      onValueChange={(value) => {
        onChange(value)
      }}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a city" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Denver">Denver</SelectItem>
          <SelectItem value="Minneapolis">Minneapolis</SelectItem>
          <SelectItem value="New York">New York</SelectItem>
          <SelectItem value="Chicago">Chicago</SelectItem>
          <SelectItem value="Houston">Houston</SelectItem>
          <SelectItem value="Miami">Houston</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
