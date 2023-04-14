import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import money from '../assets/images/money.png'
import light from '../assets/images/light.png'
import star from '../assets/images/star.png'
import trophy from '../assets/images/trophy.png'

const servicesData = [
    {
        imgUrl: money,
        title: "Ultimate flexibility",
        desc: "You're in control, with free cancellation and payment options to satisfy any plan or budget"
    },
    {
        imgUrl: light,
        title: "Memorable experiences",
        desc: "Browse and book tours and activities so incredible, you'll want to tell your friends and loved onse."
    },
    {
        imgUrl: star,
        title: "Quality at our core",
        desc: "High quality standards. Millions of reviews. A Tripadvisor company. Award winning support."
    },
]

const ServiceList = () => {
    return (
        <>
            {
                servicesData.map((item, index) => (
                    <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                        <ServiceCard item={item} />
                    </Col>
                ))
            }
        </>
    )
}

export default ServiceList