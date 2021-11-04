function Chooseyourplan() {
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
            numb:3,
            color:'#6752FE'
        },
        {
            name:'Mikel',
            numb:3,
            color:'#FD4DF1'
        },
        {
            name:'Grafti',
            numb:3,
            color:'#F56A98'
        },
    ]

     const name1=["Shopping credit","Down payment","Monthly Installment","Tenure"];
     const name2=["45,000","21,000","25,000"];
    return (
        <div style={{margin:5}}>
            <div>
            <h3 style={{color:'#BF1559'}}>Choose Your Plan?</h3>
            <div style={{height:300,display:'flex',flexDirection:'row'}}>

             <div style={{ marginTop:5,height:'50%',width:'16%',borderRadius:5,backgroundImage:' linear-gradient(to top right, #720057, #DF015E)',boxShadow:" 0 0 20px #ccc"}}>
             <div style={{borderTopRightRadius:5,borderTopLeftRadius:5}}></div>
                 <h5 color={{color:'#fff',margin:5}}>Argentina</h5>
                 <h1 color={{color:'#fff',fontWeight:'bold'}}>1</h1>
                 <h5 color={{color:'#fff'}}>Month</h5>
             </div>
              {card.map((e,i)=>{
                  return(
                <div key={i} style={{marginLeft:5,marginTop:5,width:'16%',borderRadius:5,boxShadow:" 0 0 20px #ccc",height:'50%'}}>
                 <div style={{height:15,backgroundColor:`${e.color}`,borderTopRightRadius:5,borderTopLeftRadius:5}}></div>
                 <h5 style={{color:'#BF1559',margin:5}}>{e.name}</h5>
                 <h1 style={{color:'#BF1559',margin:5,fontWeight:'bold'}}>{e.numb}</h1>
                 <h5 style={{color:'#BF1559',margin:5}}>Month</h5>
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
        <div style={{width:'25%'}}>
            {name2.map((e,i)=>{
                return(
             <h4 key={i} style={{color:'#BF1559',textAlign:'left',fontWeight:'bold',paddingLeft:10}}>{'\u20A6'}{e}</h4>
                )
            })}
              <h5 style={{color:'#BF1559',textAlign:'left',fontWeight:'bold'}}>1 Month</h5>
        </div>
        <div style={{ height:'100%',width:'50%',borderRadius:8,backgroundImage:' linear-gradient(to top right, #720057, #DF015E)',boxShadow:" 0 0 20px #ccc"}}>
          
        </div>
       </div>
       <div>

       </div>
       <button style={{width:'30%',height:40,borderRadius:20,border:'1px solid #BF1559',color:'#BF1559',fontWeight:'600',marginTop:30,background:'#fff'}}>
                           Continue
       </button>
       </div>
       
        </div>
    )
}

export default Chooseyourplan
