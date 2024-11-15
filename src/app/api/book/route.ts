import { NextResponse } from "next/server";

const books =  [
    {id:1, title:"Harry Potter", author:"J.K Rowling", available:true },
    {id:2, title:"Raja Gidh", author:"Bano Qudsia", available:true },
    {id:3, title:"Bange Dara", author:"Allama Iqbal", available:true },
    {id:4, title:"Mushaf", author:"Umaira Ahmed", available:true },

]
export async function GET(){
    try{
        return NextResponse.json(books, {status:200})

    } catch(error){
        return NextResponse.json(
            {
                message: "Error fetching books"},
                 {status:500}
        )
    }
}


