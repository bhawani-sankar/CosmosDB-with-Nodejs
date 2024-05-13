import { container } from "../DB/conn.js";

export const userRegister =async (req, res) => {
    try {
      const payload = req.body;
      const result = await container.items.create(payload);
      if (result.resource != "") {
        res.status(201).json({ result: result.resource });
      } else {
        res.status(400).json({ message: "user not created" });
      }
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  }