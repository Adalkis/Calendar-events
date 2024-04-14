import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function Datepicker({selected, onChange, placeholder, label, id}) {
    return (
        <div className="mb-1 flex flex-col">
            {label && <label className="text-sm"  htmlFor={id}>{label}</label>}
            <DatePicker 
                className="rounded-md border-2 border-slate-600 px-2 w-full"
                selected={selected} 
                onChange={onChange} 
                placeholderText={placeholder}
                id={id}
            />
        </div>
    );

}