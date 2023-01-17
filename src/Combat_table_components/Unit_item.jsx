import React from 'react';
import Button from "../UI/Button/Button";

const UnitItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.init}</td>
            <td>{props.hp}</td>
            <td>{props.armor_body}</td>
            <td>{props.armor_head}</td>
            <td>{props.speed}</td>
            <td><Button>Attack</Button></td>
            <td><Button>Receive<br/> damage</Button></td>
            <td><Button><img src={"../UI/img/pen.png"}/></Button></td>
            <td><Button><img src={"../UI/img/pen.png"}/></Button></td>
        </tr>
    );
};

export default UnitItem;