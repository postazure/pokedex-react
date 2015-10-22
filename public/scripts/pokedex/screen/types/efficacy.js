import React from 'react'

export default class Efficacy extends React.Component {
  render() {
    let superEffectiveList = this.props.type.super_effective;
    let ineffectiveList = this.props.type.ineffective;
    let resistanceList = this.props.type.resistance;
    let weaknessList = this.props.type.weakness;

    let sortedLists = [superEffectiveList.length, ineffectiveList.length, resistanceList.length, weaknessList.length].sort().reverse();
    let longestLength = sortedLists[0];

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
        <table className="ui celled unstackable table">
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
