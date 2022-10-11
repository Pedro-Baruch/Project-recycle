import "./styles.css";
import { useEffect, useState } from "react";

interface Ad {
  id: number;
  titulo: string;
  nome: string;
  Descrição: string;
  Preço: number;
}

export function adFetchPage() {
  const [ad, setAd] = useState<Ad[]>([]);

  useEffect(() => {
    const URL = "http://localhost:3000/posts";
    const options: RequestInit = {
      method: "GET",
    };

    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => setAd(data));
  }, []);

  return (
    <div className="App">
      <div className="Card">
        <ul
          className="AA"
          style={{
            color: "black",
            fontSize: "23px",
          }}>
          {ad.map((ad) => (
            <section className="box-anuncio">
              <li key={ad.id}>
                Nome: {ad.nome}
                <br />
                Descrição : {ad.Descrição}
                <br />
                Preço: {ad.Preço}
                <br />
                Titulo: {ad.titulo}
              </li>
            </section>
          ))}
        </ul>
      </div>
    </div>
  );
}
