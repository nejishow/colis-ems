const mongoose = require("mongoose");
const emsSchema = new mongoose.Schema(
  {
    from: {
      name: {
        type: String
      },
      tel: {
        type: String
      },
      cp: {
        type: String
      },
      town: {
        type: String
      }
    },
    to: {
      name: {
        type: String
      },
      address: {
        type: String
      },
      tel: {
        type: String
      },
      cp: {
        type: String
      },
      town: {
        type: String
      },
      country: {
        type: String
      },
      object: {
        type: String
      },
      value: {
        type: String
      },
      weight: {
        type: String
      },
      date: {
        type: String
      },
      price: {
        type: String
      }
    },
    agent:{
      type: String
    },
    enabled: {
      type: Boolean,
      default: true
  },
  type:{
    type: Number,
    default: 1
  }
  },
  { timestamps: true }
);

const EMS = mongoose.model("ems", emsSchema);

module.exports = EMS;
