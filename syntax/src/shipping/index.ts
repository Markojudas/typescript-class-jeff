type OrderMeta = {
  orderId: string;
  customerId: string;
};

type PendingOrder = {
  status: "pending";
} & OrderMeta;

type ShippedOrder = {
  shipDate: string;
  status: "shipped";
} & OrderMeta;

type DeliveredOrder = {
  shipDate: string;
  deliveryDate: string;
  status: "delivered";
} & OrderMeta;

export type Order = PendingOrder | ShippedOrder | DeliveredOrder;

// Violation of the Liskov Substitution Principle

// If an order has not been shipped, it should be expected in three days.
// If it has been shipped, it should be expected from the shipDate + 3 days
// If it has been already delivered, ???
type UnDeliveredOrder = Exclude<Order, { status: "delivered" }>;
export function calculateExpectedDeliveryDate(order: UnDeliveredOrder) {
  switch (order.status) {
    case "shipped": {
      return new Date(); // figure it out
    }
    case "pending": {
      return new Date();
    }
  }
}
