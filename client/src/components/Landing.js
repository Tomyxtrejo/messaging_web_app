import React, { Component } from "react";
import avatar from "../utils/img/avatar.jpg";
import one from "../utils/img/one.jpg";
import two from "../utils/img/two.jpeg";
import three from "../utils/img/three.jpg";
import four from "../utils/img/four.jpg";
import P2p from "./contents/P2p"

class Landing extends Component {
  state = {
    content: 'p2p'
  }
  render() {
    return (
      <div className="landing">
        <div className="landing_header header">
          <div className="landing_header_left" />
          <div className="landing_header_right">


            <div className="landing_header_right_avatar">
            <i className="far fa-bell header_notification"/>
              <img src={avatar} className="landing_header_right_avatar_image" />
            </div>
            <div className="landing_header_right_name">Neeraj Pandey</div>
            <i className="fa fa-chevron-down down-chevron" />
          </div>
        </div>
        <div className="landing_main">
          <div className="landing_main_names">
            <div className="landing_main_names_info">
              <div className="landing_main_names_info_left">
                <h3 className="landing_main_names_info_left_chat">
                  Conversation
                </h3>
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
            <div className="filter_chats">
              <div className="recent_chat_filter">Recent Chats <i className="fa fa-chevron-down down-chevron1" /></div>
              <div className="new_chat_filter">New Chat <i className="fa fa-chevron-down down-chevron1" /></div>

            </div>
            <div className="landing_main_chat_show">
              <div className="landing_main_chat_list_item">
                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={one}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Joe Nash
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                {""}

                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={two}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Martin Grasser
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing my frie..{" "}
                    </h7>
                  </div>
                </div>

                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={three}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Katerine Harders
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={four}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      james Powell
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={one}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Vincenz Goromodz
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={two}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Martin Grasser
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={three}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Katerine Harders
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={four}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      james Powell
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={one}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Vincenz Goromodz
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
                {""}
                <div className="landing_main_chat_list_item_div">
                  <div className="landing_main_chat_list_item_div_avatar">
                    <img
                      src={two}
                      className="landing_main_chat_list_item_div_avatar_image"
                    />
                  </div>
                  <div className="landing_main_chat_list_item_div_details">
                    <i className="fa fa-ellipsis-h landing_main_chat_list_item_div_details_settings" />
                    <h5 className="landing_main_chat_list_item_div_details_name">
                      Kevin Mitnick
                    </h5>
                    <h7 className="landing_main_chat_list_item_div_details_content">
                      You: How are you doing man?{" "}
                    </h7>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="landing_main_chats" />
          <div className="landing_main_details" >
            <P2p />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
