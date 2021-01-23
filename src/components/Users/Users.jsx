import React from "react";
import c from './Users.module.css'
import * as axios from "axios";
import user_photo from '../../images_user.png'

class Users extends React.Component {
    componentDidMount() {
            axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}& count =${this.props.pageSize}`).then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
        }
    onPageChanged = (p) => {
        this.props.setPage(p);
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${p}& count = ${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items);
        });};


    render() {

        let pagesCount = Math.ceil(this.props.count / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++ ){
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={() => {this.onPageChanged(p)}} className={this.props.page === p && c.selectedPage}>{p}</span>})
                    }
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <div className={c.wrapper}>
                        <div className={c.user_wrapper_ava}>
                            <img src={u.photos.small != null ? u.photos.small : user_photo } alt="ава"/>
                            <div>
                                {u.followed
                                    ? <button className={c.button} onClick ={ () => {this.props.unfollow(u.id)}}>Unfollow</button>
                                    : <button className={c.button} onClick ={ () => {this.props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div className={c.user_wrapper_content}>
                            <div className={c.user_name}>
                                <p className={c.name}>{u.name}</p>
                                <p className={c.status}>{u.status}</p>
                            </div>
                            <div className={c.user_content}>
                                <p className={c.country}>Coutry: {'u.location.country'}</p>
                                <p className={c.city}>City: {'u.location.city'}</p>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Users;