import React from 'react'
import Helpers from '../../helpers.js'

export default class Efficacy extends React.Component {
  constructor() {
    super();
    this.helpers = new Helpers;
  }


  render() {
    let superEffectiveList = this.props.type.super_effective;
    let ineffectiveList = this.props.type.ineffective;
    let resistanceList = this.props.type.resistance;
    let weaknessList = this.props.type.weakness;

    let sortedLists = [superEffectiveList.length, ineffectiveList.length, resistanceList.length, weaknessList.length].sort().reverse();
    let longestLength = sortedLists[0];

    let classes = 'ui celled '+ this.props.color +' unstackable table';

    let trs = [];
    for(let i=0; i < longestLength; i++){
      trs.push(
        <tr>
          <td>{superEffectiveList[i] ? superEffectiveList[i].name : ''}</td>
          <td>{ineffectiveList[i] ? ineffectiveList[i].name : ''}</td>
          <td>{resistanceList[i] ? resistanceList[i].name : ''}</td>
          <td>{weaknessList[i] ? weaknessList[i].name : ''}</td>
        </tr>
      )
    }
    return(
      <div>
        <table className={classes}>
          <thead>
          <tr>
            <th>Super Effective</th>
            <th>Ineffective</th>
            <th>Resistance</th>
            <th>Weakness</th>
          </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    )
  }
}
