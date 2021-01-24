import React, { Component } from "react";
import "./ContactsPage.css";
import ContactTags from "./ContactTags";
import Deals from "./Deals";
import Location from "./Location";
import TotalValue from "./TotalValue";

class ContactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts",
      {
        headers: {
          "Api-Token": process.env.REACT_APP_API_TOKEN,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const { contacts } = response;
        console.log(contacts);
        this.setState({ contacts: contacts });
      });
  }
  render() {
    return (
      <div className="contacts">
        <table>
          <tbody>
            <tr class="header">
              <th></th>
              <th>Contact Name</th>
              <th class="arrow">Total Value</th>
              <th>Location</th>
              <th>Deals</th>
              <th>Tags</th>
            </tr>
            {this.state.contacts.map((contact) => (
              <tr class="data-rows">
                <td>
                  <input type="checkbox" />
                </td>
                <td class="contact-name">
                  {contact.firstName} {contact.lastName}
                </td>
                <td class="dollars">
                  {/* <TotalValue url={contact.links["fieldValues"]} /> */}
                  {contact.links["fieldValues"]}
                </td>
                <td>
                  {/* <Location url={contact.links["geoIps"]} /> */}

                  {contact.links["geoIps"]}
                </td>
                <td>
                  {/* <Deals url={contact.links["deals"]} /> */}
                  {contact.links["deals"]}
                </td>
                <td>
                  {/* <ContactTags url={contact.links["contactTags"]} /> */}
                  {contact.links["contactTags"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ContactsPage;
