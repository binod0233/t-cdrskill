import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Ouragents = () => {
  const dataList=[
    {image:"/images/MeetOurAdvisors/male-1.png",title:`Anya Pathak`, data:`Talk with Nishan`,phone:"61481615807"},
    {image:`/images/MeetOurAdvisors/sarala.png`,title:`Sansha Pandey`, data:`Talk with Sarala`,phone:"61481612927"},
    {image:`images/MeetOurAdvisors/roshan.png`,title:`Sameer Thapa`, data:`Talk with Roshan`,phone:"61481615194"},
    {image:`images/MeetOurAdvisors/roshan.png`,title:`Janvi Rai`, data:`Talk with Roshan`,phone:"61481612162"}]
  return (
    <div>
       {/* <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1 style={{fontFamily:"Arial",fontSize:"34px",textAlign:'center', fontWeight:"700"}}>OOPS THIS PAGE IS </h1>
        <h1 style={{fontFamily:"Arial",fontSize:"34px",textAlign:'center',color:"#360b62 ", fontWeight:"700"}}> UNDER CONSTRUCTION</h1>
        <p style={{textAlign:'center',}}>Sorry for the inconvenience. This Page will be avaiable Soon</p>
        <img src="/images/comming-soon.png" alt="under construction" className='img-fluid'/>
      </div> */}
      <Container className="p-5">
        <h1 style={{color:" #203546",fontFamily:"Century Gothic",fontWeight:"700",textAlign:"center"}}>
          Our Agents
</h1>
<p style={{color:"#666",fontFamily:"Asap", fontWeight:"400",textAlign:"center",paddingTop:"20px"}} className="pb-5"> Meet our Agents who has Experienced  CDR Writing  Experience
 </p>

        <Row>
          {dataList.map((d,index)=>

<Col md={3} className="py-5" key={index}>
<div style={{borderTop:"10px solid #017CC9",backgroundColor:"#FDFDFD"}} className="d-flex flex-column justify-content-center align-items-center p-4">
   <img src={d.image} alt="agents"/>
  
   <h3 style={{fontFamily:"Asap",fontWeight:"700",color:"#000"}}className="pt-4">{d.title} </h3>
   <p style={{color:"#666666",fontFamily:"Asap"}}>CDR Agent</p>
   {/* <div className="d-flex flex-row pe-2">
  <div className='px-2'> <i class="fa fa-facebook" aria-hidden="true" style={{color:"#3B5998"}}></i></div>
  <div > <i class="fa-brands fa-twitter"></i> </div>
  <div className='px-2'><i class="fa fa-linkedin" aria-hidden="true" style={{color:"#3B5998"}}></i></div>
  <div className="pb-3"><i class="fa-brands fa-instagram"></i></div>
   </div> */}


   <div style={{backgroundColor:"#38A559", borderRadius:"20px",  }} className="p-3" >
     <a href={`https://api.whatsapp.com/send?phone=${d.phone}`} style={{color:'white',textDecoration:'none'}}>
     <h4 style={{color:"#FFF",fontFamily:"Arial",fontWeight:"700"}}><i class="fa fa-whatsapp" aria-hidden="true" style={{color:"#fff"}} ></i> {d.data}</h4>

     </a>
   </div>

</div>

</Col>



          )}
          
        </Row>
      </Container>
    </div>
  )
}

export default Ouragents