import logo from './logo.svg';
import './App.css';

import react ,{ Component } from 'react';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header Fullname="Mohamed"/>
      <Header bio="tunis"/>
      <Header adresse="tunis"/>


    </div>
  );
}
}


class Header extends Component {
  render(){
  return (
 <Header>{this.props.Fullname}</Header>
  );

}}

export default App;
