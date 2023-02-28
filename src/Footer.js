import topArrow from './assets/top_arrow.jpg';

function Footer(){
    return(
        <footer>
            <div className="foot_top row">
                <ul>
                    <li>
                        <a href="./">
                            이용약관
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            개인정보 취급방침
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            공지사항
                        </a>
                    </li>
                </ul>
            </div>
            <div className="adress row">
                <p>
                    Address : 13595 경기도 성남시 분당구 황새울로 216, 휴맥스빌리지 | Phone : 031-776-6017 | Fax : 037-776-6007 | E-mail : tancheonforum@tancheonforum.com
                </p>
            </div>
            <div className="copy row">
                <p>
                    Copyright &copy; 2017 재단법인 탄천연구포럼 All rights reserved
                </p>
            </div>
            <div className="go_top">
                <a href="./">
                    <img src={topArrow} alt='go top' />
                    <span>
                        T O P
                    </span>
                </a>
            </div>
        </footer>
    )
}
export default Footer;