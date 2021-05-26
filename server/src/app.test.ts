import request from "supertest";
import { app } from "./app";

describe("App requests", () => {
  it("should get a json with the author and items property", async () => {
    const res = await request(app).get("/api/items");
    expect(res.body).toHaveProperty("author");
    expect(res.body).toHaveProperty("items");
  });

  it("should get 4 items in the payload when sending a term", async () => {
    const res = await request(app).get("/api/items?q=iphone");
    expect(res.body.items).toHaveLength(4);
  });

  it("should get a json with the author and items property when product detail", async () => {
    const res = await request(app).get("/api/items/MLA921510488");
    expect(res.body).toHaveProperty("author");
    expect(res.body).toHaveProperty("item");
  });

  it("should send 404 with a non-existent url", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error");
  });
});
