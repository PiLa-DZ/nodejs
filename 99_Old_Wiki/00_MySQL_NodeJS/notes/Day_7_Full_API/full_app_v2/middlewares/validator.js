import db from "../db.js";
export const validateId = (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID must be a valid number" });
  }
  next();
};

export const validateMissingFields = (req, res, next) => {
  const { first_name, last_name, age, skill } = req.body;
  if (!first_name || !last_name || !age || !skill) {
    return res.status(400).json({
      message:
        "ERROR: Missing fields. Required: (first_name, last_name, age, skill)",
    });
  }
  next();
};

export const validateBodyNotEmpty = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "ERROR body must be not empty" });
  }
  next();
};

export const validateIdNotFound = async (req, res, next) => {
  const id = Number(req.params.id);
  const [findHunter] = await db.query("SELECT * FROM hunters WHERE id = ?", [
    id,
  ]);
  if (findHunter.length === 0) {
    return res
      .status(404)
      .json({ message: `ERROR: Hunter with id ${id} not found` });
  }
  next();
};
