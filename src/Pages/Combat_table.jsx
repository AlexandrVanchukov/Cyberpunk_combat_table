import React from 'react';
import Unit_list from "../Combat_table_components/Unit_list";

const CombatTable = (props) => {
    return (
        <div>
            <Unit_list units={props.units} enemyList={props.enemyList} addEnemy={props.addEnemy} removeEnemy={props.removeEnemy} sort={props.sortUnits}/>
        </div>
    );
};

export default CombatTable;