import React from 'react';
import Enemy_item from "../Enemy_info_components/Enemy_item";

const EnemyInfo = (props) => {


    return (
        <div>
            <Enemy_item enemy={props.enemyList.bodyguard}/>
            <Enemy_item enemy={props.enemyList.punk}/>
        </div>
    );
};

export default EnemyInfo;