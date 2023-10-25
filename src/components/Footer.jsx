import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Footer = () => {
    const page = useRef(null)
    useEffect(() => {
        let el = page.current
        gsap.to(el, {
            opacity: 1,
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: el,
                // markers: true,
                start: "top center",
                end: "bottom center"
            }
        })
    }, [])
    return (
        <div className='Page' ref={page}>
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 12" fill="none">
                <path d="M1430 7.03472L1440.02 11.7735L1439.98 0.226533L1430 5.03473L1430 7.03472ZM0.0034722 12L1431 7.03124L1431 5.03126L-0.0034722 10L0.0034722 12Z" fill="#ADADAD" />
            </svg>
            <div className="talkme">
                <h1>Talk Me ... </h1>
                <h1>Talk Me ... </h1>
                <h1>Talk Me ... </h1>
                <h1>Talk Me ... </h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="15" viewBox="0 0 1440 12" fill="none">
                <path d="M1430 7.03472L1440.02 11.7735L1439.98 0.226533L1430 5.03473L1430 7.03472ZM0.0034722 12L1431 7.03124L1431 5.03126L-0.0034722 10L0.0034722 12Z" fill="#ADADAD" />
            </svg>
            <div className='footer-container'>
                <div className="leftfooter">
                    <div className='footer-ping'>
                        <h1>PING ME</h1>
                    </div>
                </div>
                <div className="rightfooter">
                    <div className='links'>
                        <h1>LINKEDIN</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="582" height="12" viewBox="0 0 582 12" fill="none">
                            <path d="M571.007 7.07107L581.04 11.7734L580.958 0.226692L570.992 5.07112L571.007 7.07107ZM0.00710462 11.1279L572.006 7.06397L571.992 5.06402L-0.00710462 9.12795L0.00710462 11.1279Z" fill="#ADADAD" />
                        </svg>
                    </div>
                    <div className='links'>
                        <h1>INSTAGRAM</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="582" height="12" viewBox="0 0 582 12" fill="none">
                            <path d="M571.007 7.07107L581.04 11.7734L580.958 0.226692L570.992 5.07112L571.007 7.07107ZM0.00710462 11.1279L572.006 7.06397L571.992 5.06402L-0.00710462 9.12795L0.00710462 11.1279Z" fill="#ADADAD" />
                        </svg>
                    </div>
                    <div className='links'>
                        <h1>TWITTER</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="582" height="12" viewBox="0 0 582 12" fill="none">
                            <path d="M571.007 7.07107L581.04 11.7734L580.958 0.226692L570.992 5.07112L571.007 7.07107ZM0.00710462 11.1279L572.006 7.06397L571.992 5.06402L-0.00710462 9.12795L0.00710462 11.1279Z" fill="#ADADAD" />
                        </svg>
                    </div>
                    <div className='links'>
                        <h1>GITHUB</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="582" height="12" viewBox="0 0 582 12" fill="none">
                            <path d="M571.007 7.07107L581.04 11.7734L580.958 0.226692L570.992 5.07112L571.007 7.07107ZM0.00710462 11.1279L572.006 7.06397L571.992 5.06402L-0.00710462 9.12795L0.00710462 11.1279Z" fill="#ADADAD" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer