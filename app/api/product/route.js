import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import products from "@/models/products";

export async function POST(req){

try {
await dbConnect()
   const body=await req.json() 
   const newProduct=await products.create(body)
   return NextResponse.json({
    success:true,
    products:newProduct
   },{status:201})
} catch (error) {
    return NextResponse.json({
    success:false,
    message:error.message
   },{status:400}) 
}

}

export async function GET(){

    try {
        await dbConnect()

        const product= await products.find({}).sort({createdAt:-1})
   
   return NextResponse.json({ success: true, product }, { status: 200 });
    } catch (error) {
   return NextResponse.json({ success: false, message:error.message }, { status: 400 });
        
    }
}