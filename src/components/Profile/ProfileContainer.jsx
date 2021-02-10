import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reduser";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";


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

const mapStateToProps = (state) => ({
    profile: state.profile.profile
});
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);