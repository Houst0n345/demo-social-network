import React from 'react';
import UserImg from '../../asset/User.png';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import styleFor from '../common/css/button.module.css';


const Users = (props) => {

    return <div className={s.users}>
        <Pagination totalItemsCount={props.totalCount} currentPage={props.pageNumber}
                    pageSize={props.pageSize} onPageChanged={props.onPageChanged}/>
        <div className={s.usersWrap}>
            {
                props.state.map(u => <div className={s.container} key={u.id}>
                    <div className={s.container__block}>
                        <NavLink to={`/Profile/` + u.id}>
                            <img className={s.image} src={u.photos.small != null ? u.photos.small : UserImg}
                                 alt="userImg"/>
                        </NavLink>
                        {u.followed
                            ? <button className={styleFor.button}
                                      disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowThunk(u.id);
                            }}>Unsubscribe</button>
                            : <button className={styleFor.button}
                                      disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunk(u.id)
                            }}>Subscribe</button>
                        }
                    </div>

                    <div>
                        <div className={s.userName}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                </div>)
            }
        </div>


    </div>
};


export default Users;