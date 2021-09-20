import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const handleDelete = (blogId) => {
        const newBlogs = blogs.filter(blog => blog.id !== blogId)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            }).then((data) => {
                setBlogs(data)
            }).catch((err) => {
                alert(err)
            })
    }, [])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;