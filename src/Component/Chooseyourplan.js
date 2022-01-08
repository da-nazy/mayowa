
import React,{useState,useContext} from 'react';
import {EmployeeContext} from '../DataProvider/Employee';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
function Chooseyourplan({changeScreen,setStep}) {
    const{employee}=useContext(EmployeeContext)
    const [appDetails,setAppDetails]=useState({
        month:'',
        userMonthlyPay:'0',
        downPayment:'',
        load:false,
        shoppingCredit:'0'
    })
    console.log(employee);
    const card=[
        {
          name:'Argenttina',
          numb:1,
          color:'#76FF5D'
        },
        {
          name:'Sybmia',
          numb:2,
          color:'#FFB155',
        },
        {
            name:'Forcado',
            numb:3,
            color:'#52FCEE'
        },
        {
            name:'Caramel',
            numb:4,
            color:'#6752FE'
        },
        {
            name:'Mikel',
            numb:5,
            color:'#FD4DF1'
        },
        {
            name:'Grafti',
            numb:6,
            color:'#F56A98'
        },
    ]

     const name1=["Shopping credit","Down payment","Monthly Installment","Tenure"];
     const name2=[appDetails.shoppingCredit,appDetails.downPayment,appDetails.userMonthlyPay];

      const inputCheck=()=>{
          var check=true;
       if(!appDetails.month){
           check=false;
       }

       if(!appDetails.downPayment){
           check=false;
       }
       console.log(check);
       return check;

      }
       const makeRequest=()=>{
           //url https://payqart.compound.ng/api/application/calculate
           if(inputCheck()){
               setAppDetails({...appDetails,load:true})
               console.log(appDetails.month,employee.employementType,appDetails.downPayment,employee.averageMonthRevanue,employee.day);
           axios({
               
              method:'post',
              url:' https://payqart.compound.ng/api/application/calculate',
              data:{
                requestedAmount : 150000,
                tenor :Number.parseInt(appDetails.month),
                employmentType:Number.parseInt(employee.employementType),
                userMonthlyPay :Number.parseInt(appDetails.downPayment), 
                averageMonthlyRevenue :Number.parseInt(employee.averageMonthRevanue), 
                averageMonthlyExpense : null,
                currentMonthlyLoan : 0,
                userSalaryDate :Number.parseInt(employee.day)
              }

           }).then(function(response){
             console.log(response.data)
             setAppDetails({...appDetails,load:false,shoppingCredit:response.data['Approved Shopping Credit'],userMonthlyPay:response.data['Monthly Repayment']})
             
           }).catch(function (error){
              console.log(error);
              setAppDetails({...appDetails,load:false})
           })
           }
       }
    return (
        <div style={{margin:5}}>
            <div>
            <h3 style={{color:'#BF1559'}}>Choose Your Plan?</h3>
            <div style={{height:300,display:'flex',flexDirection:'row'}}>

              {card.map((e,i)=>{
                  return(
                <div onClick={()=>setAppDetails({...appDetails,month:e.numb})} key={i} style={{marginLeft:5,marginTop:5,width:'16%',borderRadius:5,boxShadow:" 0 0 20px #ccc",height:'50%',backgroundImage:`${e.numb===appDetails.month?'linear-gradient(to top right, #720057, #DF015E)':''}`}}>
                 <div style={{height:15,backgroundColor:`${e.numb===appDetails.month?'transparent':e.color}`,borderTopRightRadius:5,borderTopLeftRadius:5}}></div>
                 <h5 style={{color:`${e.numb===appDetails.month?'#fff':'#BF1559'}`,margin:5}}>{e.name}</h5>
                 <h1 style={{color:`${e.numb===appDetails.month?'#fff':'#BF1559'}`,margin:5,fontWeight:'bold'}}>{e.numb}</h1>
                 <h5 style={{color:`${e.numb===appDetails.month?'#fff':'#BF1559'}`,margin:5}}>Month</h5>
             </div>
                  )
              })}
             

            </div>
       </div> 

       <div>
       <h3 style={{color:'#BF1559'}}>Payment Breakdown</h3>
       <div style={{height:250,borderRadius:10,boxShadow:" 0 0 20px #ccc",margin:5,display:'flex',flexDirection:'row'}}>
        <div style={{borderRight:'1px solid black',width:'30%',margin:5}}>
            {name1.map((e,i)=>{
                return(
             <h6 key={i} style={{color:'#BF1559',textAlign:'left',paddingLeft:10}}>{e}</h6>
                )
            })}
            
        </div>
      {appDetails.load&&<Box sx={{ display: 'flex' }}>
      <CircularProgress  />
    </Box>}
        <div style={{width:'25%'}}>
            {name2.map((e,i)=>{
                return(
             <h4 key={i} style={{color:'#BF1559',textAlign:'left',fontWeight:'bold',paddingLeft:10}}>{'\u20A6'}{e}</h4>
                )
            })}
              <h4 style={{color:'#BF1559',textAlign:'left',fontWeight:'bold',paddingLeft:10}}>{appDetails.month?appDetails.month:0} Month</h4>
        </div>
        <div style={{height:'100%',width:'50%',borderRadius:8,backgroundImage:' linear-gradient(to top right, #720057, #DF015E)',boxShadow:" 0 0 20px #ccc",display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <h4 style={{color:'#fff'}}>Customize<br/>Down Payment</h4>
          <div style={{marginTop:20,display:'flex',flexDirection:'row',height:40,margin:'0 auto',justifyContent:'center'}}>
                    <div style={{width:'12%',alignSelf:'center',color:'#fff',backgroundColor:'#fff',height:'100%',marginRight:2,justifyContent:'center',display:'flex'}}><h5 style={{alignSelf:'center',color:'#BF1559',fontSize:25}}>{'\u20A6'}</h5></div><input type="text"  value={appDetails.downPayment&appDetails.downPayment} onChange={(e)=>setAppDetails({...appDetails,downPayment:e.target.value})} style={{width:'60%',boxShadow:" 0 0 10px #ccc",border:'1px solid #fff',borderRadius:2,color:'#BF1559',outline:'none',fontSize:25,fontWeight:'bold'}}/>
                </div>
        <button  style={{margin:'0 auto',width:'72%',height:40,borderRadius:20,border:'1px solid #fff',color:'#fff',fontWeight:'600',marginTop:30,background:'transparent'}}>
              Continue
       </button>
        </div>
       </div>
       <div>

       </div>
       <button  onClick={()=>makeRequest()} style={{width:'30%',height:40,borderRadius:20,border:'1px solid #BF1559',color:'#BF1559',fontWeight:'600',marginTop:30,background:'#fff'}}>
              Continue
       </button>
       </div>
       
        </div>
    )
}

export default Chooseyourplan
