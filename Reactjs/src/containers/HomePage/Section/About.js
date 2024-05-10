import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
        <FormattedMessage id="homepage.media-talk-about-benh-vien" />
        </div>
        <div className="section-about-content">
          <div className="content-left">
          <iframe width="700" height="400" src="https://www.youtube.com/embed/YUIm-BiTYBk?si=Z0WMQD8YVXstQfOB&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
          <div className="content-right">
            <p>
                <FormattedMessage id="homepage.media-talk-about-benh-vien-content" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
