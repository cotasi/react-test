import hd from '../css/header.module.scss';

import naviArr from '../Data/naviArr.json';

export default function Header() {


    return(
       <header id="header" className="container d-flex fixed-top align-items-center p-0 border-bottom justify-content-between">
            <h1><a href="#" className = {hd.gnblist}>로고</a></h1>
            <ul id="gnb" className="d-flex m-0 p-0">
                {
                    naviArr.map((el,idx) => {
                        return <li key= {`list${idx}`}><a href={el.href}>{el.nm}</a></li>
                    })
                }
            </ul>
       </header>
    );
}

export function Quick() {
    return(
        <aside></aside>
    );
}