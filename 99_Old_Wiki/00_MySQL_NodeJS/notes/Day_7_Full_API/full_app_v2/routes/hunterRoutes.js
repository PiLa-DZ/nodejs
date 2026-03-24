// routes/hunterRoutes.js
import express from "express";
import db from "../db.js";
import {
  validateId,
  validateMissingFields,
  validateBodyNotEmpty,
  validateIdNotFound,
} from "../middlewares/validator.js";
import {
  readOneHunter,
  createOneHunter,
  searchNameMinMaxAge,
  updateOneHunter,
  deleteOneHunter,
  apiInfo,
} from "../controlles/hunterControlles.js";

const router = express.Router();

/* === READ ============================================= */
router.get("/one/:id", validateId, readOneHunter);

/* === CREATE =========================================== */
router.post(
  "/create",
  validateBodyNotEmpty,
  validateMissingFields,
  createOneHunter,
);

/* === SEARCH =========================================== */
router.get("/search", searchNameMinMaxAge);

/* === UPDATE =========================================== */
router.put(
  "/update/:id",
  validateBodyNotEmpty,
  validateId,
  validateIdNotFound,
  updateOneHunter,
);

/* === DELETE =========================================== */
router.delete("/delete/:id", validateId, validateIdNotFound, deleteOneHunter);

/* === API Documentation Info =========================== */
router.get("/end", apiInfo);

export default router;
