import { app } from "./setup.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
