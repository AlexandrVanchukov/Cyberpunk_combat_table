import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import classes from "./Unit_list.module.css";

const UnitItem = (props) => {
    let isPlayer = true
    if(props.unit.enemy.mainWeaponPlus){
        isPlayer = false;
    }

    const [modalPart, setModalPart] = useState(false);
    const [modalAttack, setModalAttack] = useState(false);
    const [modalHit, setModalHit] = useState(false);
    const [modalDamage, setModalDamage] = useState(false);
    const [modalPartR, setModalPartR] = useState(false);
    const [modalReceive, setModalReceive] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const [part,setPart] = useState('');
    const [bonus,setBonus] = useState(0);
    const [weapon, setWeapon] = useState(0);//1-main; 2-secondary; 3-melee
    const [hit, setHit] = useState(0);
    const [damage, setDamage] = useState([]);
    const [rDamage,setRDamage] = useState(0);
    
    const [name, setName] = useState();
    const [initiative, setInitiative] = useState();
    const [hp, setHp] = useState();
    const [armorHead,setArmorHead] = useState();
    const [armorBody,setArmorBody] = useState();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function choosePartAttack(part){
        setPart(part);
        if(part == 'head'){
            setBonus(-8);
        }
        else {
            setBonus(0)
        }
        setModalPart(false);
        setModalAttack(true);
    }

    function choosePartReceive(part){
        setPart(part);
        if(part == 'head'){
            setBonus(-8);
        }
        else {
            setBonus(0)
        }
        setModalPartR(false);
        setModalReceive(true);
    }

    function mainAttack(){
        setWeapon(1);
        setHit(getRandomInt(10)+props.unit.enemy.ref+props.unit.enemy.mainWeaponPlus+bonus);
        setModalAttack(false)
        setModalHit(true)
    }
    function secondaryAttack(){
        setWeapon(2);
        setHit(getRandomInt(10)+props.unit.enemy.ref+props.unit.enemy.secondaryWeaponPlus+bonus);
        setModalAttack(false)
        setModalHit(true)
    }
    function meleeAttack(){
        setWeapon(3);
        setHit(getRandomInt(10)+props.unit.enemy.dex+props.unit.enemy.meleeWeaponPlus+bonus);
        setModalAttack(false)
        setModalHit(true)
    }
    function damageCounter(){
        let d = [];
        if(weapon == 1){
            for(let i = 0; i < props.unit.enemy.mainWeaponDamage; i++){
                d.push(getRandomInt(6))
            }

        }
        else if(weapon == 2){
            for(let i = 0; i < props.unit.enemy.secondaryWeaponDamage; i++){
                d.push(getRandomInt(6))
            }
        }
        else if(weapon == 3){
            for(let i = 0; i < props.unit.enemy.meleeWeaponDamage; i++){
                d.push(getRandomInt(6))
            }
        }
        else {
            alert("Error with choose weapon. Please attack again.")
        }
        setDamage(d);
        setModalHit(false);
        setModalDamage(true);
    }

    function printDamage(){

        let stringDamage = '';
        for(let i = 0; i < damage.length-1; i++){
            stringDamage = stringDamage + damage[i] + "+";
        }
        stringDamage = stringDamage + damage[damage.length-1];

        return stringDamage;
    }

    function sum(){
        console.log(damage)
        let totalDamage = 0;
        for(let i = 0; i < damage.length; i++){
            totalDamage = totalDamage + damage[i];
        }
        return totalDamage;
    }

    function receiveDamage(){
        if(part == 'head'){
            if(props.unit.enemy.armorHead <= 0){
                props.unit.enemy.hp = props.unit.enemy.hp - rDamage*2;
            }
            else {
                if(rDamage > props.unit.enemy.armorHead){

                    props.unit.enemy.hp = props.unit.enemy.hp - ((rDamage - props.unit.enemy.armorHead)*2);
                }
                props.unit.enemy.armorHead = props.unit.enemy.armorHead - 1;
            }
        }
        else {
            if(props.unit.enemy.armorBody <= 0){
                props.unit.enemy.hp = props.unit.enemy.hp - rDamage;
            }
            else {
                if(rDamage > props.unit.enemy.armorBody){
                    props.unit.enemy.hp = props.unit.enemy.hp - rDamage + props.unit.enemy.armorBody;
                }
                props.unit.enemy.armorBody = props.unit.enemy.armorBody - 1;
            }
        }
        setRDamage(0);
        setModalReceive(false);
    }

    function change(){
        props.unit.enemy.name = name;
        props.unit.init = initiative;
        props.unit.enemy.hp = hp;
        props.unit.enemy.armorBody = armorBody;
        props.unit.enemy.armorHead = armorHead;
        setModalEdit(false);
    }

    function edit(){
        setName(props.unit.enemy.name);
        setInitiative(props.unit.init);
        setHp(props.unit.enemy.hp);
        setArmorBody(props.unit.enemy.armorBody)
        setArmorHead(props.unit.enemy.armorHead);
        setModalEdit(true);
    }

    return (
        <tr>
            <td className={classes.red_border}>{props.unit.init}</td>
            <td className={classes.red_border}>
                    {props.unit.enemy.name}
            </td>
            <td className={classes.red_border}>{props.unit.enemy.hp}</td>
            <td className={classes.red_border}>{props.unit.enemy.armorBody}</td>
            <td className={classes.red_border}>{props.unit.enemy.armorHead}</td>
            <td className={classes.red_border}>{props.unit.enemy.move}</td>
            <span className={classes.button}>
                <Button onClick={() => setModalPart(true)} dis={isPlayer}>Attack</Button>
                <Modal visible={modalPart} setVisible={setModalPart}>
                    <Button onClick={() => choosePartAttack('body')}>Body</Button>
                    <Button onClick={() => choosePartAttack('head')}>Head</Button>
                </Modal>
                <Modal visible={modalAttack} setVisible={setModalAttack}>
                    <div>Attack to {part}. Bonus: {bonus}</div>
                    <div>
                        <Button onClick={mainAttack}>Main hit:+{props.unit.enemy.mainWeaponPlus} damage:{props.unit.enemy.mainWeaponDamage}d6</Button>
                    </div>
                    <div>
                        <Button onClick={secondaryAttack}>Secondary hit:+{props.unit.enemy.secondaryWeaponPlus} damage:{props.unit.enemy.secondaryWeaponDamage}d6</Button>
                    </div>
                    <div>
                        <Button onClick={meleeAttack}>Melee hit:+{props.unit.enemy.meleeWeaponPlus} damage:{props.unit.enemy.meleeWeaponDamage}d6</Button>
                    </div>
                </Modal>
                <Modal visible={modalHit} setVisible={setModalHit}>
                    <div>{hit} hits?</div>
                    <Button onClick={damageCounter}>Yes</Button>
                    <Button onClick={() => setModalHit(false)}>No</Button>
                </Modal>
                <Modal visible={modalDamage} setVisible={setModalDamage}>
                    <div>Total damage: {sum()}</div>
                    <div>Damage: {printDamage()}</div>
                    <Button onClick={() => setModalDamage(false)}>Close</Button>
                </Modal>
            </span>
            <span className={classes.button}>
                <Button onClick={() => setModalPartR(true)} dis={isPlayer}>Damage</Button>
                <Modal visible={modalPartR} setVisible={setModalPartR}>
                    <Button onClick={() => choosePartReceive('body')}>Body</Button>
                    <Button onClick={() => choosePartReceive('head')}>Head</Button>
                </Modal>
                <Modal visible={modalReceive} setVisible={setModalReceive}>
                    <Input
                        value = {rDamage}
                        onChange={e => setRDamage(e.target.value)}
                        type = "number"
                        placeholder="Damage"t/>
                    <Button onClick={receiveDamage}>Take damage</Button>
                </Modal>
            </span>
            <span className={classes.button}>
                <Button onClick={edit}>Edit</Button>
                <Modal visible={modalEdit} setVisible={setModalEdit}>
                    <table>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Initiative</td>
                            <td>HP</td>
                            <td>AR(Body)</td>
                            <td>AR(Head)</td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input
                                    value = {name}
                                    onChange={e => (setName(e.target.value))}
                                    type = "text"
                                    placeholder="Name"t/>
                            </td>
                            <td>
                                <Input
                                    value = {initiative}
                                    onChange={e => setInitiative(e.target.value)}
                                    type = "number"
                                    placeholder="Initiative"t/>
                            </td>
                            <td>
                                <Input
                                    value = {hp}
                                    onChange={e => setHp(e.target.value)}
                                    type = "number"
                                    placeholder="Hp"t/>
                            </td>
                            <td>
                                <Input
                                    value = {armorBody}
                                    onChange={e => setArmorBody(e.target.value)}
                                    type = "number"
                                    placeholder="armor body"t/>
                            </td>
                            <td>
                                <Input
                                    value = {armorHead}
                                    onChange={e => setArmorHead(e.target.value)}
                                    type = "number"
                                    placeholder="armor head"t/>
                            </td>
                            <td>
                                <Button onClick={change}>Change</Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Modal>
            </span>
            <span className={classes.button}><Button onClick={() => props.removeEnemy(props.unit)}>Delete</Button></span>
        </tr>
    );
};

export default UnitItem;