import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers,
    setPages,
    toogleFollowingProgress,
    unfollow
} from "../../redux/user-reduser";
import Preloader from "../Common/Preloader/Preloader";

class UsersC extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.pageSize);
    };

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
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
        users: state.users.users,
        pageSize: state.users.pageSize,
        count: state.users.userCount,
        page: state.users.page,
        isFething: state.users.isFething,
        followingIsProgress: state.users.followingIsProgress
    }
};

const usersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setPages,
    toogleFollowingProgress,
    getUsers
})(UsersC);

export default usersContainer;
