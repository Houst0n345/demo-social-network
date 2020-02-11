import React from 'react';
import UserImg from '../../asset/User.png';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import styleFor from '../common/css/button.module.css';


const Users = (props) => {
    return <div>
        <Pagination totalItemsCount={props.totalCount} currentPage={props.pageNumber}
                    pageSize={props.pageSize} onPageChanged={props.onPageChanged}/>

        {
            props.state.map(u => <div className={s.users} key={u.id}>
                <div>
                    <div>{u.name}</div>
                    <div>
                        <NavLink to={`/Profile/` + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : UserImg} alt="userimg"
                                 className={s.userPhoto}/>
                        </NavLink>

                    </div>

                    <div className={s.button}>
                        {u.followed
                            ? <button className={styleFor.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowThunk(u.id);
                            }}>Unsubscribe</button>
                            : <button className={styleFor.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunk(u.id)
                            }}>Subscribe</button>
                        }
                    </div>
                </div>
                <div className={s.description}>

                    {/*<div>{'u.location.city' }</div>*/}
                    {/*<div>{'u.location.country'}</div>*/}
                    <div>{u.status}</div>
                </div>
            </div>)

        }
        {/*<Pagination {...props} pages = {pages}/>*/}
    </div>
};


export default Users;