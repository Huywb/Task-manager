import { ConnectDB } from "@/utils/DB/ConnectDB";
import Task from "@/utils/models/Task";
import User from "@/utils/models/User";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";



export async function GET(req:NextApiRequest,{ params }: { params: { id: string } } ) {
    try {
        // Connect to the database
        await ConnectDB();
        const id = params.id
        console.log('taskid',id)
        const user = await User.findOne({clerkId: id})
        if(!user) return NextResponse.json("Cannot find user",{status:401})

        const taskUser = await Task.find({UserId: user._id})

        if(!taskUser) return NextResponse.json("Cannot find task of this user",{status:401})
        return NextResponse.json(taskUser,{status:200})
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json("Something went wrong", { status: 500 });
    }
}
