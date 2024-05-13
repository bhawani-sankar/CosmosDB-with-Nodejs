import { container } from "../DB/conn.js";

export const userDelete =async (req, res) => {
    try {
      const id = req.body.id;
      const result= await container.item(id).delete()
      if(result.resource == null){
          res.status(204).json({message:"successfully deleted"})
      }
    } catch (error) {
      res.status(400).json({ message: "bad request" });
    }
  }