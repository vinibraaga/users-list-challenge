import app from "./app";

const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port: ${process.env.PORT || port}`);
});