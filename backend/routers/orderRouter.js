import express from "express";
import Order from "../models/orderModel.js";
import { isAuth } from "../ultils.js";

const orderRouter = express.Router();

orderRouter.post("/", isAuth, async (req, res) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: "Cart is empty" });
  } else {
    const order = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      payment: req.body.payment,
      delivery: req.body.delivery,
      itemsPrice: req.body.itemsPrice,
      shipFee: req.body.shipFee,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const createOrder = await order.save();
    res.status(200).send({ message: "New order created!", order: createOrder });
  }
});

export default orderRouter;
