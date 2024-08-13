import { OrderMeta } from "./meta";

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