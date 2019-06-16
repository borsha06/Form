import React from 'react';
import './App.css';
import Form from './component/Form'
import CompanyList from './component/companyList'


class App extends React.Component {
  doSomething = (companyinfo) => {
    console.log(companyinfo);
  };
 state={
  companyArray : []
 } 
 addCompany =(companyInfo)=>{
   this.setState(prevState =>({
     companyArray:[...prevState.companyArray,companyInfo]
   }))
   console.log(this.state.companyArray)
 }
  render(){
  return (
    <div className="App">
    <Form onSubmit={this.addCompany}/>
    <CompanyList companyinfoarray={this.state.companyArray} />
    </div>
  );
  }
}

export default App;
