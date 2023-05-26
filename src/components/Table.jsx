import React, { Component } from "react";

class Family extends Component {
  state = {
    members: [],
  };

async componentDidMount() {
  const {data:members} = await getMembers()
  this.setState(members);
};
  render() {
    const allMembers = this.state.members;
    
    
    return (
      <div className="row">
        <div className="col container" style={{fontSize:16}}>
          <table className="table">
            <thead>
              <tr style={{color:"#ffb500"}}>
                <th>Name</th>
                <th>age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {allMembers.map(member => (
                <tr key={member._id}>
                  <td>{member.name}</td>
                  <td>{member.age}</td>
                  <td>{member.gender}</td>
                  <td>{member.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Family;