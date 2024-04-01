import CardAlbum from "../components/CardAlbum";
import './Inicial.css'

import IgAlbum from '../img/ig-album.jpeg'
import KevinAlbum from '../img/kevin-album.jpeg'
import IeGAlbum from '../img/ieg-album.jpeg'
import MMAlbum from '../img/MMAlbum.png'
import ELAlbum from '../img/el-album.jpg'
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
          title="Fenix"
          text="MC Kevin"
          img={KevinAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/3NV12Ja67V8BLOVVO9feMs"
          linkSobre="/mcKevin"
          artista={true}
        />
        <CardAlbum
          title="Sextou Bb: Uberlândia"
          text="Ícaro & Gilmar"
          img={IeGAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/0J3qeo9vgSPwQgKss5oLPI?autoplay=true"
          linkSobre="/IcaroEGilmar"
        />
        <CardAlbum
          title="Festa das Patroas"
          text="Marília Mendonça"
          img={MMAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/4IzsHOBctS66OP3dHXTJsG?autoplay=true"
          linkSobre="/MaríliaMendonça"
          artista={true}
        />
        <CardAlbum
          title="Cabaré"
          text="Eduardo Costa e Leonardo"
          img={ELAlbum}
          linkSpotify="https://open.spotify.com/intl-pt/album/2tDBFZ0M5cmmUyweIsOc8d?autoplay=true"
          linkSobre="/EduardoELeonardo"
        />
      </div>
    </Container>
  );
}
