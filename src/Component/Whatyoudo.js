import mayowa_wyd1 from '../Asset/Image/mayowa_wyd1.jpg';
import mayow_wyd3 from '../Asset/Image/mayow_wyd3.jpg';
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
            <div style={{border:'1px solid black',width:'80%',margin:'0 auto',marginTop:50,height:200}}>
                <form>
                <h4 style={{color:'#BF1559',margin:0,textAlign:'left',fontWeight:'500'}}>How much do you earn monthly?</h4>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Whatyoudo
