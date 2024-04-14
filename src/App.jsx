
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calendar from "./pages/Calendar";

import "./index.css"
import AppLayout from "./ui/AppLayout";

import { EventListContext } from "./context/EventListContext";
import TableEvents from "./pages/TableEvents";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([])

  return (
    <>
      <BrowserRouter basename="/Calendar-events/">
      <EventListContext.Provider value={{events, setEvents}}>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route
              index
              element={<Calendar />}
            />
            <Route
              index
              element={<TableEvents />}
              path="events"
            />
          </Route>
        </Routes>
        </EventListContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
