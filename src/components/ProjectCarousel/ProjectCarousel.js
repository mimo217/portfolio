import React from 'react'
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function ProjectCarousel ({ imageUrls }) {

    return(
        <div>
            <Carousel showThumb= {true} showArrows={true}>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}