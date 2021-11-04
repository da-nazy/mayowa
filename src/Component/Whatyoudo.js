import mayowa_wyd1 from '../Asset/Image/mayowa_wyd1.jpg';
import mayow_wyd3 from '../Asset/Image/mayow_wyd3.jpg';
import {useState,useRef} from 'react';
import DatePicker from 'react-date-picker';

import {FaCalendar,FaArrowDown} from 'react-icons/fa'
function Whatyoudo() {
    const wyd=[{
         img:mayowa_wyd1,
         text:'Paid Employement',
         fnt:600,
    },
    {
        img:mayowa_wyd1,
        text:'Self Employement/Freelance',
        fnt:300,
   },
   {
    img:mayow_wyd3,
    text:'Corperate Organization',
    fnt:300,
}
]
const [startDate, setStartDate] = useState(new Date());
const [selectedDate,setSelectedDate]=useState(null);
    const [isOpen,setIsOpen]=useState(false);
    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
        setSelectedDate(e);
      };
      const calendarRef=useRef(null);
      const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      
      };
     
    return (
        <div>
            
            <div>
                <h3 style={{color:'#BF1559'}}>What Do You Do?</h3>
            <div style={{height:180,width:'90%',margin:'0 auto',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
             {wyd.map((e,i)=>{
                 return(
                    <div key={i} style={{height:'90%',flexDirection:'column',width:'30%',justifyContent:'center',display:'flex',alignItems:'center'}}>
                    <div style={{border:'1px solid #fff',height:'80%',width:'80%',justifyContent:'center',display:'flex',borderRadius:10,boxShadow:" 0 0 20px #ccc"}}>
                  <img src={e.img} height={'80%'} width={'80%'} style={{margin:'auto'}}/>  
                </div>
                <h5 style={{margin:'0 auto',color:'#BF1559',marginTop:10,fontWeight:`${e.fnt}`}}>{e.text}</h5>
                </div>
                 )
             })}
            </div>
            <div style={{width:'80%',margin:'0 auto',marginTop:50,height:'auto'}}>
                <form>
                <h4 style={{color:'#BF1559',margin:0,textAlign:'left',fontWeight:'500'}}>How much do you earn monthly?</h4>
                <div style={{marginTop:20,display:'flex',flexDirection:'row',height:40}}>
                    <div style={{width:'12%',alignSelf:'center',color:'#fff',backgroundColor:'#BF1559',height:'100%',marginRight:2,justifyContent:'center',display:'flex'}}><h5 style={{alignSelf:'center'}}>{'\u20A6'}</h5></div><input type="text" id="todo"  onChange={(e)=>console.log(e)} style={{width:'80%',boxShadow:" 0 0 10px #ccc",border:'1px solid #fff',borderRadius:2}}/>
                </div>
                <div style={{marginTop:20}}>
                <h4 style={{color:'#BF1559',margin:0,textAlign:'left',fontWeight:'500'}}>When is your next salary?</h4>
                <div style={{border:'1px solid #fff',height:40,flexDirection:'row',display:'flex',boxShadow:" 0 0 10px #ccc",width:'93%',justifyContent:'space-evenly',marginTop:10}}>
                <i style={{color:'#BF1559',width:'20%',textAlign:'left',alignSelf:'center'}} onClick={handleClick}><FaCalendar/></i><h5 style={{color:'#BF1559',fontWeight:'500',width:'40%',alignSelf:'center'}}>{selectedDate?selectedDate.toString().split(':')[0]:'Select pay date'}</h5><i style={{color:'#BF1559',width:'20%',alignSelf:'center'}}><FaArrowDown/></i>
                </div>
                {isOpen&&<DatePicker selected={startDate} onChange={handleChange} inline dateFormat="yyyy/MM/dd"/>}
                </div>

                <div style={{marginTop:20}}>
                <h4 style={{color:'#BF1559',margin:0,textAlign:'left',fontWeight:'500'}}>Do you have any existing loan(s)?</h4>
                <div style={{border:'1px solid #fff',height:40,flexDirection:'row',display:'flex',boxShadow:" 0 0 10px #ccc",width:'93%',justifyContent:'space-around',marginTop:10}}>
                 <div style={{ width:'42%' ,display:'flex',flexDirection:'row',justifyContent:'center'}}>
                     <input type="radio" id="todo"  onChange={(e)=>console.log(e)} style={{border:'1px solid #BF1559',borderRadius:20,width:20,height:20,marginRight:5,alignSelf:'center'}}/><h5 style={{margin:0,alignSelf:'center'}}>Yes</h5></div>
                      <hr />
                     <div  style={{ width:'42%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'left'}}>
                     <input type="radio"  id="todo" color="red"  onChange={(e)=>console.log(e)} style={{border:'1px solid #BF1559',color:'#BF1559',borderRadius:20,width:20,height:20,alignSelf:'center',marginRight:5}}/><h5 style={{margin:0,alignSelf:'center'}}>No</h5></div>
                 </div>
                   </div>
                   <div>
                       <button style={{width:'30%',height:40,borderRadius:20,border:'1px solid #BF1559',color:'#BF1559',fontWeight:'600',marginTop:30,background:'#fff'}}>
                           Continue
                       </button>
                   </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Whatyoudo
