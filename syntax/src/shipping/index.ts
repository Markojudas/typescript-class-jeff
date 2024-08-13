export * from "./oder-date-estimation";
export * from "./orders"
// type CustomerInformation = {
//     customerId: string
// }

// export type Order = {
//     id: string;
//     shipDate?: string;
//     deliveryDate?: string
// } & CustomerInformation  // intersection



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
