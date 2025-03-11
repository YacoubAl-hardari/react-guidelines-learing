
export default function Button({ color, size, text , icon ,hover}) {
    return (
        <button className={`btn ${color} ${hover} ${size}`}>
        {icon && <span className="icon">{icon}</span>}
        {text}
    </button>
    );
}
