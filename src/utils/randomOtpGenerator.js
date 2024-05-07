const randomOtpGenerator = () => {
    return Math.floor(Math.random() * (9999 - 1001 + 1)) + 1001;
};

export default randomOtpGenerator;
