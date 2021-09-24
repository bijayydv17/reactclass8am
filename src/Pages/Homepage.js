import React from 'react'
import Card from '../Components/Card'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Trending from '../Components/Trending'

const Homepage = () => {
    return (
        <>
        <Nav/>
            <Carousel/>
            <Card/>
            <Trending/>
            <Footer/>
        </>
    )
}

export default Homepage
