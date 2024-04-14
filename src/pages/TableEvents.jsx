
import { useContext, useState } from "react"
import { format } from "date-fns";

import { EventListContext } from "../context/EventListContext"

import Table from "../ui/Table"

export default function TableEvents() {
    const {events} = useContext(EventListContext);
    let formatEvents = [...events];

    if(events.length) {
      formatEvents = formatEvents?.map?.(formatEvent => {
        return {
          ...formatEvent,
            start: format(new Date(formatEvent.start), 'MM/dd/yyyy'),
            end: format(new Date(formatEvent.end), 'MM/dd/yyyy'),
          }
      })
    }
    const columns = [
      {
        name: 'Event Title',
        selector: row => row.title,
      },
      {
        name: 'Start date',
        selector: row => row.start,
      },
      {
        name: 'End date',
        selector: row => row.end,
      },
    ];
  
    return <div>
      <Table
        columns={columns}
        data={formatEvents}
      />
    </div>
}