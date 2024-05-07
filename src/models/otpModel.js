import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        otp: {
            type: String,
            required: true
        },
        requestedAt: {
            type: Date,
            default: Date.now
        },
        requestAttempts: {
            type: Number,
            default: 1
        },
        verifyAttempts: {
            type: Number,
            default: 1
        },
        lastRequestedTime: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

otpSchema.index({ requestedAt: 1 }, { expireAfterSeconds: 3600 });

const otpDB = mongoose.model("otpDB", otpSchema);

export default otpDB;
