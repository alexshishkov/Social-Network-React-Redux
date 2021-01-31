import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setIsFething,
    setPages,
    setTotalUserCount,
    setUsers,
    unfollow
} from "../../redux/user-reduser";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class UsersC extends React.Component {
    componentDidMount() {
        this.props.setIsFething(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}& count =${this.props.pageSize}`).then( response => {
            this.props.setIsFething(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }
    onPageChanged = (p) => {
        this.props.setIsFething(true);
        this.props.setPages(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}& count = ${this.props.pageSize}`).then( response => {
            this.props.setIsFething(false);
            this.props.setUsers(response.data.items);
        });};

    render() {
        return <> {this.props.isFething ? <Preloader /> : null}
            <Users count ={this.props.count}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      page={this.props.page}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        count: state.users.userCount,
        page: state.users.page,
        isFething: state.users.isFething
    }
};

const usersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPages,
    setTotalUserCount,
    setIsFething
})(UsersC);

export default usersContainer;
