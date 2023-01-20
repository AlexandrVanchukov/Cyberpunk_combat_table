
import React, {useState} from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Unit_list from "./Combat_table_components/Unit_list";
import classes from "./App.module.css";
import Modal from "./UI/Modal/Modal";
import Button from "./UI/Button/Button";
import Combat_table from "./Pages/Combat_table";
import Enemy_info from "./Pages/Enemy_info";


function App() {
    const [units,SetUnits] = useState([]);
    const [enemyInfo,SetEnemyInfo] = useState([]);
    const [modalInfo,SetModalInfo] = useState(false);

    const enemyList = {
        "bodyguard": {
            "name": "bodyguard",
            "int" : 3,
            "ref": 7,
            "dex": 4,
            "tech": 2,
            "cool": 2,
            "will": 3,
            "move": 3,
            "body": 5,
            "emp": 3,
            "hp": 30,
            "armorBody": 7,
            "armorHead": 7,
            "mainWeaponDamage": 5,
            "secondaryWeaponDamage": 4,
            "meleeWeaponDamage": 2,
            "mainWeaponPlus": 10,
            "secondaryWeaponPlus": 10,
            "meleeWeaponPlus": 6
        },
        "punk": {
            "name": "punk",
            "int" : 3,
            "ref": 7,
            "dex": 4,
            "tech": 2,
            "cool": 2,
            "will": 3,
            "move": 3,
            "body": 5,
            "emp": 3,
            "hp": 25,
            "armorBody": 4,
            "armorHead": 4,
            "mainWeaponDamage": 4,
            "secondaryWeaponDamage": 3,
            "meleeWeaponDamage": 2,
            "mainWeaponPlus": 8,
            "secondaryWeaponPlus": 8,
            "meleeWeaponPlus": 6
        }
    }

    function addEnemy(enemy){
        SetUnits([...units,enemy].sort((a,b) => compare(a,b)));
        console.log(units);
    }

    function removeEnemy(enemy){
        console.log(units.filter(p => p.id !== enemy.id));
        SetUnits(units.filter(p => p.id !== enemy.id));
    }

    function compare(a, b) {
        console.log("compare");
        console.log(a);
        console.log(b);
        if (a.init < b.init) return 1; // если первое значение больше второго
        if (a.init == b.init) return 0; // если равны
        if (a.init > b.init) return -1; // если первое значение меньше второго
    }
    function sortUnits(){
        console.log("sort");
        SetUnits([...units]);
    }
    return (
        <div>
            <Router>
                <div className="App">
                    <div className={classes.header}>
                        <div className={classes.headerItem}><Link className={classes.headerLink} to="/combat_table">Combat table</Link></div>
                        <div className={classes.headerItem}><Link className={classes.headerLink} to="/enemy_info">Enemy Info</Link></div>
                    </div>

                    <Routes>
                        <Route exact path='/combat_table' element={<Combat_table enemyList={enemyList} units={units} addEnemy={addEnemy} removeEnemy={removeEnemy} sort={sortUnits}/>}></Route>
                        <Route exact path='/enemy_info' element={<Enemy_info enemyList={enemyList}/>}></Route>
                    </Routes>

                </div>
            </Router>
        </div>
    );
}

export default App;
