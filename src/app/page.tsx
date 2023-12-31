import Header from "@/components/Header/Header";
import DarkMode from "@/components/DarkMode/DarkMode";
import FollowersCards from "@/components/FollowersCards/FollowersCards";
import Overview from "@/components/Overview/Overview";
import Footer from "@/components/Footer/Footer";
import { DataInfo } from "./lib/definitions";

import { dataFacebook, dataInstagram, dataTwitter } from "./lib/data";

export default function Home() {
  return (
    <main className="px-4 py-8">
      {/* Header (Hace una llamada a todos los followers de todas las redes) */}
      <Header />

      {/* Dark Mode (Cambia el tema de la web)*/}
      <DarkMode />

      {/* FollowersCards (Llaman a los followers de cada red) */}
      <FollowersCards data={[dataFacebook, dataInstagram, dataTwitter]} />
      {/* Overview (Hay cartas diferentes, por lo tanto se divide en más componentes pero tienen el mismo estilo. 
        Algunas llaman a las views y otros a los likes) */}
      <Overview data={[dataFacebook, dataInstagram, dataTwitter]} />

      <Footer />
    </main>
  );
}
