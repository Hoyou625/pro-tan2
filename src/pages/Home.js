import Middle from '../Middle.js';
import MidList from '../MidList.js';
import MidImage from '../MidImage.js';

export default function Home(){
    return(
        <div>
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
    </div>
        </div>
    );
}