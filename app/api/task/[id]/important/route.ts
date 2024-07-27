import { ConnectDB } from "@/utils/DB/ConnectDB";
import Task from "@/utils/models/Task";
import User from "@/utils/models/User";
import { NextResponse } from "next/server";

export async function GET(params: string) {
    try {
        // Connect to the database
        await ConnectDB();
        const user = await User.findOne({clerkId: 'user_2jj8XT3kQxf1Izjv0E7cSG96NT1'})
        if(!user) return NextResponse.json("Cannot find user",{status:401})

        const taskUser = await Task.find({UserId: user._id})

        if(!taskUser) return NextResponse.json("Cannot find task of this user",{status:401})
        const data = taskUser.filter(item=>item.isImportant === true)
        return NextResponse.json(data,{status:200})
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json("Something went wrong", { status: 500 });
    }
}
