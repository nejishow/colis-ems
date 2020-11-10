const mongoose = require("mongoose");
const expressSchema = new mongoose.Schema(
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
      },
      address: {
        type: String
      },
      contract: {
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
      isDoc: {
        type: Boolean
      },
      isMarchandise: {
        type: Boolean
      },
      idNumber:{
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
      contract: {
        type: String
      },
      town: {
        type: String
      },
      country: {
        type: String
      },
      price: {
        type: String
      }
    },
    enabled: {
      type: Boolean,
      default: true
    },
    agent:{
      type: String
    },
    type:{
      type: Number,
      default: 2
    },
    typeName: {
      type: String,
      default: "Ems"
    }
  },
  { timestamps: true }
);

const express = mongoose.model("express", expressSchema);

module.exports = express;
