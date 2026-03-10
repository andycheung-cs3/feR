// import React from 'react'
import {tours} from "../../data"
const Tour = ({image,date,title,info,icon,location,duration,cost}) => {
  return (
    <div className="tour-card">
                    <div className="tour-img-container">
                        {/* <img src="./assets/world-1.png" alt="" /> */}
                        <img src={image} alt="" />
                        <p className="tour-date">{date}</p>
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                            <h4>{title}</h4>
                        </div>
                        <p>{info}</p>
                        <div className="tour-footer">
                            <p><span><i className={icon}></i></span> {location}</p>
                            <p>{duration} days</p>
                            <p>from ${cost}</p>
                        </div>
                    </div>
                </div>
  )
}

export default Tour;
