import React, { Component } from 'react'
import three from "../../utils/img/three.jpg"
import TextAreaFieldGroup from "../commons/TextField"

class P2pChats extends Component {
  render() {
    return (
      <div className="P2pChats">
        <div className="P2pChats_header">
          <div className="P2pChats_header_left">
            <div className="P2pChats_header_left_avatar">
              <img src = {three}  className="P2pChats_header_left_avatar_image"/>
            </div>
            <div className="P2pChats_header_left_details">
              <h5 className= "P2pChats_header_left_details_h5">Katerine Harders</h5>
              <h6 className="P2pChats_header_left_details_h6">Online</h6>
            </div>
          </div>
          <div className="P2pChats_header_right">
            <i className="fas fa-video P2pChats_header_right_video "></i>
            <i className="fas fa-phone-alt P2pChats_header_right_audio"></i>
          </div>

        </div>
        <div className="P2pChats_chats"></div>
        <div className="P2pChats_bottom">
          <div className="P2pChats_bottom_more">
          <i className="fas fa-plus plus-icon"></i>
          </div>
          <div className="P2pChats_bottom_message">
          <textarea  className="textarea"/>
          </div>
          <div className="P2pChats_bottom_emoji"></div>
          <div className="P2pChats_bottom_send"></div>

        </div>
      </div>
    )
  }
}

export default P2pChats
