import React, { Component } from "react";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
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
        const { geoIps } = response;
        console.log(geoIps);
        this.setState({ location: geoIps });
      });
  }
  render() {
    return <div className="contacts">{this.props.location}</div>;
  }
}
export default Location;
