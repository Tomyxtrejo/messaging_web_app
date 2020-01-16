import React, { Component } from "react";
import three from "../../utils/img/three.jpg";

class P2p extends Component {
  render() {
    return (
      <div className="p2p">
        <div className="card profile_card">
          <img
            className="card-img-top profile_card_image"
            src={three}
            alt="Profile Image"
          />
          <div class="card-body profile_card_body">
            <h5 className="card-title">Katherine Harders</h5>
            <p className="card-text">@katy_hardy</p>
          </div>
        </div>
        {""}
        <input type="checkbox" name="toggle" id="options_toggle" />
        <label for="options_toggle" id="privacy_toggle_label"/>

        <div className="options_toggle_div">
          <i className="fa fa-chevron-down down-chevron-2" />
        </div>
        <div className="p2p_options" id = "p2p_options">
          <div className="p2p_options_content">
            <div className="p2p_options_content_friends_icon">
              <i className="fa fa-user-circle p2p_options_content_friends_icon_i" />
            </div>
            <div className="p2p_options_content_friends_since">
              Friends since August 2018.
            </div>
          </div>

          <div className="p2p_options_content">
            <div className="p2p_options_content_friends_icon">
              <i className="fa fa-paper-plane p2p_options_content_friends_icon_i" />
            </div>
            <div className="p2p_options_content_friends_since">
              katy_hardy@gmail.com
            </div>
          </div>

          <div className="p2p_options_content">
            <div className="p2p_options_content_friends_icon">
              <i className="fa fa-phone p2p_options_content_friends_icon_i" />
            </div>
            <div className="p2p_options_content_friends_since">
              +91-84557-36445
            </div>
          </div>
        </div>
        {""}
        <button className="lala">alalala</button>

      </div>
    );
  }
}
export default P2p;
