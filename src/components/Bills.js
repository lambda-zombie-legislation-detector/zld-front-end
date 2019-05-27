import React, { Component } from "react";
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
} from "reactstrap";
import bgimage from "./congress.jpg";
import "./Bills.css";

class Bills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedSearches: [],
            gettingSearches: false,
            error: ""
        }
    }


    saveSearch = (e) => {
        e.preventDefault();
        console.log('saving search')
        this.setState({ gettingSearches: true })
        fetch("https://legicycle-api.herokuapp.com/users/user/searches", {
            method: "PUT",
            headers: {
                "Authorization": `bearer ${localStorage.getItem('userTK')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ search: "train" })
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(console.log)

    }

    render() {
        const { data, searchTerm, saveSearch } = this.props;

        console.log(data);
        return (
            <span>
                <Jumbotron fluid className="jumbo">
                    <Container
                        fluid
                        className="container container-jumbo"
                        style={{
                            backgroundImage: `url(${bgimage})`,
                            backgroundSize: "cover"
                        }}
                    />
                </Jumbotron>


                <Row>
                    <Col xs="8">
                        <div>
                            {data &&
                                data.map((bill, index) => (
                                    <div className="bill-container" key={index}>
                                        <Container>
                                            <Row>
                                                <Col xs="2">{searchTerm}</Col>

                                                <Col>
                                                    <Card>
                                                        <Row>
                                                            <Col xs="4">
                                                                <CardHeader
                                                                    tag="h3"
                                                                    className="cardheader card-width"
                                                                >
                                                                    {bill.short_title}
                                                                </CardHeader>
                                                                <CardBody className="card-width">
                                                                    <CardTitle className="cardheader card-width">
                                                                        <h6 className="cardheader">
                                                                            Similarity Score:
                                </h6>{" "}
                                                                        {bill.similarity_score}
                                                                    </CardTitle>
                                                                    <CardText className="cardheader card-width">
                                                                        <h6 className="cardheader">Congress:</h6>{" "}
                                                                        {bill.congress}
                                                                    </CardText>
                                                                    <CardText className="cardheader card-width">
                                                                        <h6 className="cardheader">Status:</h6>{" "}
                                                                        {bill.status}
                                                                    </CardText>
                                                                </CardBody>
                                                                <CardFooter className="text-muted card-width">
                                                                    <Button href={bill.bill_link}>Bill Link</Button>
                                                                </CardFooter>
                                                            </Col>
                                                            <Col xs="4">
                                                                <Row>
                                                                    <h6 className="cardheader top-five">
                                                                        Top 5 Subjects:
                              </h6>
                                                                </Row>
                                                                <ul>
                                                                    {bill.top_5_subjects.map((subject, index) => (
                                                                        <li key={index} className="cardheader">
                                                                            {subject}{" "}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                ))}
                        </div>
                    </Col>
                    <Col xs="4" className="column">
                        {/* <div>
                            Did it work? <button onClick={this.saveSearch}>save</button>
                        </div>
                        <div>
                       
                       </div> */}

                    </Col>

                </Row>

            </span>
        );
    }
}


export default Bills;

{/* <Row>
                                        <h6>Short Title:</h6> {bill.short_title}
                                    </Row>
                                    <Row>
                                        <h6>Similarity Score:</h6> {bill.similarity_score}
                                    </Row>
                                    <Row>
                                        <h6>Congress:</h6> {bill.congress}
                                    </Row>
                                    <Row>
                                        <h6>Status:</h6> {bill.status}
                                    </Row>
                                    <Row>
                                        <h6>Introduced:</h6> {bill.bill_link}
                                    </Row> */}