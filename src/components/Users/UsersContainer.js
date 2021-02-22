import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers,
    setPages,
    toogleFollowingProgress,
    unfollow
} from "../../redux/user-reduser";
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {
    getFollowingIsProgress,
    getIsFething,
    getPage,
    getPageSize,
    getUserCont, getUsers,
} from "../../redux/user-selectors";

class UsersC extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.page, this.props.pageSize);
    };

    onPageChanged = (p) => {
        this.props.requestUsers(p, this.props.pageSize);
    };

    render() {
        return <> {this.props.isFething ? <Preloader /> : null}
            <Users count={this.props.count}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   page={this.props.page}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toogleFollowingProgress={this.props.toogleFollowingProgress}
                   followingIsProgress ={this.props.followingIsProgress}
            />
    </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        count: getUserCont(state),
        page: getPage(state),
        isFething: getIsFething(state),
        followingIsProgress: getFollowingIsProgress(state)
    }
};

export default withAuthRedirect (connect(mapStateToProps, {follow, unfollow,
    setPages, toogleFollowingProgress, requestUsers})(UsersC));
