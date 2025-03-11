
export default function Button({ color, size, text }) {
    return (
        <button className={`btn ${color} ${size}`}>
            {text}
        </button>
    );
}
