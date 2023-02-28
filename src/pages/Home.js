import Middle from '../Middle.js';
import MidList from '../MidList.js';
import MidImage from '../MidImage.js';
import MainSlide from './MainSlide.js';
import Infoimg from '../assets/tan_main_img2_pc.jpg';

export default function Home(){
    return(
        <div className='page_wrap'>
            <h2>메인 - Home</h2>
            <div className='wrap row'>
              <Middle />
              <div className='menu_list'>
                <MidList lsrc={MidImage.menu[0].lsrc} text={MidImage.menu[0].text} title={MidImage.menu[0].title}/>
                <MidList lsrc={MidImage.menu[1].lsrc} text={MidImage.menu[1].text} title={MidImage.menu[1].title}/>
                <MidList lsrc={MidImage.menu[2].lsrc} text={MidImage.menu[2].text} title={MidImage.menu[2].title}/>
                <MidList lsrc={MidImage.menu[3].lsrc} text={MidImage.menu[3].text} title={MidImage.menu[3].title}/>
                <MidList lsrc={MidImage.menu[4].lsrc} text={MidImage.menu[4].text} title={MidImage.menu[4].title}/>
              </div>
              <div className='slide_info'>
                <div className='slide_academy'>
                  <MainSlide />
                </div>
                <div className='info'>
                  <img src={Infoimg} alt='academy info' />
                </div>
              </div>
            </div>
        </div>
    );
}