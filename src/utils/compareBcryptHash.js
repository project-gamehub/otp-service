import bcrypt from "bcrypt";

const compareBcryptHash = (userInputPass, encryptedPass) => {
    return bcrypt.compareSync(String(userInputPass), encryptedPass);
};
export default compareBcryptHash;
