const mongoose = require("mongoose");
require('mongoose-type-email');

const Schema = mongoose.Schema;

const hunt = new Schema({
    hunt_id: {
        type: String
    },
    favorite_id: {
        type: String
    },
    teacher_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hunt_data: {
        type: Map,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    share: {
        type: Boolean,
        required: true,
        default: false
    },
    start_date: {
        type: Date,
        required: false
    },
    end_date: {
        type: Date,
        required: false
    }
});

const Hunt = mongoose.model("Hunt", hunt);

module.exports = Hunt;