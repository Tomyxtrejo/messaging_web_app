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
          <div className="card-body profile_card_body">
            <h5 className="card-title">Katherine Harders</h5>
            <p className="card-text">@katy_hardy</p>
          </div>
        </div>
        {""}
        {/* Accordion starts here */}
        <div className="container">
          <div className="accordion-option">
            <a
              href="javascript:void(0)"
              className="toggle-accordion active"
              accordion-id="#accordion"
            />
          </div>
          <div className="clearfix" />
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default p2p_profile_details_accordion">
              <div
                className="panel-heading"
                role="tab"
                id="headingOne"
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h4 className="panel-title p2p_profile_details_accordion_title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    OPTIONS
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  <div className="p2p-panel-body-list">
                    <div className="p2p-panel-body-list-item">
                      <div className="p2p-panel-body-list-item-details">
                        Edit Nickname
                      </div>
                      <div className="p2p-panel-body-list-item-icon">
                        <i className="fas fas fa-edit panel-edit-icon" />
                      </div>
                    </div>

                    <div className="p2p-panel-body-list-item">
                      <div className="p2p-panel-body-list-item-details">
                        Change Theme
                      </div>
                      <div className="p2p-panel-body-list-item-icon">
                        <i className="fas fa-tint panel-tint-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default p2p_profile_details_accordion">
              <div
                className="panel-heading"
                role="tab"
                id="headingTwo"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <h4 className="panel-title p2p_profile_details_accordion_title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    PRIVACY AND SUPPORT
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  <div className="p2p-panel-body-list">
                    <div className="p2p-panel-body-list-item">
                      <div className="p2p-panel-body-list-item-details">
                        Notifications
                      </div>
                      <div className="p2p-panel-body-list-item-icon">
                        <i className="fas fa-bell panel-bell-icon" />
                      </div>
                    </div>

                    <div className="p2p-panel-body-list-item">
                      <div className="p2p-panel-body-list-item-details">
                        Ignore Messages
                      </div>
                      <div className="p2p-panel-body-list-item-icon">
                        <i className="fas fa-cut panel-reject-icon" />
                      </div>
                    </div>

                    <div className="p2p-panel-body-list-item">
                      <div className="p2p-panel-body-list-item-details">
                        Block User
                      </div>
                      <div className="p2p-panel-body-list-item-icon">
                        <i className="fas fa-ban panel-block-icon" />
                      </div>
                    </div>

                    <div className="p2p-panel-body-list-item">
                      <div className="p2p-panel-body-list-item-details">
                        Something went wrong?
                      </div>
                      <div className="p2p-panel-body-list-item-icon">
                        <i className="fas fa-exclamation-triangle panel-warning-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Accordion ends here */}
      </div>
    );
  }
}
export default P2p;
