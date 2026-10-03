"use client"



import { useState } from "react"



export default function SYEED(){

const Ads="https://auctionr.org/4/bdd91fddd6fb80fc988d5762f7a9a74d"



const [AdsLinks1,setAdsLinks1]=useState(false)

const adsOpen=(e)=>{

    if(!AdsLinks1){

    e.preventDefault()



window.open(Ads,"_blank")
  setAdsLinks1(true)


    }




}



return(

<div>

<div className="w-full justify-center items-center mt-5">

<img



className="justify-center border-5 border-r-fuchsia-700 border-solid items-center ml-36 rounded-2xl w-65"

src="https://tse2.mm.bing.net/th/id/OIP.zwoXcArYIRbvnvML_HzqCgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"





alt="sumaiya-saeed"/>

<h1 className="ml-38">Helllow buddy</h1>

</div>

<div>

<div onClick={adsOpen}>

   <iframe width="600" height="480" src="https://playmogo.com/e/1bn600u5vy9x" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>


</div>





</div>















</div>)





}