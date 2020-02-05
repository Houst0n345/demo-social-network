import s from "./Pagination.module.css";
import React, {useState} from 'react';
import styleFor from '../../common/css/button.module.css';


let Pagination = ({totalItemsCount, currentPage, pageSize, onPageChanged,portionSize= 10}) => {
    let pagesCount = Math.ceil(totalItemsCount/pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = pagesCount/portionSize;
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize;
    let rightPortionPageNumber = portionNumber*portionSize;

    return <div className={s.pagination}>
        {  (portionNumber > 1) &&
        <button onClick={() => {setPortionNumber(portionNumber-1)}} className={styleFor.button}>PREV</button>
    }

        <ul className={s.pagination__item}>
            {pages.filter(i=> i>=leftPortionPageNumber && i<rightPortionPageNumber).map(p => {
                return <li className={currentPage === p && s.active}
                           onClick={() => { onPageChanged(p)}}> {p} </li>
            })}
        </ul>
        {
            (portionCount > portionNumber) &&
            <button onClick={() => {setPortionNumber(portionNumber+1)}}  className={styleFor.button}>NEXT</button>
        }

    </div>
};

export default Pagination;