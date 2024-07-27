import { ConnectDB } from "@/utils/DB/ConnectDB";
import Task from "@/utils/models/Task";
import User from "@/utils/models/User";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export async function DELETE(req: Request,{ params }: { params: { id: string } }) {
    try {
        // Connect to the database
        await ConnectDB();
        const id = params.id
        const taskUser = await Task.findByIdAndDelete({_id: id})

        if(!taskUser) return NextResponse.json("Cannot find task of this user",{status:401})
        return NextResponse.json(taskUser,{status:200})
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json("Something went wrong", { status: 500 });
    }
}
export async function GET(req: NextApiRequest,{ params }: { params: { id: string } }) {
    try {
        // Connect to the database
        await ConnectDB();  
        const id = params.id
        const data = await Task.findById({_id: id})
        if(!data) return NextResponse.json('Cannot find this Task',{status:401})
        return NextResponse.json(data,{status:200})

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json("Something went wrong", { status: 500 });
    }
}
export async function PATCH(req: Request,{ params }: { params: { id: string } }) {
    try {
        await ConnectDB();  
        const id = params.id
        const body = await req.json();
        const { title, description, Date, isCompleted, isImportant } = body;
        
        const data = await Task.findByIdAndUpdate({_id:id},{
            title,
            description,
            Date,
            isCompleted,
            isImportant
        },{new:true})
        console.log('data',data)
        if(!data) return NextResponse.json('Cannot find this Task',{status:401})
        return NextResponse.json(data,{status:200})
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json("Something went wrong", { status: 500 });
    }
}
