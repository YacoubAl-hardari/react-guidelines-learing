export default function Post({ title, description = "no description", color , children}) {
    return (
        <div className="post">
            <h2 className={`post-title ${color}`}>{title}</h2>
            <p>{description}</p>
           <p>
           {children}
           </p>
            <hr />
        </div>
    );
}
