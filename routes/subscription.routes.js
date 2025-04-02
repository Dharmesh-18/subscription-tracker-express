import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all Subscription" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get Subscription details" })
);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update new Subscription" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete new Subscription" })
);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "Cancel Subscription" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "Get upcoming renewals" })
);

export default subscriptionRouter;
