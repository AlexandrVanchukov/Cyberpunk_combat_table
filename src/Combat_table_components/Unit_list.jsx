import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Add_enemy_form from "./Add_enemy_form";
import Unit_item from "./Unit_item";

const UnitList = (props) => {
    const [modal, setModal] = useState(false);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Initiative</td>
                    <td>HP</td>
                    <td>AR(Body)</td>
                    <td>AR(Head)</td>
                    <td>Move</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                    {props.units.map((u,index) =>
                        <Unit_item unit={u} key={index + 1} name={u.name} init={u.init} hp={u.hp}
                                   armor_body={u.armor_body} armor_head={u.armor_head} speed={u.speed}
                                   attack={u.attack} damage={u.damage} delete={u.delete}/>
                    )}
                </tbody>
            </table>
            <div>
                <Button onClick={() => setModal(true)}>Add enemy</Button>
                <Modal visible={modal} setVisible={setModal}>
                    <Add_enemy_form addEnemy={props.addEnemy}/>
                </Modal>
            </div>
        </div>
    );
};

export default UnitList;