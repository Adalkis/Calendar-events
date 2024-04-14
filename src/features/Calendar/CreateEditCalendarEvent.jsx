import { useState } from "react";
import Button from "../../ui/Button";
import Datepicker from "../../ui/DatePicker";
import Input from "../../ui/Input";
import { Modal } from "../../ui/Modal";

export default function CreateEditCalendarEvent({onCloseModal, onSaveEvent, selectedSlot}) {
    const [eventTitle, setEventTitle] = useState(selectedSlot?.title);
    const [start, setStartDate] = useState(selectedSlot?.start);
    const [end, setEndDate] = useState(selectedSlot?.end)

    return (
        <Modal onCloseModal={onCloseModal}>
            <div className="flex flex-col">
                <h1 className="mb-2 text-lg">Create event</h1>
                <Input 
                    name="title"
                    label="Event title"
                    value={eventTitle} 
                    onInput={(e) => setEventTitle(e.target?.value)}
                    placeholder="Insert event name"
                />
                <Datepicker 
                    selected={start} 
                    onChange={(e) => setStartDate(e)}
                    placeholder="Insert start date"
                    label="Start date"
                />
                <Datepicker 
                    selected={end} 
                    onChange={(e) => setEndDate(e)}
                    placeholder="Insert end date"
                    label="End date"
                />
                <div className="flex justify-end mt-2 ">
                    <Button
                        text="Save"
                        onClick={() => onSaveEvent({
                            ...selectedSlot,
                            id: selectedSlot?.id || null,
                            title: eventTitle,
                            start,
                            end
                        })}
                    />
                </div>
                
            </div>  
           
        </Modal>
    )
}