import { PropTypes } from "prop-types"
import React, { useEffect, useState } from "react"
import "./css/homePage.scss"
import { HomePage } from './HomePage';
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
                console.log('interval', interval);
                clearInterval(interval);
            }
        }
    });


    const onUpdateIndex = (newIndex) => {
        newIndex = newIndex + 1
        console.log('newIndex', newIndex);
        if (newIndex > 2 || newIndex <= 0) {
            newIndex = 0
        } else if ([0, 1, 2].includes(newIndex)) {

        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1
        }
        console.log('React.Children.count(children)', React.Children.count(children));
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