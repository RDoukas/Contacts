import React, { Component } from "react";

class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [],
    };
  }
  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/${this.props.url}`, {
      headers: {
        "Api-Token": process.env.REACT_APP_API_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const { deals } = response;
        console.log(deals);
        this.setState({ deals: deals });
      });
  }
  render() {
    return <div className="contacts">{this.props.deals}</div>;
  }
}
export default Deals;
