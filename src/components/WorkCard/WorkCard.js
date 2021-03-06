import React from 'react'
import './WorkCard.css'

export default function WorkCard({ image, title, description }) {
    return (
        <div className="workCard">
            <div className="zoomable">
                <img src={image} alt=""/>
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
            
        </div>

    )
}
