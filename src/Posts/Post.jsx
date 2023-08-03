export function Post({title, text, id})
{
    return (
        <section className="Post" key={id}>
            <section className="User icon"><i className="fa-regular fa-user"></i> &nbsp; Anonymous </section>
            <section className="Title">{title}</section>
            <section className="Content">{text}</section>
            <section className="Attributes">
                <div className="icon"><i className="fa-solid fa-thumbs-up"></i> Like</div>
                <div className="icon"><i className="fa-solid fa-share"></i> Share</div>
                <div className="icon"><i className="fa-solid fa-comment"></i> Comment</div>
            </section>
            <section className="CommentSection"></section>
        </section>
    );
}