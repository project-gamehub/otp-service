import OtpService from "../service/otpService.js";
const deleteOtpData = async (req, res) => {
    const email = req.params.email;

    const otpService = new OtpService();
    otpService.deleteOtpData(email);

    return res.status(200).json({
        success: true,
        message: "OTP Data will be deleted"
    });
};

export default deleteOtpData;
