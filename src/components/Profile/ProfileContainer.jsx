import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reduser";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14171;
        }
        this.props.getUserProfile(userId)};
    
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);