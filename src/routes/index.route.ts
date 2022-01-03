import * as express from "express";
import * as exampleRoute from "../routes/example.route";

const router = express.Router();

// Controllrt Path
export const EXAMPLE_PATH = "example";

// Controller Setup Routes
router.use(`/${EXAMPLE_PATH}`, exampleRoute.default);

router.get("/", (_,res) => res.send("APIs"));

export default router;