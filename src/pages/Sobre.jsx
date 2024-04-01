import { Container } from 'react-bootstrap'
import ReturnButton from '../components/ReturnButton.jsx'
import './Sobre.css'
export default function Sobre(props) {
  return (

    <div className="sobre">
      <ReturnButton />
      <Container>
        <div className="content">
          <div className="img-principal"><img src={props.img} /></div>
          <div className="about-content">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
