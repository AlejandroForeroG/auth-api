//1. importat supertest
import request from "supertest";
import App from "./App";

//Cada describe genrra un bloque de pruebas
describe("Test Get / ", () => {
  let app: App;

  beforeAll(() => {
    app = new App();
    app.start();
  });
  afterAll(() => {
    app.close();
  });

  test("Test Get / ", async () => {
    const response = await request(app.app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Bienvenidos a la ips atenea");
  });
});
