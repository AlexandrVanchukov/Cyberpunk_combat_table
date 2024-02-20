import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Add_enemy_form from "./Add_enemy_form";
import Unit_item from "./Unit_item";
import classes from "./Unit_list.module.css";

const UnitList = (props) => {
    const [modal, setModal] = useState(false);
    return (
        <div className={classes.wrap}>
            <table className={classes}>
                <thead>
                <tr>
                    <td className={classes.red_border}>Initiative</td>
                    <td className={classes.red_border}>Name</td>
                    <td className={classes.red_border}>HP</td>
                    <td className={classes.red_border}>AR(Body)</td>
                    <td className={classes.red_border}>AR(Head)</td>
                    <td className={classes.red_border}>Move</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                    {props.units.map((u,index) =>
                        <Unit_item unit={u} key={index + 1} removeEnemy={props.removeEnemy} info={props.showEnemyInfo}/>
                    )}
                </tbody>
            </table>
            <div>
                <Button buttonStyle={'red'} onClick={() => setModal(true)}>Add enemy</Button>
                <Modal visible={modal} setVisible={setModal}>
                    <Add_enemy_form addEnemy={props.addEnemy} sort={props.sort} enemyList={props.enemyList}/>
                </Modal>
            </div>
        </div>
    );
};

export default UnitList;