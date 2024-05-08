import OtpService from "../service/otpService.js";

const verifyOtp = async (req, res) => {
    const email = req.body?.email;
    const otp = req.body?.otp;
    if (!email || !otp) {
        throw new customError(400, "Email and OTP is required");
    }

    const otpService = new OtpService();
    const isCorrectOtp = await otpService.verifyOtp(email, otp);

    return res.status(200).json({
        success: true,
        isCorrectOtp
    });
};

export default verifyOtp;
