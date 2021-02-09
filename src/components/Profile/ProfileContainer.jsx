import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reduser";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14171;
        }
        this.props.getUserProfile(userId)};
    
    render() {
        if (!this.props.isAuth) return <Redirect to = '/login'/>;
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    isAuth: state.isAuth.isAuth
});

let WithUrlDataContainerComponent = withRouter(authRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);