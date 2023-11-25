import Image from "next/image";
import { dataFacebook, dataInstagram, dataTwitter } from "./lib/data";

export default function Home() {
  return (
    <main>
      {/* Header (Hace una llamada a todos los followers de todas las redes) */}
      <header>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 20.000</p>
      </header>

      {/* Dark Mode (Cambia el tema de la web)*/}
      <section>
        <p>Dark Mode</p>
        <button>Dark mode</button>
      </section>

      {/* Cards followers (Llaman a los followers de cada red) */}
      <section>
        <article>
          <div>
            {/* <Image></Image> */}
            <p>plataforma</p>
            <p>user</p>
          </div>

          <div>
            <p>2000</p>
            <p>FOLLOWERS</p>
          </div>

          <p>Seguidores hoy</p>
        </article>

        <article>
          <div>
            {/* <Image></Image> */}
            <p>plataforma</p>
            <p>user</p>
          </div>

          <div>
            <p>2000</p>
            <p>FOLLOWERS</p>
          </div>

          <p>Seguidores hoy</p>
        </article>

        <article>
          <div>
            {/* <Image></Image> */}
            <p>plataforma</p>
            <p>user</p>
          </div>

          <div>
            <p>2000</p>
            <p>FOLLOWERS</p>
          </div>

          <p>Seguidores hoy</p>
        </article>
      </section>

      {/* Overview (Hay cartas diferentes, por lo tanto se divide en más componentes pero tienen el mismo estilo. 
        Algunas llaman a las views y otros a los likes) */}
      <section>
        <article>
          <div>
            <p>Page Views</p>
            <p>Media logo</p>
          </div>
          <div>
            <p>87</p>
            <p>3%</p>
          </div>
        </article>

        <article>
          <div>
            <p>Page Views</p>
            <p>Media logo</p>
          </div>
          <div>
            <p>87</p>
            <p>3%</p>
          </div>
        </article>

        <article>
          <div>
            <p>Page Views</p>
            <p>Media logo</p>
          </div>
          <div>
            <p>87</p>
            <p>3%</p>
          </div>
        </article>
      </section>

      <footer>
        Hecho por AdrianRgGit
      </footer>
    </main>
  );
}
