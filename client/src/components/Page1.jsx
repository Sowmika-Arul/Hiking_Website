import '../Styles/Page1.css';
import page1 from '../Assets/01.png';
import { FaArrowRight } from "react-icons/fa6";

const Page1 = () => (
<div className='div'>
<div className='div1'>
    <h1>01</h1>
    <div className='div11' >
        <hr style={{transform: 'rotate(90deg)', color:'rgb(232, 152, 41)'}}/>
        <h4 style = {{color:'rgb(232, 152, 41)'}}>GET STARTED</h4>
    </div>
    <h2 style={{fontSize: '50px', marginTop: '-70px', fontFamily: 'karela', marginLeft: '95px'}}>What level of hiker are you?</h2>
    <p style={{marginLeft: '95px', lineHeight: '1.5', marginTop: '-20px'}}>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
    <div className='div12'>
   <p>read more</p>
   <FaArrowRight/>
    </div>
</div>
<div className='div2'>
<img src={page1} alt="Description" style={{height: '500px', width: '400px', marginTop: '10px' }}/>
</div>
</div>
)

export default Page1;