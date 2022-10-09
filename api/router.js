import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  return res.json({
    name: "Renan",
    sobrenome: "Pereira Loureiro",
  });
});

router.post("/user", (req, res) => {
  const data = req.body.parameters;

  return res.json({
    ...data,
  });
});

export { router };
