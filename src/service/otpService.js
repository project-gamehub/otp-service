import { customError } from "../errors/errorUtils/index.js";
import axios from "axios";
import OtpRepository from "../repository/otpRepository.js";
import {
    compareBcryptHash,
    hashUsingBcrypt,
    randomOtpGenerator
} from "../utils/index.js";
import { MAILING_SERVICE_URL } from "../config/index.js";

class OtpService {
    constructor() {
        this.otpRepository = new OtpRepository();
    }

    async getOtpData(email) {
        return await this.otpRepository.getOtpData({ email });
    }

    async sendOtp(email) {
        // Else Generate a 4 digit OTP
        const otp = randomOtpGenerator();

        // encrypt the otp
        const encryptedOTP = hashUsingBcrypt(otp);

        // Store otp in DB
        this.otpRepository.create({
            email,
            otp: encryptedOTP
        });

        // send the mail with original OTP
        // resetPasswordMailSender(email, otp);
        try {
            axios.post(MAILING_SERVICE_URL + "/send-reset-pass-mail", {
                email,
                otp
            });
        } catch (error) {
            console.error("Error Sending Mail");
        }

        return "OTP requested successfully";
    }

    async resendOtp(email) {
        // Else generate new otp
        const otp = randomOtpGenerator();

        // encrypt the otp
        const encryptedOTP = hashUsingBcrypt(otp);

        // requestAttempts++, lastRequestedTime = currTime, update encryptedOTP
        const user = await this.otpRepository.getOtpData({ email });
        await this.otpRepository.update(
            { email },
            {
                requestAttempts: user?.requestAttempts + 1,
                lastRequestedTime: Date.now(),
                otp: encryptedOTP
            }
        );

        // send the mail with decrypted OTP
        try {
            axios.post(MAILING_SERVICE_URL + "/send-reset-pass-mail", {
                email,
                otp
            });
        } catch (error) {
            console.error("Error Sending Mail");
        }

        return "OTP resent successfully";
    }

    async verifyOtp(email, otp) {
        // verifyAttempts++
        const user = await this.otpRepository.getOtpData({ email });
        await this.otpRepository.update(
            { email },
            { verifyAttempts: user?.verifyAttempts + 1 }
        );

        // verify the otp
        const isCorrectOtp = compareBcryptHash(otp, user?.otp);
        // If wrong OTP, throw error
        if (!isCorrectOtp) {
            throw new customError(400, "Wrong OTP, please try again");
        }

        return "Correct OTP";
    }
}

export default OtpService;
