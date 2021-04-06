import axios from "axios";
import { useState, useEffect } from "react";
function Main() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState("");

  const callApi = () => {
    axios.get(url).then((res) => {
      console.log(res);
      setPost(res.headers);
    });
  };
  return (
    <section className="sectionCenter">
      <div>
        <div>
          <h3>{post}</h3>
          <button onClick={callApi}>Click me</button>
          <p>This is a wider card with supporting text below as a natural .</p>
          <p>
            <small>Last updated time mins ago</small>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
