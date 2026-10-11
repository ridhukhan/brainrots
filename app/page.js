
"use client"

import { useState } from "react";
import { CgAddR } from "react-icons/cg";
import { ImCross } from "react-icons/im";
export default function Home() {


  const [show,setShow]=useState(false)
const [name,setName]=useState("")
const [biboron,setBiboron]=useState("")
const [price,setPrice]=useState(0)
const [image, setImage] = useState(null);

  const popUp = (e)=>{
    e.preventDefault()
    setShow(true)
  }
  const cross=(e)=>{
    e.preventDefault()
    setShow(false)
  }

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "samirstore"); // Cloudinary Unsigned Preset Name

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/sjzfqz1a/image/upload", // Cloudinary Cloud Name
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error("Cloudinary image upload failed");
    }

    const data = await res.json();
    return data.secure_url; // Cloudinary থেকে ছবির সরাসরি URL পাবে
  };

  const handleSubmite = async (e)=>{
    e.preventDefault()
    const imageUrl = await uploadToCloudinary(image);
    const data={
  name,
  biboron,
  price,
image:imageUrl
}

    const res =await fetch("/api/product",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(data)
    })

    if(res.ok){
      alert("sucess uploading")
      setShow(false)
    }
  }
  return (
   <div className="bg-pink-100">

<nav className="justify-center text-center p-5">

<h className="font-bold text-3xl">samir store</h>
</nav>
<hr/>
<div className="flex text-4xl justify-center gap-33">
  <div className="flex flex-col justify-center">
<CgAddR className="ml-17" onClick={popUp}/>
<p>upload Post</p>
  </div>

  <div>
<CgAddR className="ml-17" />
<p>Create order</p>

  </div>
</div>

{show && <div  className="bg-pink-500 mx-6  overflow-scroll max-h-120 min-h-60 justify-center w-300px h-auto z-[1000] border border-2 border-solid border-black">

<ImCross  className="justify-center ml-55 z-[1000] fixed text-red-600 font-bold text-2xl" onClick={cross}/>

<form  className="mt-20 ml-10 flex flex-col gap-5 w-100"
onSubmit={handleSubmite}
>

<label className="font-bold">আপনার প্রোডাক্ট এর নাম লিখুনঃ</label>
<input 

type="text"
value={name}
onChange={(e)=>setName(e.target.value)}
className="p-5 bg-yellow-600 rounded-2xl justify-center"/>
<label className="font-bold"> প্রোডাক্ট এর বিবরণ লিখুনঃ</label>

<input type="text"
value={biboron}
onChange={(e)=>setBiboron(e.target.value)}
className="p-5 bg-yellow-600 rounded-2xl justify-center"/>
<label className="font-bold"> প্রোডাক্ট এর দাম লিখুনঃ</label>

<input type="number"
value={price}
onChange={(e)=>setPrice(e.target.value)}
className="p-5 bg-yellow-600 rounded-2xl justify-center"/>
<label className="font-bold"> upload img</label>
<input type="file"
accept="image/*"

onChange={(e) => setImage(e.target.files[0])}
 className="p-2 bg-white rounded-lg"
/>

<button 
type="submit"
className="bg-red-700 p-4 mx-35 rounded">upload</button>
</form>


</div>}



   </div>
  );
}
