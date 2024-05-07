import { SALTROUNDS } from "../config/index.js";
import bcrypt from "bcrypt";

const hashUsingBcrypt = (dataToHash) => {
    return bcrypt.hashSync(toString(dataToHash), parseInt(SALTROUNDS));
};

export default hashUsingBcrypt;
