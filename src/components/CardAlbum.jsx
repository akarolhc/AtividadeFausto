import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CardAlbum.css'
import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js';

function CardAlbum(props) {
  return (
    <div style={{flexBasis: '30%', display:'flex', alignItems: 'center', justifyContent:'center'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary"><Link to={props.linkSobre}>{props.artista ? "Sobre o artista" : "Sobre o grupo"}</Link></Button>
        <Button variant="secondary button-card" ><Link to={props.linkSpotify} target='_blank'><Icon path={mdiSpotify} size={1} color="green" /></Link></Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardAlbum;