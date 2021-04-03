import axios from "axios";
import { useState, useEffect } from "react";
function Main() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, [url]);
  if (post) {
    return (
      <section className="sectionCenter">
        <div>
          <div>
            <h3>{post.name}</h3>
            <p>
              This is a wider card with supporting text below as a natural .
            </p>
            <p>
              <small>Last updated time mins ago</small>
            </p>
          </div>
        </div>
      </section>
    );
  }
  return <div></div>;
}

export default Main;
