import { describe, test } from "vitest";
import { calculcateExpectedDeliveryDate, isUndeliveredOrder, Order } from "./shipping";

describe('Shipping Orders', () => {
    test('shipped-order', () => {
        const order: Order = {
            status: 'Shipped',
            customerId: "99",
            orderId: "12",
            shipDate: "2024-08-13"
        };
        
        const expectedDate = calculcateExpectedDeliveryDate(order);
    });

    test('pending-order', () => {
        const order: Order = {
            status: 'Pending',
            customerId: "99",
            orderId: "12",
        };
        
        const expectedDate = calculcateExpectedDeliveryDate(order);
    });

    test('delivered-order', () => {
        const order: Order = {
            status: 'Delivered',
            customerId: "99",
            orderId: "12",
            shipDate: "2024-08-13",
            deliveryDate: "2024-08=14"
        };
        
        // @ts-expect-error
        const expectedDate = calculcateExpectedDeliveryDate(order); //this is bad because this is DeliveredOrder and method won't like it
    });

    test('Real World Example', () => {
        const o1: Order = {
            status: 'Shipped',
            customerId: "99",
            orderId: "12",
            shipDate: "2024-08-13"
        };

        const o2: Order = {
            status: 'Pending',
            customerId: "99",
            orderId: "12",
        }

        const o3: Order = {
            status: 'Delivered',
            customerId: "99",
            orderId: "12",
            shipDate: "2024-08-13",
            deliveryDate: "2024-08=14"
        }

        const orders = [o1, o2, o3];

        const listOfDeliveryDates = orders // all orders
            .filter(isUndeliveredOrder) // o1 and o2 (Shipped || Pending)
            .map(calculcateExpectedDeliveryDate); // dates
        
        console.log(listOfDeliveryDates);
    })
})