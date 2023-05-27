import React, { Component } from "react";
import { getMembers } from "../services/profileService";

class Table extends Component {
  state = {
    members: [],
  };

async componentDidMount() {
  const { data: members } = await getMembers()
  this.setState({members:members});
  };
  
  handleClick = () => {
    window.print()
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
          
        </div>
      <div style={{ width: '400px' }}>
            <h2 style={{ color:"dodgerblue", marginLeft:"12rem" }}>ADMIN</h2>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{color:"#ffb500"}}>
                <th style={{ border: '1px solid black', padding: '5px' }}>Name</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>age</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>Gender</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>Phone</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.members.map(member => (
                <tr key={member._id}>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{member.name}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{member.age}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{member.gender}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{member.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        <button className="btn--primary" style={{ width: '100px', marginLeft:"15rem" }} onClick={this.handleClick}>print</button>
      </div>
      </div>
    );
  }
}

export default Table;
