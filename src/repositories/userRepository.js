import userModel from "../db/schemas/userSchema.js";

const userRepository = {
  async create(name, email, password, role) {
    try {
      const user = {
        name,
        email,
        password,
        role,
      };
      return await userModel.create(user);
    } catch (error) {
      console.log(error);
    }
  },
  async getAll() {
    try {
      return await userModel.find({});
    } catch (error) {
      console.log(error);
    }
  },
  async getById(id) {
    try {
      return await userModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  },
  async getByEmail(email) {
    try{
        return userModel.find({email: email})
    }catch(error){
        console.log(error);
    };
  },
  async update(id, name, email, password, role) {
    try {
      const user = {
        name,
        email,
        password,
        role,
      };
      return await userModel.findByIdAndUpdate(id, user);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(id) {
    try{
        return await userModel.findByIdAndDelete(id);
    }catch(error){
        console.log(error);
    }
  },
};

export default userRepository;
