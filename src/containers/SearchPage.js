import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./SearchPage.css";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: ""
    };
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = async event => {
    event.preventDefault();


    this.setState({ isLoading: true });

    try {
        await this.props.searchBills({
          searchTerm: this.state.content
        });
        this.props.history.push("/results");
      } catch (e) {
        alert(e);
        this.setState({ isLoading: false });
      }


  }

  render() {
      console.log(this.props.searchBills)
    return (
      <div className="NewSearch">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              
              componentClass="textarea"
              placeholder="Enter your search criteria"
            />
          </FormGroup>
          <LoaderButton className="NewSearch"
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Search"
            loadingText="Searching…"
          />
        </form>
      </div>
    );
  }
}