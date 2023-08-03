import { useState } from "react";
import { Post } from "./Post";

export function Posts()
{
    const [posts, setPosts] = useState([]);
    const [newPostInfo, setNewPostInfo] = useState(
        {
            id: '',
            content: '',
            title: 'Untitled',
            comments: {}
        });
    function addPost(e)
    {
        e.preventDefault();
        setPosts([
            <Post title={newPostInfo.title} text={newPostInfo.content} id={crypto.randomUUID()}/>, ...posts
        ]);
    }

    return (
        <main id="posts">
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
                <div>Feed</div>
                {posts}
            </section>
        </main>
    );
}