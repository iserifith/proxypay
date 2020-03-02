import { sign } from "jsonwebtoken";
import { User } from "@models/User.model";
import bcrypt from "bcrypt";

export default {
  loginWithEmailAndPassword: async (parent, args, context, info) => {
    const { email, password } = args;
    try {
      const user = await User.findOne({
        email
      });

      if (!user) {
        throw new Error("There is no account associated with this email.");
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password);

      if (!isCorrectPassword) {
        throw new Error("Incorrect password.");
      }

      const accessToken = sign({ id: user.id }, "secret", {
        expiresIn: "30d"
      });
      const refreshToken = sign({ id: user.id }, "secret", {
        expiresIn: "10d"
      });

      return {
        id: user.id,
        accessToken: accessToken,
        refreshToken: refreshToken
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  me: async (parent, args, context, info) => {
    if (!context.req.isAuth) {
      throw new Error("Unauthenticated");
    }

    const user = await User.findById(args.id);
    return user;
  }
};
