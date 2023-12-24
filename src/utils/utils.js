import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    const hashedPasword = await bcrypt.hash(password, 10);
    return hashedPasword;
};

const comparePassword = async (password, hash) => {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
};

export default {
    hashPassword,
    comparePassword
};