const mongoose = require("mongoose");
const lettresSchema = new mongoose.Schema(
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
      },
      idNumber:{
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
    default: 3
  }
  },
  { timestamps: true }
);

const lettres = mongoose.model("lettres", lettresSchema);

module.exports = lettres;
