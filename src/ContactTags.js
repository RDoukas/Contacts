import React, { Component } from "react";

class ContactTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
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
        const { contactTags } = response;
        console.log(contactTags);
        this.setState({ tags: contactTags });
      });
  }
  render() {
    return <div className="contacts">{this.props.tags}</div>;
  }
}
export default ContactTags;
