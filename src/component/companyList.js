import React from 'react';
import Company from './Company'
class CompanyList extends React.Component {
    render() {
        return (
            <div className="companylist">
            <span className="companylisttext">&#x3C;CompanyList /&#x3E;</span>
            {this.props.companyinfoarray.map(companyinfo => <Company key={companyinfo.id} {...companyinfo}/>)}
            </div>
        );
    }
  }
  export default CompanyList