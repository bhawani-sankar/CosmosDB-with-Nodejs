import { container } from "../DB/conn.js";

export const getUsers =async (req, res) => {
    try {
      const query = {
        query: "select * from user",
      };
      const result = await container.items.query(query).fetchAll();
      if (result.resources != "") {
        res.status(200).json({ result: result.resources });
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  }