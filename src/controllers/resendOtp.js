import OtpService from "../service/otpService.js";

const resendOtp = async (req, res) => {
    const email = req.body?.email;
    if (!email) {
        throw new customError(400, "Email is required");
    }

    const otpService = new OtpService();
    await otpService.resendOtp(email);

    return res.status(200).json({
        success: true
    });
};

export default resendOtp;
