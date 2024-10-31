import Image from '../Assets/02.png';
import '../Styles/Page2.css';
import { FaArrowRight } from "react-icons/fa6";

const Page2 = () => (
    <div className='page2'>
  <div className='page21'>
      <img src = {Image} alt = 'secondimage' style={{ height: '500px', weight: '400px'}} />
      </div>
      <div className='page22'>
        <h1>02</h1>
        <div className='page221'>
        <hr style={{transform: 'rotate(90deg)', color:'rgb(232, 152, 41)', margin: '0%', padding: '0%', height: '45px'}}/>
        <h4 style={{letterSpacing: '0.5rem', color:'rgb(232, 152, 41)' }}>HIKING ESSENTIALS</h4>
        </div>
       <h2 style={{fontSize: '50px', marginTop: '-70px', fontFamily: 'karela', marginLeft: '95px'}}>Picking the right Hiking Gear!</h2>
       <p style={{marginLeft: '95px', lineHeight: '1.5', marginTop: '-20px'}}>The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away eith things you already have. Let's start with clothing. Atypical mistake hiking beginners make is wearing jeans and regular clothes ,which will get heavy and chafe wif they get sweaty or wet.</p>
       <div className='page222'>
       <p>read more</p>
       <FaArrowRight className='arrow-icon'/>
     </div>
  </div>
  </div>
)

export default Page2