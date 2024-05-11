import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes";
import swaggerUi from "swagger-ui-express";
import { PostgresDataSource } from "./data-source";
import { Console } from "console";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(Router);

app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

PostgresDataSource.initialize()
    .then(() => {
        console.log("DataSource initialized");
    })
    .catch((error) => console.log(error))

app.listen(PORT, () => {
    console.log("Server is running on port", PORT, "httP://localhost:" + PORT + "/swagger");
});