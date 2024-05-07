import otpDB from "../models/otpModel.js";

class OtpRepository {
    async create(data) {
        const otpData = await otpDB.create(data);
        return otpData;
    }

    async update(specifierData, dataToUpdate) {
        const newOtpData = await otpDB.findOneAndUpdate(
            specifierData,
            dataToUpdate,
            { new: true }
        );
        return newOtpData;
    }

    async getOtpData(specifierData, getFields = "") {
        const otpData = await otpDB.findOne(specifierData, getFields);
        return otpData;
    }

    async delete(specifierData) {
        await otpDB.deleteOne(specifierData);
    }
}

export default OtpRepository;
