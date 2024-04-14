export default function Button({text, onClick}) {
    return (
        <button 
            className="rounded min-w-20 bg-sky-700  hover:bg-sky-500  text-white"
            onClick={onClick}
        >
            {text}
        </button>
    )
}