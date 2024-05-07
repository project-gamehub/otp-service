import { customError } from "../errors/errorUtils/index.js";
import OtpService from "../service/otpService.js";
const getOtpData = async (req, res) => {

    const email = req.params.email;

    const otpService = new OtpService();
    const data = await otpService.getOtpData(email);

    return res.status(200).json({
        success: true,
        message: "OTP Data Fetched Successfully",
        data
    });
};

export default getOtpData;
