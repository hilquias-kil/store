import { Router } from "express";
import cors from "cors";
import * as items from "./items";

const router = Router();

router.use(cors());

router.get("/items", items.list);
router.get("/items/:id", items.detail);

export { router };
