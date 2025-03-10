
export default function Post({ title, description, color }) {
    return (
        <div className="post">
            <h2 className={`post-title ${color}`}>{title}</h2>
            <p>{description}</p>
            <hr />
        </div>
    );
}
