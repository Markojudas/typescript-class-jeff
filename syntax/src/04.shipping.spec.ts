import { describe, test } from "vitest";
import { calculateExpectedDeliveryDate, Order } from "./shipping";

describe("Shipping Orders", () => {
  test("shipped-orders", () => {
    const order: Order = {
      status: "shipped",
      customerId: "99",
      orderId: "12",
      shipDate: "2024-08-13 ",
    };

    const expectedDate = calculateExpectedDeliveryDate(order);

    // some kind of expectation
  });

  test("pending-orders", () => {
    const order: Order = {
      status: "shipped",
      customerId: "99",
      orderId: "12",
      shipDate: "2024-08-13 ",
    };

    const expectedDate = calculateExpectedDeliveryDate(order);

    // some kind of expectation
  });
  test("delivered-orders", () => {
    const order: Order = {
      status: "delivered",
      customerId: "99",
      orderId: "12",
      shipDate: "2024-08-13 ",
      deliveryDate: "2024-08-14",
    };

    // @ts-expect-error
    const expectedDate = calculateExpectedDeliveryDate(order);

    // some kind of expectation
  });
});
