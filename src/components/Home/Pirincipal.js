import { PropTypes } from "prop-types"
import React, { useEffect, useState } from "react"
import "./css/homePage.scss"
export const Principal = ({ children }) => {
    Principal.propTypes = {
        // You can declare that a prop is a specific JS primitive. By default, these
        // are all optional.
        optionalArray: PropTypes.array,
    }

    return (
        <div className="homePage">
            <Carousel>
                <CarouselElement className='div'>Item 1</CarouselElement>
                <CarouselElement>Item 2</CarouselElement>
                <CarouselElement>Item 3</CarouselElement>
            </Carousel>
            <svg viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,229.3C384,203,480,149,576,128C672,107,768,117,864,101.3C960,85,1056,43,1152,37.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </div>

    )

}
const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                onUpdateIndex(activeIndex)
            }
        }, 2000);
        return () => {
            if (interval) {
                //import step to clean the carrousel
                clearInterval(interval);
            }
        }
    });


    const onUpdateIndex = (newIndex) => {
        newIndex = newIndex + 1
        if (newIndex > 2 || newIndex <= 0) {
            newIndex = 0
        } else if ([0, 1, 2].includes(newIndex)) {

        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1
        }
        setActiveIndex(newIndex)
    }
    return (
        <>
            <div className="card-display-images"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className="inner"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: "100%" });
                    })}
                </div>
            </div>

        </>
    )
}


const CarouselElement = ({ children, width, className }) => {
    return (
        <div className={`carousel-item ${className}`}
        //style={{ width: '100%' }}
        >
            {children}
        </div>
    )
}