import mayowa_shopper from '../Asset/Image/mayowa_shopper.jpg';
import {FaArrowLeft} from "react-icons/fa";
import payQart from '../Asset/Image/payQart.png';
export default function Sidebar() {
    const message=["Get pre-approved instantly","Spread payment for up to six months","Provide some basic information to get started"]
    return (
        
        <div style={{border:"1px solid black",width:'30%',height:'100%',backgroundImage:`url(${mayowa_shopper})`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <div style={{backgroundColor:`rgba(191, 21, 89,0.8)`,height:'100%'}}>
               <div style={{display:'flex',flexDirection:'row'}}><i style={{color:'#fff'}}><FaArrowLeft/></i><h5 style={{margin:0,color:'#fff'}}>Back To Store</h5></div>
            <div>
            <div>
              <img alt="Shop logo" style={{height:50,width:'50%'}}
                src={payQart}
              />
              <h6 style={{margin:0,color:'#fff'}}>You shop, we pay</h6>
            </div> 
            </div>
            <div>
            <ul style={{color:'#fff'}}>
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
