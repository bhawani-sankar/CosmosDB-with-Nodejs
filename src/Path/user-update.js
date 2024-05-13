import { container } from "../DB/conn.js";

export const userUpdate =async (req, res) => {
    try {
      const { id, age, name, city } = req.body;
      const user = await container.item(id).read();
      if (age !== undefined) {
        user.resource.age = age;
      }
      if (name !== undefined) {
        user.resource.name = name;
      }
      if (city !== undefined) {
        user.resource.city = city;
      }
      const result = await container.item(id).replace(user.resource);
      if (result.resource != "") {
        res.status(201).json({ result: result.resource });
      } else {
        res.status(400).json({ message: "user not updated" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "bad request" });
    }
  }