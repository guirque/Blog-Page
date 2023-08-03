import { useState } from "react";
import { Post } from "./Post";

export function Posts()
{
    const [posts, setPosts] = useState([]);
    const [newPostInfo, setNewPostInfo] = useState(
        {
            content: '',
            title: 'Untitled',
            date: new Date().toDateString(),
            comments: {}
        });
    const [lastTitle, setTitle] = useState('');
    function addPost(e)
    {
        e.preventDefault();
        if(newPostInfo.content != '' && newPostInfo.title != lastTitle)
        {
            setTitle(newPostInfo.title);
            setPosts([
                <Post title={newPostInfo.title} text={newPostInfo.content} key={crypto.randomUUID()} date={newPostInfo.date}/>, ...posts
            ]);
        }
    }

    return (
        <main id="posts">
            <div style={
                {
                    position: "fixed",
                    width: "80%",
                    height: "84%",
                    zIndex: -1,
                    backgroundImage: "url('https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80')",
                    backgroundSize:"cover",
                    backgroundAttachment: "fixed",
                    backgroundPositionX: "-35vw"
                }}></div>
            <form id="add-post" htmlFor="add">
                <p>(+) Add Post</p>
                <input type="text" placeholder="Post Title" onInput={(e)=>{setNewPostInfo({...newPostInfo, title: e.target.value});}}/>
                <textarea id="write-content" className="Content" maxLength="800" placeholder="What a beautiful day outside..." onInput={(e)=>
                    {
                        setNewPostInfo({...newPostInfo, content: e.target.value});
                    }}></textarea>
                <input type="submit" value="Publish" onClick={(e) => {addPost(e);}}/>
            </form>
            <section id="posts-section">
                {posts}
            </section>
        </main>
    );
}