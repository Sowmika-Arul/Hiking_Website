import '../Styles/Page1.css';
import page1 from '../Assets/03.png';
import { FaArrowRight } from "react-icons/fa6";

const Page3 = () => (
<div className='div' style={{marginTop: '70px'}}>
<div className='div1'>
    <h1>03</h1>
    <div className='div11' >
        <hr style={{transform: 'rotate(90deg)', color:'rgb(232, 152, 41)'}}/>
        <h4 style = {{color:'rgb(232, 152, 41)'}}>WHERE YOU GO IS THE SKY</h4>
    </div>
    <h2 style={{fontSize: '50px', marginTop: '-70px', fontFamily: 'karela', marginLeft: '95px'}}>Understand Your Map & Timing</h2>
    <p style={{marginLeft: '95px', lineHeight: '1.5', marginTop: '-20px'}}>To start,print out the hiking guideand map. If it's raing, throw them in a Zip-Lock bag.Read over the guide,study the map,and have a good idea of what to expect.i like to know what my next landmark is as i hike.for example,I'll read the guide and know that say,in a mile, Imake a right turn at the junction..</p>
    <div className='div12'>
   <p>read more</p>
   <FaArrowRight/>
    </div>
</div>
<div className='div2'>
<img src={page1} alt="Description" style={{height: '500px', width: '400px' }}/>
</div>
</div>
)

export default Page3;