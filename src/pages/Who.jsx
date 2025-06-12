import axios from "axios";
import { useEffect, useState } from "react";

export default function Who() {
  const [posts, setPosts] = useState([]);
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      setPosts(resp.data);
      console.log(resp.data);
    });
  }, []);

  return (
    <>
      <main>
        <div>
          <h1>ciao a tutti</h1>
          <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4">
            {posts.map((curPost, index) => (
              <div class="col">
                <div key={index} className="card text-bg-dark mb-3">
                  <div className="card-header">{curPost.title}</div>
                  <div className="card-body">
                    <h5 className="card-title">{curPost.author}</h5>
                    <p className="card-text">{curPost.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
