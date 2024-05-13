import { container } from "../DB/conn.js";

export const getUser =async (req, res) => {
    try {
      const query = {
        query: "select * from user where user.name=@name",
        parameters: [{ name: "@name", value: req.query.name }],
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