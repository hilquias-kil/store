import { Router } from "express";
import * as items from "./items";

const router = Router()

router.get('/items', items.list);
//router.get('/items/:id', );

export { router }