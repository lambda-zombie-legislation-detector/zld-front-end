import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Menu from './Menu';
import bgimage from './congress.jpg';
import './Home.css';

class Home extends Component {


    render() {
        const { searchBills } = this.props
        return (

            <div className="home-jumbo">

                <Jumbotron fluid className="jumbo">
                    <Container fluid className="container container-jumbo" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>

                    </Container>
                </Jumbotron>
                <span>
                    <Menu searchBills={searchBills} />
                </span>


            </div>


        )
    }
}

export default Home;