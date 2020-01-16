import React, { Component } from "react";
import avatar from "../utils/img/avatar.jpg";
import one from "../utils/img/one.jpg";
import two from "../utils/img/two.jpeg";
import three from "../utils/img/three.jpg";
import four from "../utils/img/four.jpg"

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing_header header">
          <div className="landing_header_left" />
          <div className="landing_header_right">
            <div className="landing_header_right_name">Neeraj Pandey</div>

            <div className="landing_header_right_avatar">
              <img src={avatar} className="landing_header_right_avatar_image" />
            </div>
          </div>
        </div>
        <div className="landing_main">
          <div className="landing_main_names">
            <div className="landing_main_names_info">
              <div className="landing_main_names_info_left">
                <img
                  src={avatar}
                  className="landing_main_names_info_left_avatar"
                />
                <h3 className="landing_main_names_info_left_chat">Chats</h3>
              </div>
              <div className="landing_main_names_info_right">
                <i className="fa fa-cog landing_main_names_info_right_gear" />
                <i className="fa fa-user-plus landing_main_names_info_right_new" />
              </div>
            </div>
            <div className="landing_main_names_search_div">
              <input
                type="text"
                placeholder="Search Vortex Chat"
                className="landing_main_names_search"
              />
              <i className="fa fa-search landing_main_names_search_icon " />
            </div>
            <div className="landing_main_chat_show">
              <ul className="landing_main_chat_list">
                <li className="landing_main_chat_list_item">
                  <div className="landing_main_chat_list_item_div">
                    <div className="landing_main_chat_list_item_div_avatar">
                      <img
                        src={one}
                        className="landing_main_chat_list_item_div_avatar_image"
                      />
                    </div>
                    <div className="landing_main_chat_list_item_div_details">
                      <h5 className="landing_main_chat_list_item_div_details_name">
                        Joe Nash
                      </h5>
                      <h7 className="landing_main_chat_list_item_div_details_content">
                        You: How are you doing man?{" "}
                      </h7>
                    </div>
                  </div>
                </li>

                <li className="landing_main_chat_list_item">
                  <div className="landing_main_chat_list_item_div">
                    <div className="landing_main_chat_list_item_div_avatar">
                      <img
                        src={two}
                        className="landing_main_chat_list_item_div_avatar_image"
                      />
                    </div>
                    <div className="landing_main_chat_list_item_div_details">
                      <h5 className="landing_main_chat_list_item_div_details_name">
                        James Powell
                      </h5>
                      <h7 className="landing_main_chat_list_item_div_details_content">
                        James: I'll be there.{" "}
                      </h7>
                    </div>
                  </div>
                </li>

                <li className="landing_main_chat_list_item">
                  <div className="landing_main_chat_list_item_div">
                    <div className="landing_main_chat_list_item_div_avatar">
                      <img
                        src={three}
                        className="landing_main_chat_list_item_div_avatar_image"
                      />
                    </div>
                    <div className="landing_main_chat_list_item_div_details">
                      <h5 className="landing_main_chat_list_item_div_details_name">
                        Matthew Leichleider
                      </h5>
                      <h7 className="landing_main_chat_list_item_div_details_content">
                        Matthew: Drupal is great, man!.{" "}
                      </h7>
                    </div>
                  </div>
                </li>
                <li className="landing_main_chat_list_item">
                  <div className="landing_main_chat_list_item_div">
                    <div className="landing_main_chat_list_item_div_avatar">
                      <img
                        src={four}
                        className="landing_main_chat_list_item_div_avatar_image"
                      />
                    </div>
                    <div className="landing_main_chat_list_item_div_details">
                      <h5 className="landing_main_chat_list_item_div_details_name">
                        Matthew Leichleider
                      </h5>
                      <h7 className="landing_main_chat_list_item_div_details_content">
                        Matthew: Drupal is great, man!.{" "}
                      </h7>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="landing_main_chats" />
          <div className="landing_main_details" />
        </div>
      </div>
    );
  }
}

export default Landing;
