const stripe = require("stripe")(process.env.STRIPE_SK);
import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { buffer } from "micro";
const endpointSecret =
  "whsec_55d9d052f1fa85ddc184fdbf4697600e956b201946ee6f87308d70528bfc1010";
export default async function handler(req, res) {
  await mongooseConnect();
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === "paid";
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        });
      }
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  res.status(200).send("OK");
}

export const config = {
  api: { bodyParser: false },
};
//acct_1OQpDzByVktuOqR3
