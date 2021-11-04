import React from 'react';
import mayowa_cloth from '../Asset/Image/mayowa_cloth.png';
import mayowa_phone from '../Asset/Image/mayowa_phone.jpg';
function Ordersumary() {
    //\u20A6
    const order=[
        {
      name:"myeesoo p45 pro",
      price:"42,900",
      qty:"1",
      img:mayowa_phone
    },
    {
        name:"Mens long Slevee Shirt",
        price:"6,800",
        qty:"2",
        img:mayowa_cloth,
      }
]
    return (
        <div style={{width:"30%",backgroundColor:'#EEEEEE'}}>
             <h6 style={{textAlign:'left',width:'85%',margin:'auto',height:"5%",color:'#454545',justifyContent:'center',display:'flex',flexDirection:'column',marginTop:40}}> ORDER SUMMARY</h6>
             <div style={{paddingBottom:10, borderRadius:5,width:'85%',margin:'0 auto',maxHeight:"auto",height:'auto',backgroundColor:'#fff',border:"1px solid #fff",boxShadow:" 0 0 15px #ccc",paddingTop:20,marginTop:20}}>
              {order.map((e,i)=>{
                  return(
                    <div key={i} style={{display:'flex',flexDirection:'row',width:'80%',marginLeft:15,marginTop:10,marginBottom:10}}>
                    <div style={{border:'1px solid #E8E8E8',height:70,width:60,padding:5,borderRadius:5,boxShadow:' 0.5px 0.5px 0.5px 0.5px #E8E8E8',justifyContent:'center'}}>
                        <img src={e.img} height={60} width={50} style={{margin:"auto"}}/>
                    </div>
                    <div style={{marginLeft:15,display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <h6 style={{margin:3,color:'#8B8B8B',textAlign:'left',fontSize:12,letterSpacing:1}}>{e.name}</h6>
                        <h6 style={{margin:3,color:'#8B8B8B',textAlign:'left',letterSpacing:1,fontSize:12,}} >{'\u20A6'}{e.price}</h6>
                        <h6 style={{margin:3,color:'#8B8B8B',textAlign:"left",fontSize:12,}}>Qty: {e.qty}</h6>
  
                    </div>
                </div>
                  )
              })}
             </div>
             <div style={{width:'85%',margin:'0 auto',boxShadow:" 0 0 15px #ccc",height:60,marginTop:20,backgroundColor:'#fff',borderRadius:5,flexDirection:'row',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
               <h7 style={{margin:5,marginLeft:15}}>Total Cost value</h7><h6 style={{margin:5,marginRight:15}}>{'\u20A6'}52,100</h6>
             </div>
        </div>
    )
}

export default Ordersumary
