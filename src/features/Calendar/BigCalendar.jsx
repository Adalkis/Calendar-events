import { useState, useContext } from 'react'
import { Calendar } from 'react-big-calendar'

import uuid from 'react-uuid';
import { dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

import "react-big-calendar/lib/css/react-big-calendar.css"
import CreateEditCalendarEvent from './CreateEditCalendarEvent'

import { EventListContext } from '../../context/EventListContext';

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
export default function BigCalendar() {
    const [showModal, setShowModal] = useState(false)
    const [selectedSlot, setSelectedSlot] = useState({})

    const {events, setEvents} = useContext(EventListContext)

    const onSaveEvent = (event) => {
      if(event.id) {
        setEvents(eventsList => {
          return eventsList.map(eventList => {
            if(eventList.id == event.id) return event
            return eventList
          })
        })
      }
      else setEvents(events=> [...events, {...event, id: uuid(), allDay:false}])

      setShowModal(show => !show)
    }

    const handleSelectedSlot = (selectedSlot) => {
      setSelectedSlot({title: "", ...selectedSlot})
      setShowModal(show => !show)
    }

    return(
      <div className='w-full h-full'>
         {showModal && 
        <CreateEditCalendarEvent 
          onCloseModal={() => setShowModal(show => !show)}
          onSaveEvent={onSaveEvent}
          selectedSlot={selectedSlot}
        />
      }
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={events}
        style={{ height:700 }}
        selectable={true}
        onSelectSlot={handleSelectedSlot}
        onSelectEvent={handleSelectedSlot}
      />
     
    </div>
    )
}