import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowsAC} from "../../redux/user-reduser";


const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowsAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },

    }
};

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;
