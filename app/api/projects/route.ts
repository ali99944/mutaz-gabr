import { cloudinary } from "@/src/utils/cloudinary.config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
  
        const fileBuffer = await file.arrayBuffer();
        
  
        const res = await cloudinary.uploader.upload_stream({
          resource_type: "image",
          folder: 'moataz-gabr-projects',
        }, (error, result) => {
          if (error) {
            console.error(error);
          }

          if (result) {
            console.log(result);
          }
        }).end(Buffer.from(fileBuffer));
  
        if (res) {
           return NextResponse.json({ 
              message: "success", imgUrl: 'works'
           }); 
         } else return NextResponse.json({ message: "failure" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "error" }, { status: 500 });
    }
  }
