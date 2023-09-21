import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: { type: String },
});

// With NextJS the routes are serverless and are spun up with called.  So we want to first check and see if the model exists, if so, then we use that, otherwise we create a new user.  this route is called from scratch each time.
const User = models.User || model("User", userSchema);

export default User;
