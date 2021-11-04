import mayowa_shopper from '../Asset/Image/mayowa_shopper.jpg';
import {FaArrowLeft} from "react-icons/fa";
import payQart from '../Asset/Image/payQart.png';
export default function Sidebar() {
    const message=["Get pre-approved instantly","Spread payment for up to six months","Provide some basic information to get started"]
    return (
        
        <div style={{width:'30%',height:'100%',backgroundImage:`url(${mayowa_shopper})`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <div style={{backgroundColor:`rgba(191, 21, 89,0.8)`,height:'100%',justifyContent:'space-between',display:'flex',flexDirection:'column'}}>
               <div style={{height:'18%',paddingLeft:30, display:'flex',flexDirection:'row',width:'80%',margin:'auto 0'}}><i style={{color:'#fff'}}><FaArrowLeft/> </i><h5 style={{margin:0,color:'#fff',paddingLeft:5}}>Back To Store</h5></div>
            <div style={{height:'40%',display:'flex',justifyContent:'center'}}>
            <div style={{alignSelf:'center'}}>
              <img alt="Shop logo" style={{height:80,width:'95%'}}
                src={payQart}
              />
              <h6 style={{margin:0,color:'#fff',letterSpacing:2,textAlign:'center'}}>You shop, we pay</h6>
            </div> 
            </div>
            <div style={{height:'30%',display:'flex',alignItems:'flex-end'}}>
            <ul style={{color:'#fff',fontWeight:'500'}}>
                    {message.map((e,i)=>{
                        return(
                            <li key={i} style={{textAlign:'left'}}>{e}
                                </li>
                        )
                    })}
                </ul>
            </div>
            </div>
        </div>
    )
}
