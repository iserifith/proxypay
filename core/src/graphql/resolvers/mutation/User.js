import { User } from "@models/User.model";
import bcrypt from "bcrypt";

export default {
  createUserWithEmailAndPassword: async (parent, args, context, info) => {
    const { email, password } = args;

    try {
      const userExisted = await User.findOne({
        email
      });

      if (userExisted) {
        return {
          message:
            "Account with associated the email already registered. Please log in."
        };
      }

      const salt = await bcrypt.genSalt(10);
      const newUser = new User({
        email,
        password
      });
      newUser.password = await bcrypt.hash(newUser.password, salt);
      await newUser.save();

      return {
        message:
          "Account created. Please check your email to verifiy your account."
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
