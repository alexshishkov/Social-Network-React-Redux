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
import Preloader from "../Common/Preloader/Preloader";
import {getUser} from "../../api/api";

class UsersC extends React.Component {
    componentDidMount() {
        this.props.setIsFething(true);
        getUser(this.props.page, this.props.pageSize).then( data => {
            this.props.setIsFething(false);
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount);
        });
    }
    onPageChanged = (p) => {
        this.props.setIsFething(true);
        this.props.setPages(p);
        getUser(p, this.props.pageSize).then( data => {
            this.props.setIsFething(false);
            this.props.setUsers(data.items);
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
