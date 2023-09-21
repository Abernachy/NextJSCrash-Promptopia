import { Schema, model, models } from "mongoose";
//Create the schema for our prompt
const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

//Save it as a new prompt if it doesnt exist
const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
