import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";

const AddEnemyForm = (props) => {
    const [selectedEnemy, setSelectedEnemy] = useState({})
    const [index, setIndex] = useState(0)
    const [initiative, setInitiative] = useState(0);
    const [name, setName] = useState('Player');


    const playersList = {
        "test_player": {
            "name": name
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function addNewEnemy(e){
        e.preventDefault()
        if(selectedEnemy == 1){
            const  newEnemy = {enemy: props.enemyList.bodyguard , id: index, init: getRandomInt(10) + props.enemyList.bodyguard.ref}
            setIndex(index +1);
            props.addEnemy(newEnemy)
        }
        else if (selectedEnemy == 2){
            const  newEnemy = {enemy: props.enemyList.punk , id: index, init: getRandomInt(10) + props.enemyList.punk.ref}
            setIndex(index +1);
            props.addEnemy(newEnemy)
        }
    }
    function selectEnemy(enemy){
        setSelectedEnemy(enemy)
    }

    function addNewPlayer(e){
        e.preventDefault()
        const  newPlayer = {enemy: playersList.test_player , id: index, init: initiative}
        setIndex(index +1);
        props.addEnemy(newPlayer)
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
            <Button onClick={e => addNewEnemy(e)}>Add enemy</Button>
            <div>
                <Input
                    value = {name}
                    onChange={e => (setName(e.target.value))}
                    type = "text"
                    placeholder="Name"t/>
                <Input
                    value = {initiative}
                    onChange={e => setInitiative(e.target.value)}
                    type = "number"
                    placeholder="Initiative"t/>
                <Button onClick={e => addNewPlayer(e)}>Add player</Button>
            </div>

        </div>
    );
};

export default AddEnemyForm;