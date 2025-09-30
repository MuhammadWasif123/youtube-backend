import mongoose,{Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, // user is subscribing
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId, // user owns the channel
        ref:"User"
    }
},{timestamps:true})



export const Subscription = mongoose.model("Subscription",subscriptionSchema)
