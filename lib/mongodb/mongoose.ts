import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {

    mongoose.set("strictQuery", true);

    if(isConnected) {
        console.log("MongoDB is already connected");
        return
    }



    try {
        await mongoose.connect(process.env.MONGODB_DB_UR as string, {
            dbName: "Projekt 1"
        });

        isConnected = true;

        console.log("MongoDB is connected");
    }catch(e: any){
        console.log("error connect to database: ", e.message);
    }

}