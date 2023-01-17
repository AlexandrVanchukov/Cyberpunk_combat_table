import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";

const AddEnemyForm = (props) => {
    const [selectedEnemy, setSelectedEnemy] = useState({})
    const enemyList = {
        "bodyguarg": {
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
            "armor": 7,
            "main-weapon-damage": 5,
            "secondary-weapon-damage": 4,
            "melee-weapon-damage": 2,
            "main-weapon-plus": 10,
            "melee-weapon-plus": 6
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
            "armor": 4,
            "main-weapon-damage": 4,
            "secondary-weapon-damage": 3,
            "melee-weapon-damage": 2,
            "main-weapon-plus": 8,
            "melee-weapon-plus": 6
        }
    }
    function addNewEnemy(e){
        e.preventDefault()
        if(selectedEnemy == 1){
            const  newEnemy = {enemy: enemyList.bodyguarg , id: Date.now()}
            props.addEnemy(newEnemy.enemy)

        }
        else if (selectedEnemy == 2){
            const  newEnemy = {enemy: enemyList.punk , id: Date.now()}
            props.addEnemy(newEnemy.enemy)
            console.log(newEnemy.enemy);
        }
    }
    function selectEnemy(enemy){
        setSelectedEnemy(enemy)
    }


    return (
        <div>
            <div>
                <Select
                    value = {selectedEnemy}
                    onChange={selectEnemy}
                    defaultValue="Choose enemy"
                    options={[
                        {value: '1', name: 'Bodyguard'},
                        {value: '2', name: 'Punk'}
                    ]}
                />
            </div>

            <Button onClick={addNewEnemy}>Add enemy</Button>
        </div>
    );
};

export default AddEnemyForm;