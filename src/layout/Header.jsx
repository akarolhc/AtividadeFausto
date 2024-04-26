import { Container, Navbar, Nav } from "react-bootstrap";
import './Header.css'
import Icon from "@mdi/react";
import { mdiAlbum } from "@mdi/js";

export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/"><Icon path={mdiAlbum} color="white" size={2} /></Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/">Playlist com albuns escolhidos por Ana Karolina</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  );
}
