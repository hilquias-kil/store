import { Request, Response } from "express";

export function list(req: Request, res: Response) {
  return res.json([]);
}