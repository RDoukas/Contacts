import React, { Component } from "react";

class TotalValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: [],
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
        const { fieldValues } = response;
        console.log(fieldValues);
        this.setState({ total: fieldValues });
      });
  }
  render() {
    return <div className="contacts">{this.props.total}</div>;
  }
}
export default TotalValue;
