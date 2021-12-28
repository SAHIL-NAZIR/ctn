import React from 'react'
import './stats.css'

const Stats = (props) => {
    return (
        <div className='stats'>
            <svg className={props.colorClass} width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.8036 5.44994C29.9847 1.88801 24.0654 0.227572 18.3481 0.833918C12.6307 1.44026 7.58353 4.26372 4.31689 8.68316C1.05025 13.1026 -0.168283 18.756 0.929361 24.3997C2.027 30.0434 5.35091 35.215 10.1699 38.777L22.4867 22.1135L34.8036 5.44994Z"/>
            </svg>

            <span>{props.number}</span>
            <span>{props.text}</span>
        </div>
    )
}

export default Stats
