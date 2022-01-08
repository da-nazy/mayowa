
import mayowa_wyd1 from '../Asset/Image/mayowa_wyd1.jpg';
import mayow_wyd3 from '../Asset/Image/mayow_wyd3.jpg';
import {useState,useRef,useContext,useEffect} from 'react';
import DatePicker from 'react-date-picker';
import '../style/whatyoudo.css';
import {FaCalendar,FaArrowDown} from 'react-icons/fa';
import  {EmployeeContext} from '../DataProvider/Employee';
function Whatyoudo({changeScreen,setStep}) {

    const {employee,dispatch}=useContext(EmployeeContext);
    
    const wyd=[{
         img:mayowa_wyd1,
         text:'Paid Employement',
         fnt:300,
         id:1,
    },
    {
        img:mayowa_wyd1,
        text:'Self Employement/Freelance',
        fnt:300,
        id:2,
   },
   {
    img:mayow_wyd3,
    text:'Corperate Organization',
    fnt:300,
    id:3,
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
      useEffect(()=>{
      console.log(employee);

      },[employee])
      const [existingLoan,setExistingLoan]=useState(false);
      const [noLoan,setNoLoan]=useState(false);

    
      const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      };
         const noexistLoan=()=>{
             setNoLoan(true);
             setExistingLoan(false);
         }  
         const existLoan=()=>{
            setNoLoan(false);
            setExistingLoan(true);
         }
         const [appDetails,setAppDetails]=useState({
             employmentType:'',
             averageMonthlyRevanue:'',
         })
         const submitData=(e)=>{
             e.preventDefault();
           if(inputCheck().check){
               var myobject=inputCheck();
         //  console.log(myobject,"danny");
           dispatch({type:'ADD_EMPLOYE',day:myobject.day,employementType:myobject.employementType,averageMonthRevanue:myobject.averageMonthRevanue},console.log(employee));
           changeScreen()
           }
         }
        
         const inputCheck=(e)=>{
           //  e.preventDefault();
             var check=true;
             var inputobject={};
             if(!appDetails.employmentType){
                check=false;  
             }else{
              inputobject['employementType']=appDetails.employmentType;
             }

             if(!selectedDate){
                 check=false;
             }else{
                 //var day=selectedDate.toString().split('')[2];
              var day =selectedDate.toString().split(" ")[2];
                inputobject['day']=day;
             }
             if(!appDetails.averageMonthlyRevanue){
                 check=false;
             }else{
                // console.log(appDetails.averageMonthlyRevanue);
                 inputobject['averageMonthRevanue']=appDetails.averageMonthlyRevanue;
             }
             inputobject['check']=check;
             
             return inputobject
         }
    return (
        <div>
            
            <div>
                <h3 style={{color:'#BF1559'}}>What Do You Do?</h3>
            <div style={{height:180,width:'90%',margin:'0 auto',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
             {wyd.map((e,i)=>{
                 return(
                    <div onClick={()=>setAppDetails({...appDetails,employmentType:e.id})} key={i} style={{height:'90%',flexDirection:'column',width:'30%',justifyContent:'center',display:'flex',alignItems:'center'}}>
                    <div style={{border:'1px solid #fff',height:'80%',width:'80%',justifyContent:'center',display:'flex',borderRadius:10,boxShadow:" 0 0 20px #ccc"}}>
                  <img src={e.img} height={'80%'} width={'80%'} style={{margin:'auto'}} alt={e.text} />  
                </div>
                <h5 style={{margin:'0 auto',color:'#BF1559',marginTop:10,fontWeight:`${appDetails.employmentType===e.id?600:e.fnt}`}}>{e.text}</h5>
                </div>
                 )
             })}
            </div>
            <div style={{width:'80%',margin:'0 auto',marginTop:50,height:'auto'}}>
                <form>
                <h4 style={{color:'#BF1559',margin:0,textAlign:'left',fontWeight:'500'}}>How much do you earn monthly?</h4>
                <div style={{marginTop:20,display:'flex',flexDirection:'row',height:40}}>
                    <div style={{width:'12%',alignSelf:'center',color:'#fff',backgroundColor:'#BF1559',height:'100%',marginRight:2,justifyContent:'center',display:'flex'}}><h5 style={{alignSelf:'center'}}>{'\u20A6'}</h5></div><input type="text" id="todo"  onChange={(e)=>setAppDetails({...appDetails,averageMonthlyRevanue:e.target.value})} style={{width:'80%',boxShadow:" 0 0 10px #ccc",border:'1px solid #fff',borderRadius:2}}/>
                </div>
                <div style={{marginTop:20}}>
                <h4 style={{color:'#BF1559',margin:0,textAlign:'left',fontWeight:'500'}}>When is your next salary?</h4>
                <div style={{border:'1px solid #fff',height:40,flexDirection:'row',display:'flex',boxShadow:" 0 0 10px #ccc",width:'93%',justifyContent:'space-evenly',marginTop:10}}>
                <i style={{color:'#BF1559',width:'20%',textAlign:'left',alignSelf:'center'}} onClick={handleClick}><FaCalendar/></i><h5 style={{color:'#BF1559',fontWeight:'500',width:'40%',alignSelf:'center'}}>{selectedDate?selectedDate.toString().split(':')[0]:'Select pay date'}</h5><i style={{color:'#BF1559',width:'20%',alignSelf:'center'}}><FaArrowDown/></i>
                </div>
                {isOpen&&<DatePicker selected={startDate} onChange={handleChange} inline />}
                </div>

                <div style={{marginTop:20}}>
                <h4 style={{color:'#BF1559',margin:0,textAlign:'left',fontWeight:'500'}}>Do you have any existing loan(s)?</h4>
                <div style={{border:'1px solid #fff',height:40,flexDirection:'row',display:'flex',boxShadow:" 0 0 10px #ccc",width:'93%',justifyContent:'space-around',marginTop:10}}>
                 <div style={{ width:'42%' ,display:'flex',flexDirection:'row',justifyContent:'center'}}>
                     <input type="radio"  checked={existingLoan}  onChange={(e)=>existLoan()} className="radio" /><h5 style={{margin:0,alignSelf:'center'}}>Yes</h5></div>
                      <hr />
                     <div  style={{ width:'42%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'left'}}>
                     <input type="radio"   checked={noLoan} className="radio" onChange={(e)=>noexistLoan()} /><h5 style={{margin:0,alignSelf:'center'}}>No</h5></div>
                 </div>
                   </div>
                   <div>
                       {/** changeScreen() */}
                       <button onClick={submitData} style={{width:'30%',height:40,borderRadius:20,border:'1px solid #BF1559',color:'#BF1559',fontWeight:'600',marginTop:30,background:'#fff'}}>
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
