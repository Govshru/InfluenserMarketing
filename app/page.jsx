'use client'

import React from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const page = () => {
  const route=useRouter()
  const handleInfuenserForm=()=>{
    route.push('/RegisterasInfluenser/InfluenserForm')
  }
  return (
    <div>
      Home page
      <Button onClick={handleInfuenserForm} >Influenser form</Button>
      
      
    </div>
  )
}

export default page
