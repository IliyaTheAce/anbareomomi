import { ConnectToDataBase } from "@/Libs/Mongoose";
import User from "@/Libs/Models/UserSchema";

export default async function Test() {
  try {
    await ConnectToDataBase();

    const usr = new User({
      phoneNumber: "09112079676",
      email: "i2007f2007@gmail.com",
      password: "I2007f2007@",
    });
    usr.save();
  } catch (e: any) {
    console.log(e.message);
  }
}
