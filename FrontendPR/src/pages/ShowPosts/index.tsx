import "./styles.css";
import { useEffect, useState } from "react";

interface Post {
  id?: number;
  titulos: string;
  descrição: string;
  preços: number;
  tag: string;
}

export function PostFetchPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const URL = "http://localhost:3000/posts";
    const options: RequestInit = {
      method: "GET",
    };

    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="App">
      <div className="Card">
        <ul
          style={{
            color: "black",
            fontSize: "23px",
          }}
        >
          {posts.map((aux) => (
            <section className="box-anuncio">
              <ul>
                <li key={aux.id}>Nome: {aux.titulos}</li>
                <li key={aux.id}>Descrição: {aux.descrição}</li>
                <li key={aux.id}>Preços: {aux.preços}</li>
                <li key={aux.id}>Tag: {aux.tag}</li>
              </ul>
            </section>
          ))}
        </ul>
      </div>
    </div>
  );
}
