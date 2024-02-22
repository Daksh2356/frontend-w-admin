import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import TechStackHomePage from '../components/Homepage/TechStack.HomePage'

const Blog = () => {
  return (
    <TechStackHomePage/>
  )
}

export default DefaultLayout(Blog)