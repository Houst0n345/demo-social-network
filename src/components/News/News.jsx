import React from 'react';
import s from './News.module.css';
import NewsImg from './../../asset/clickbait_2.jpg';

const News = (props) => {
    return <div>
        {props.news ? props.news.map(a => {
            return <div key={a.url} className={s.block}>

                {a.urlToImage?<img className={s.img} src={a.urlToImage} alt="newsImg"/>
                    :<img className={s.img} src={NewsImg} alt="newsImg"/>}

                <div className={s.text}>
                    <div>
                        <a className={s.link} href={a.url}>{a.title}</a>
                    </div>
                    <div className={s.description}>{a.description}</div>
                </div>

            </div>
        }) : ''}
    </div>
};

export default News;
