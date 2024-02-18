
'use client'

import FeatherIcon from "feather-icons-react"
export default function BTNScrollTop() {
    const scrollToTop = () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button onClick={scrollToTop} className="absolute bottom-0 right-5 md:bottom-10 md:right-20 bg-white text-black p-3 rounded">
            <FeatherIcon icon="chevron-up" />
        </button>
    )
} 