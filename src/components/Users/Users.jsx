import React from "react";
import c from './Users.module.css'
import * as axios from "axios";
import user_photo from '../../images_user.png'

class Users extends React.Component {
    componentDidMount() {
            axios.get ('https://social-network.samuraijs.com/api/1.0/users').then( response => {
                this.props.setUsers(response.data.items)
            });
        }
    render() {
        return (
            <div>
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