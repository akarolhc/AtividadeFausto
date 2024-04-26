import CardAlbum from "../components/CardAlbum";
import './Inicial.css'
import IgAlbum from '../img/ig-album.jpeg'
import MatueAlbum from '../img/matue-album.jpg'
import LuanAlbum from '../img/luancity.jpg'
import DjongaAlbum from '../img/djonga-album.jpg'
import JEMAlbum from '../img/album-jem.jpg'
import { Container } from "react-bootstrap";


export default function Inicial() {
  return (
    <Container>
      <div className="album">
        <CardAlbum
          title="Todo mundo odeia o IG"
          text="MC IG"
          img={IgAlbum}
          linkSpotify="https://open.spotify.com/album/5DgYAKr0iKOHjwEf9nKMs4"
          linkSobre="/mcIG"
          artista={true}
        />
        <CardAlbum
          title="Máquina do Tempo"
          text="Matue"
          img={MatueAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/3NV12Ja67V8BLOVVO9feMs"
          linkSobre="/matue"
          artista={true}
        />
        <CardAlbum
          title="Luan City 2.0"
          text="Luan Santana"
          img={LuanAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/4dQAevCwvaHURvvM1ddXwM"
          linkSobre="/Luan"
        />
        <CardAlbum
          title="Inocente"
          text="Djonga"
          img={DjongaAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/4IzsHOBctS66OP3dHXTJsG?autoplay=true"
          linkSobre="/Djonga"
          artista={true}
        />
        <CardAlbum
          title="10 Anos (Ao Vivo) - Deluxe"
          text="Jorge e Mateus"
          img={JEMAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/2tDBFZ0M5cmmUyweIsOc8d?autoplay=true"
          linkSobre="/JorgeEMateus"
        />
      </div>
    </Container>
  );
}
