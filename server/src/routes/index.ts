import { Router } from "express";
import cors from "cors";
import * as items from "./items";

const router = Router();

router.use(cors());

router.get("/api/items", items.list);
router.get("/api/items/:id", items.detail);

export { router };
