import React, { Component } from "react";
import three from "../../utils/img/three.jpg";
import TextAreaFieldGroup from "../commons/TextField";
import InstagramEmbed from "react-instagram-embed";

class P2pChats extends Component {
  state = {
    newMessage: ""
  };

  // On change method when there is a message update
  onChangeMessage = event => {
    this.setState({
      newMessage: event.target.value
    });
    // console.log(this.state.newMessage);
  };
  render() {
    return (
      <div className="P2pChats">
        <div className="P2pChats_header">
          <div className="P2pChats_header_left">
            <div className="P2pChats_header_left_avatar">
              <img src={three} className="P2pChats_header_left_avatar_image" />
            </div>
            <div className="P2pChats_header_left_details">
              <h5 className="P2pChats_header_left_details_h5">
                Katerine Harders
              </h5>
              <h6 className="P2pChats_header_left_details_h6">Online</h6>
            </div>
          </div>
          <div className="P2pChats_header_right">
            <i className="fas fa-video P2pChats_header_right_video " />
            <i className="fas fa-phone-alt P2pChats_header_right_audio" />
          </div>
        </div>
        <div className="P2pChats_chats" />
        <div className="P2pChats_bottom">
          <div className="P2pChats_bottom_more">
            <i className="fas fa-plus plus-icon" />
          </div>
          <div className="P2pChats_bottom_message">
            <textarea
              value={this.state.newMessage}
              onChange={this.onChangeMessage}
              className="textarea"
              placeholder="Type message here"
            />
          </div>
          <div className="P2pChats_bottom_emoji">
            <i className="far fa-smile smile-icon" />
          </div>
          <div className="P2pChats_bottom_send">
            <i className="fas fa-paper-plane send-icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default P2pChats;
