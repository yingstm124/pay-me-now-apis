import * as express from "express";
import * as exampleController from "../controllers/example.controller";

const router = express.Router({ mergeParams: true });

router.route("/").get(exampleController.get);

export default router;
