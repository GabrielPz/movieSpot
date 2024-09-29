import { fastify, FastifyReply, FastifyRequest } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { errorHandler } from "./error-handler";
import { autenticarToken, login } from "./routes/Auth";
import { orderRoutes } from "./routes/Orders";
import { userRoutes } from "./routes/Users";
import fastifyRawBody from "fastify-raw-body";

const app = fastify();

// aqui determina qual o endereco do front-end que pode consumir nosso servidor
app.register(fastifyCors, {
  origin: "*",
});

app.register(fastifyRawBody, {
  runFirst: true,
  global: false,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(login);
app.register(orderRoutes);
app.register(userRoutes);
app.setErrorHandler(errorHandler);

app.listen({ port: 3000, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3000");
});
