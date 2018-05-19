import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Icon } from "antd";
import { fetchUserProfile, editChange } from "../../store/actions";

import DetailsUnedit from "./details_unedit";
import DetailsEdit from "./details_edit";

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUserProfile(this.props.user.token);
  }
  details() {
    if (this.props.user.edit) {
      return <DetailsEdit token={this.props.user.token} />;
    } else if (!this.props.user.edit) {
      return <DetailsUnedit />;
    }
  }

  handleEdit = () => {
    this.props.editChange();
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={20}>
            <p>
              Please enter all your details by clicking 'Edit Profile'. Once all
              details are entered the profile will be approved by the SPC after
              which you will not be able to edit the profile.
            </p>
          </Col>
          <Col>
            <Button
              type="primary"
              icon="edit"
              onClick={this.handleEdit}
              disabled={this.props.user.edit}
            >
              Edit Profile
            </Button>
          </Col>
        </Row>
        <Row>
          <h2 className="text-center profile-heading">
            Profile <Icon type="user" />
          </h2>
        </Row>
        {this.details()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { fetchUserProfile, editChange })(
  UserProfile
);