import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, profileGet, updateStatus} from "../../redux/profile-reduser";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14171;
        }
        this.props.profileGet(userId);
        this.props.getStatus(userId);
    };
    
    render() {
        if (!this.props.isAuth) return <Redirect to = '/login'/>;
        return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status
});
export default compose(
    connect(mapStateToProps, { getStatus, profileGet, updateStatus}
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);