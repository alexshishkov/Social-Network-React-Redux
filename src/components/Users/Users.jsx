import React from 'react';
import c from './Users.module.css'
import user_photo from '../../images_user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) =>{

    let pagesCount = Math.ceil(props.count / props.pageSize);
    
    let pages = [];

    for (let i=1; i <= pagesCount; i++ ){
        pages.push(i);
    }

    return (
        <div>
            <div className={c.pages}>
                {pages.slice(0, 30).map(p => {
                    return <span className={c.onePage}><span onClick={() => {props.onPageChanged(p)}} className={props.page === p && c.selectedPage}>{p}</span></span>})
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={c.wrapper}>
                    <div className={c.user_wrapper_ava}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : user_photo } alt="ава"/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button className={c.button} onClick ={ () => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "1f131247-5a03-42d6-abfd-68ff4fdf198c"
                                        }
                                    }).then( response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                                    }}>Unfollow</button>

                                : <button className={c.button} onClick ={ () => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '1f131247-5a03-42d6-abfd-68ff4fdf198c'
                                        }
                                    }).then( response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });
                                    }}>Follow</button>}
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
};

export default Users;