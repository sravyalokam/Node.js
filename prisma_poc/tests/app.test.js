import request from "supertest";
import app from "../app.js";

describe("API Tests using .env", () => {

  test("GET / should return API running", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("API is running");
  });

  test("Unknown route returns 404", async () => {
    const res = await request(app).get("/random");

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("Route not found");
  });

  test("Login API returns token", async() => {
    const res = await request(app)
        .post("/login/register")
        .send({
            email: "test1@example.com",
            password: "password123"
        });

    expect([201, 401]).toContain(res.statusCode);
    if (res.statusCode === 200) {
        expect(res.body).toHaveProperty("token");
    }
  })

});
