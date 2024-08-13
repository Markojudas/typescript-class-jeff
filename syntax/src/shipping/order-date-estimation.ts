// Violation of the Liskov Substitution Principle

import { Order } from "./orders";

// If an order has not been shipped, it should be expected in three days.
// If it has been shipped, it should be expected from the shipDate + 3 days
// If it has been already delivered, ???
type UnDeliveredOrder = Exclude<Order, { status: "delivered" }>;
export function calculateExpectedDeliveryDate(order: UnDeliveredOrder): Date {
  switch (order.status) {
    case "shipped": {
      return new Date(); // figure it out
    }
    case "pending": {
      return new Date();
    }
  }
}

export function isUndeliveredOrder(order: Order): order is UnDeliveredOrder {
  return order.status !== "delivered";
}
