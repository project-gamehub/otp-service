import customError from "../errors/errorUtils/customError.js";
import OtpService from "../service/otpService.js";

const sendOtp = async (req, res) => {
    const email = req.body?.email;
    if (!email) {
        throw new customError(400, "Email is required");
    }

    const otpService = new OtpService();
    await otpService.sendOtp(email);

    return res.status(200).json({
        success: true
    });
};

export default sendOtp;
