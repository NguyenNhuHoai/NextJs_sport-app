
import React from 'react'
import HomePage from '../../../components/HomePage/HomePage'
import { constructMetadata } from '../../../lib/utils'
export const metadata = constructMetadata({title:"home"})
const Page = () => {
  return (
    <>
     <HomePage/>
    </>
  )
}

export default Page
