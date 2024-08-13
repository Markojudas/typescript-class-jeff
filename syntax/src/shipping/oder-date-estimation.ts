import { Order } from "./orders";

type UnDeliveredOrder = Exclude<Order, { status: 'Delivered' }> // excludes orders with status Delivered
export function calculcateExpectedDeliveryDate(order: UnDeliveredOrder): Date {
    switch (order.status) {
        case 'Shipped': {
            return new Date(); //figure it out
        }
        case 'Pending': {
            return new Date();
        }
    }
}

export function isUndeliveredOrder(order: Order): order is UnDeliveredOrder {
    return order.status !== 'Delivered';
}