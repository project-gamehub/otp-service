import express from "express";
import { asyncErrorHandler } from "../errors/errorUtils/index.js";
import errorMiddleware from "../errors/errorMiddlewares/errorMiddleware.js";
import { getOtpData, resendOtp, sendOtp } from "../controllers/index.js";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.send({ pong: "Hello World!" });
});

router.post("/send-otp", asyncErrorHandler(sendOtp));
router.post("/resend-otp", asyncErrorHandler(resendOtp));
router.get("/get-otp-data", asyncErrorHandler(getOtpData));

router.use(errorMiddleware);

export default router;
