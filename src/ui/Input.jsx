export default function Input({value, onInput, placeholder, label, id}) {
    return(
        <div className="mb-1 flex flex-col">
        {label && <label className="text-sm" htmlFor={id}>{label}</label>}
        <input 
            id={id}
            value={value} 
            onInput={onInput} 
            placeholder={placeholder}
            className="rounded-md border-2 border-slate-600 px-2"
        />
        </div>
    )
}