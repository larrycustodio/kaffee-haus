const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
    customerId: { type:Schema.Types.ObjectId, ref: 'Customer' },
    salePrice: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Sale', SaleSchema);