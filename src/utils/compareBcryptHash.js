import bcrypt from "bcrypt";

const compareBcryptHash = (userInputPass, encryptedPass) => {
    return bcrypt.compareSync(toString(userInputPass), encryptedPass);
};
export default compareBcryptHash;
