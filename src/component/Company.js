import React from 'react'
class Company extends React.Component {
	render() {
  	const p = this.props;
  	return (
    	<div className="company">
        <span className="companytext">&#x3C;Company /&#x3E;</span>
    
        <div className="companyinfo">
          <div>Name: {p.name}</div>
          <div>Email: {p.email}</div>
          <div>Bio: {p.bio}</div>
          <div>Repos: {p.public_repos}</div>
        </div>
    	</div>
    );
  }
}
export default Company