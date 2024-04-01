import { Link } from "react-router-dom";
import './ReturnButton.css'
import { Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function ReturnButton(){
    return(
        <Button className="primary button"><Link to="/"><Icon path={mdiArrowLeft} size={1}/></Link></Button>
    )
}