import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Capstone Project', body: 'lorem ipsum...', author: 'Tokyo', id: 1 },
    { title: 'Reasearch Paper', body: 'lorem ipsum...', author: 'Kiroo', id: 2 },
    { title: 'Unfinished Works', body: 'lorem ipsum...', author: 'Peepzy', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Tokyo')}>Add Blog</button>
    </div>
  );
}
 
export default Home;