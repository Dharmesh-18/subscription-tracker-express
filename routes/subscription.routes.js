import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all Subscription" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get Subscription details" })
);
subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "Create new Subscription" })
);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update new Subscription" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete new Subscription" })
);
subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "Get user's all Subscription" })
);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "Cancel Subscription" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "Get upcoming renewals" })
);

export default subscriptionRouter;
