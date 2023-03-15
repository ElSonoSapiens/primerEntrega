import { Router } from "express";

const users = [];
const router = Router();

router.get("/", (req, res) => {
	//res.send("Users");
	res.json({ users });
});

router.post("/", (req, res) => {
	const obj = req.body;
	users.push(obj);
	res.json({ message: "user added" });
});

// router.put()

// router.delete()

export default router;
