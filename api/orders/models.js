const { Schema, model } = require('mongoose')

const OrderSchema = new Schema(
    {
        items: {
            type: Array,
            required: true
        },
        totalBill: {
            type: String,
            required: true
        },
        customerAddress: {
            type: String,
            required: true
        },
        customerContact: {
            type: String,
            required: true
        },
        customerName: {
            type: String,
            required: true
        },
        customerEmail: {
            type: String,
            required: true
        },
        Status: {
            type: String,
            default: "pending"
        },
        Message: {
            type: String,
            default: "Please check your order via Tracking Id"
        },
        order_at: {
            type: Date,
            default: Date.now

        }
    }
)

const Order = model('order', OrderSchema)
module.exports = Order 