import React, { Component } from "react";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Button
} from "reactstrap";

import "./Results.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.searchData);
    return (
      <div className="Home">
        <div className="lander">
          <h1>Zombie Legislation Detector</h1>
          <p>Results</p>
        </div>

        <Row ClassName="bill-cards">
          <Col xs={8}>
            {this.props.searchData &&
              this.props.searchData.map((bill, index) => (
                <div className="bill-container" key={index}>
                  <Card>
                    <CardHeader tag="h3">{bill.short_title}</CardHeader>
                    <CardBody>
                      <Row>
                        <Col xs={6}>
                          <CardTitle>
                            Similarity Score: {bill.similarity_score}
                          </CardTitle>
                          <CardText>Congress: {bill.congress}</CardText>
                          <CardText>Status: {bill.status}</CardText>
                          <Button>Bill Link</Button>
                        </Col>
                        <Col xs={3}>Top 5 Subjects:</Col>
                        <Col xs={3}>
                          {bill.top_5_subjects.map((subject, index) => (
                            <li key={index} className="cardheader">
                              {subject}{" "}
                            </li>
                          ))}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              ))}
          </Col>
          <Col xs={4} />
        </Row>
      </div>
    );
  }
}
