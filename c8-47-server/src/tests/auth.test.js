import request from "supertest";
import mongoose from "mongoose";

import { app } from "../app.js";
import { server } from "../../index.js";
import User from "../models/User.js";

const api = request(app);

const newUser = {
  email: "new@user.com",
  password: "contraseña",
  repeat_password: "contraseña",
  first_name: "new user",
  last_name: "created",
};

describe("/auth", () => {
  describe("/signup", () => {
    test("POST should create a new user", async () => {
      await api
        .post("/auth/signup")
        .send(newUser)
        .expect(201)
        .expect("Content-Type", /application\/json/);

      const allUsersAfter = await User.find({});
      expect(allUsersAfter).toHaveLength(1);

      const userFound = allUsersAfter.find(
        (user) => user.email === newUser.email
      );

      console.log("userFound", userFound);
      expect(userFound.first_name).toBe("new user");
    });

    // test("POST shouldn't create a user with an email already in use", async () => {});
    // test("POST shouldn't create a user without email", async () => {});
  });
  // test("/login should login with an existent user", async () => {});
  // test("/login should respond with user token", async () => {});
  // test("/login shouldn't login with wrong email", async () => {});
  // test("/login shouldn't login with wrong password", async () => {});
});

afterAll(async () => {
  await User.deleteMany();
  mongoose.disconnect();
  server.close();
});
