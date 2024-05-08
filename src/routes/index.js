import express from "express";
import { asyncErrorHandler } from "../errors/errorUtils/index.js";
import errorMiddleware from "../errors/errorMiddlewares/errorMiddleware.js";
import {
    deleteOtpData,
    getOtpData,
    resendOtp,
    sendOtp,
    verifyOtp
} from "../controllers/index.js";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.send({ pong: "Hello World!" });
});

router.post("/send-otp", asyncErrorHandler(sendOtp));
router.post("/resend-otp", asyncErrorHandler(resendOtp));
router.post("/verify-otp", asyncErrorHandler(verifyOtp));
router.get("/get-otp-data/:email", asyncErrorHandler(getOtpData));
router.delete("/delete-otp-data/:email", asyncErrorHandler(deleteOtpData));

router.use(errorMiddleware);

export default router;
