import React from 'react'
import '../css/Event.css'

const Event = (props) => {
    return (
        <article className='event-information'>
            {props.image && <img src={props.image} alt={props.title} />}

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i> {props.date}
                        {props.time && <> <br /> {props.time}</>}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Event
