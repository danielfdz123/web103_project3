import React, { useState, useEffect } from 'react'

import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import Event from '../components/Event'

import '../css/Event.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        (async () => {
            try 
            {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)

                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
            }
            catch (error)
            {
                console.error(error)
            }
        })()
    }, [])

    const showAllEvents = async () => {
        const eventsData = await EventsAPI.getAllEvents()
        setEvents(eventsData)
    }

    const filterByLocation = async (event) => {
        const locationId = event.target.value
        const eventsData = await EventsAPI.getEventsByLocation(locationId)
        setEvents(eventsData)
    }

    return (
        <div className = 'events'>
            <div className = 'eventsFilter'>
                <select onChange = {filterByLocation} defaultValue=''>
                    <option value=''>See events at . . .</option>
                    {locations.map((location) => (
                        <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                </select>

                <button onClick={showAllEvents}> Show All </button>
            </div>

            <div className = 'eventsLayout'>
                {events.length > 0
                    ? events.map((event) => (
                        <Event
                            key = {event.id}
                            id = {event.id}
                            title = {event.title}
                            date = {event.date}
                            time = {event.time}
                            image = {event.image}
                        />
                    ))
                    : <p>No events scheduled yet!</p>}
            </div>
        </div>
    )
}

export default Events