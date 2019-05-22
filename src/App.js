import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { DropdownMenu, Navbar, DropdownItem, NavbarBrand, Dropdown, DropdownToggle, Jumbotron, Container } from 'reactstrap';
import Login from './components/Login';
import Home from './components/Home';
import Bills from './components/Bills';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      data: ""
    };
  }
  fetchBills = () => {
    fetch(`https://legicycle-api.herokuapp.com/api/search`)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
    console.log(this.state.data)

  }



  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {


    return (
      <div className="page-container">
        <div id="content-wrap">
          <Navbar className="app-navbar">

          </Navbar>
          <Navbar color="black" light className="navbar">
            <NavbarBrand href="/" className="mr-auto">Zombie Legislation Detector</NavbarBrand>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret className="Select">
                Dropdown
            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem ><Link className="navitem" to="/">Login</Link></DropdownItem>
                <DropdownItem><Link className="navitem" to="/home">Home</Link></DropdownItem>
                <DropdownItem><Link className="navitem" to="/bills">Bills</Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Navbar>

          {/* <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Login</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/products">Products</Link></li> */}
          {/* </ul> */}
          {/* </nav> */}

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Home" render={(props) => <Home {...props} fetchBills={this.fetchBills} />}
            />
            <Route path="/bills" render={(props) => <Bills {...props} data={this.state.data} />}
            />
          </Switch>
        </div>

        <Navbar className="app-navbar">

        </Navbar>

      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


