// import React from 'react'
import Title from "./Title";
import Service from "./Service";
import {services} from '../../data'

const Services = () => {
  return (
    <section className="section services" id="services">
        {/* <h2>our <span>services</span></h2> */}
        <Title title='our' subtitle='services' />
        <div className="service-center">
            {services.map(service => {
                // return <Service {...service} key={service.id} />
                return <Service icon={service.icon} title={service.title} text={service.text} key={service.id} />
            })} 
        </div>
    </section>
  )
}

export default Services;
