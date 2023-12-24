import userRepository from "../repositories/userRepository.js";
import utils from "../utils/utils.js";

const usersService = {
  async create(name, email, password, role) {
    try {
        const hashedPassword = await utils.hashPassword(password);
        return await userRepository.create(name, email, hashedPassword, role);
    } catch (error) {
      console.log(error);
    }
  },
  async getAll() {
    try {
      return await userRepository.getAll();
    } catch (error) {
      console.log(error);
    }
  },
  async getById(id) {
    try {
      return await userRepository.getById(id);
    } catch (error) {
      console.log(error);
    }
  },
  async getByEmail(email) {
    try {
      return await userRepository.getByEmail(email);
    } catch (error) {
      console.log(error);
    }
  },
  async update(id, name, email, password, role) {
    try {
      return await userRepository.update(id, name, email, password, role);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(id) {
    try {
      return await userRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  },
};

export default usersService;
