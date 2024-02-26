import UserModel from "../models/User";
import { connectToDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (id: string | number, first_name: string, last_name: string, image_url: string, email_addresses: any, username: string) => {

    try {
        await connectToDB();

        const user = await UserModel.create(

            {clerkId: id},


            {
                $set:
                    {
                        firstName: first_name,
                        lastName: last_name,
                        username: username,
                        email: email_addresses[0].email_address,
                        profilePic: image_url
                    }
            }, 
            {upsert: true, new: true}
        );

        return
       
    }catch(error) {
        console.error(error);
    }


}