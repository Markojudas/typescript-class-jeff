// type CustomerInformation = {
//     customerId: string
// }

// export type Order = {
//     id: string;
//     shipDate?: string;
//     deliveryDate?: string
// } & CustomerInformation  // intersection


type OrderMeta = {
    orderId: string,
    customerId: string
}

// export type Order = 
//     | {
//         status: 'Pending'
//     } & OrderMeta
//     | {
//         shipDate: string
//         status: 'Shipped'
//     } & OrderMeta
//     | {
//         shipDate: string,
//         deliveryDate: string,
//         status: 'Delivered'
//     } & OrderMeta

type PendingOrder = {
    status: 'Pending';
} & OrderMeta

type ShippedOrder = {
    shipDate: string
    status: 'Shipped'
} & OrderMeta

type DeliveredOrder = {
    shipDate: string,
    deliveryDate: string,
    status: 'Delivered'
} & OrderMeta

export type Order = 
    | PendingOrder
    | ShippedOrder
    | DeliveredOrder



// export function calculcateExpectedDeliveryDate(order: Order) {
//     switch (order.status) {
//         case 'Shipped':
//             return new Date(); //figure it out
//         case 'Pending':
//             return new Date();
//         case 'Delivered':
//             return new Error(
//                 "cannot calculate deliver data for this one"
//             );
//     }
// }

// type UnDeliveredOrder = PendingOrder | ShippedOrder;
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