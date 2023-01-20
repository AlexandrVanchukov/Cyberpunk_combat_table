import React from 'react';
import classes from './Enemy_item.module.css';

const EnemyItem = (props) => {
    return (
        <table className={classes.enemyTable}>
            <tbody>
            <tr>
                <td colSpan={5}>Name: {props.enemy.name}

                </td>
            </tr>
            <tr></tr>
            <tr className={classes.center}>
                <td>int</td>
                <td>ref</td>
                <td>dex</td>
                <td>tech</td>
                <td>cool</td>
            </tr>
            <tr className={classes.center}>
                <td>{props.enemy.int}</td>
                <td>{props.enemy.ref}</td>
                <td>{props.enemy.dex}</td>
                <td>{props.enemy.tech}</td>
                <td>{props.enemy.cool}</td>
            </tr>
            <tr className={classes.center}>
                <td>will</td>
                <td>luck</td>
                <td>move</td>
                <td>body</td>
                <td>emp</td>
            </tr>
            <tr className={classes.center}>
                <td>{props.enemy.will}</td>
                <td>-</td>
                <td>{props.enemy.move}</td>
                <td>{props.enemy.body}</td>
                <td>{props.enemy.emp}</td>
            </tr>
            <tr></tr>
            <tr>
                <td colSpan={2}>Health points</td>
                <td colSpan={2}>Severe injury</td>
                <td colSpan={1}>Save</td>
            </tr>
            <tr>
                <td colSpan={2}>{props.enemy.hp}</td>
                <td colSpan={2}>{props.enemy.hp/2}</td>
                <td colSpan={1}>{props.enemy.body}</td>
            </tr>
            <tr></tr>
            <tr>
                <td colSpan={3}>Weapons</td>
                <td colSpan={2}>Armor</td>
            </tr>
            <tr>
                <td colSpan={2}>Main</td>
                <td className={classes.center}>{props.enemy.mainWeaponDamage}d6</td>
                <td>Head</td>
                <td className={classes.center}>{props.enemy.armorHead}</td>
            </tr>
            <tr>
                <td colSpan={2}>Secondary</td>
                <td className={classes.center}>{props.enemy.secondaryWeaponDamage}d6</td>
                <td>Body</td>
                <td className={classes.center}>{props.enemy.armorBody}</td>
            </tr>
            <tr>
                <td colSpan={2}>Melee</td>
                <td className={classes.center}>{props.enemy.meleeWeaponDamage}d6</td>
            </tr>
            <tr></tr>
            <tr>
                <td colSpan={5}>
                    Skills:<br/>
                    Main weapon plus:+{props.enemy.mainWeaponPlus};
                    Secondary weapon plus:+{props.enemy.secondaryWeaponPlus};
                    Melee weapon plus:+{props.enemy.meleeWeaponPlus}
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default EnemyItem;