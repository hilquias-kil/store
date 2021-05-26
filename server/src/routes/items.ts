import { Request, Response } from "express";
import getItems from "../api/getItems";
import getItemsDetail from "../api/getItemsDetail";

export async function list(req: Request, res: Response) {
  const search: string = req.query.q as string;
  const data = await getItems(search);
  return res.json(data);
}

export async function detail(req: Request, res: Response) {
  const id = req.params.id;
  const data = await getItemsDetail(id);
  return res.json(data);
}
