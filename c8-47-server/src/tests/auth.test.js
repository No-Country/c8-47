import request from "supertest";
import mongoose from "mongoose";

import { app } from "../app.js";
import { server } from "../../index.js";

const api = request(app);

describe("GET /", () => {
  test("should respond 200", async () => {
    await api.get("/").expect(200);
  });
  console.log("a");
  test("should respond with a text", async () => {
    const response = await api.get("/");

    expect(response.text).toBe("Welcome to c8-47 API");
  });
});

afterAll(() => {
  mongoose.disconnect();
  server.close();
});
