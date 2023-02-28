import fastify from "fastify";

const app = fastify();

app.listen({ port: 4646, host: "127.0.0.1" }, () => {
  // Affiche un message dans la console nous indiquant que le serveur est démarré
  console.log("Le serveur http est prêt sur l'address : http://127.0.0.1:4646");
});

app.get("/", () => {
  return "Bienvenue sur Tatooine !";
});

app.get("/hello", () => {
  return "Utinni !";
});
