import { ConnectDB } from "@/utils/DB/ConnectDB";
import Task from "@/utils/models/Task";
import User from "@/utils/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        // Connect to the database
        await ConnectDB();

        // Parse the request body
        const body = await req.json();
        const { id, username, title, description, Date, isCompleted, isImportant } = body;

        // Find user by clerkId
        let FindUser = await User.findOne({ clerkId: id });
        console.log('find user', FindUser);

        // If user not found, create a new user
        if (!FindUser) {
            const UserCreated = await User.create({
                clerkId: id,
                username
            });
            await UserCreated.save();
            FindUser = UserCreated;
        }

        console.log('user id:', FindUser._id);

        // Create a new task
        const TaskCreated = await Task.create({
            UserId: FindUser._id, // Use the ObjectId of the user
            title,
            description,
            Date,
            isCompleted,
            isImportant
        });
        await TaskCreated.save();

        // Return success response
        return NextResponse.json("Create Success", { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json("Something went wrong", { status: 500 });
    }
}
