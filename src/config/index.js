import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGOOSE_URL = process.env.MONGOOSE_URL;
const MAILING_SERVICE_URL = process.env.MAILING_SERVICE_URL;

export { MONGOOSE_URL, PORT, MAILING_SERVICE_URL };
