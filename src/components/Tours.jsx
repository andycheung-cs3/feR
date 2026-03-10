// import React from 'react'
import {tours} from "../../data";
import Tour from "./Tour";
import Title from "./Title"
const Tours = () => {
  return (
    <section className="section tours" id="tours">
            {/* <h2>feature <span>tours</span></h2> */}
            {/* <Title title="Featured" subTitle="tours" /> */}
            <Title title='Featured' subtitle='tours' />
            <div className="tour-center">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} />;
                }
                )
                }
            </div>
        </section>
  )
}

export default Tours;
