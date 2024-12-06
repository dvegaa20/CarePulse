"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.users =
  exports.messaging =
  exports.storage =
  exports.databases =
  exports.ENDPOINT =
  exports.BUCKET_ID =
  exports.APPOINTMENT_COLLECTION_ID =
  exports.DOCTOR_COLLECTION_ID =
  exports.PATIENT_COLLECTION_ID =
  exports.DATABASE_ID =
  exports.API_KEY =
  exports.PROJECT_ID =
    void 0;
var sdk = require("node-appwrite");
(exports.PROJECT_ID = ((_a = process.env), _a.PROJECT_ID)),
  (exports.API_KEY = _a.API_KEY),
  (exports.DATABASE_ID = _a.DATABASE_ID),
  (exports.PATIENT_COLLECTION_ID = _a.PATIENT_COLLECTION_ID),
  (exports.DOCTOR_COLLECTION_ID = _a.DOCTOR_COLLECTION_ID),
  (exports.APPOINTMENT_COLLECTION_ID = _a.APPOINTMENT_COLLECTION_ID),
  (exports.BUCKET_ID = _a.NEXT_PUBLIC_BUCKET_ID),
  (exports.ENDPOINT = _a.NEXT_PUBLIC_ENDPOINT);
var client = new sdk.Client();
client
  .setEndpoint(exports.ENDPOINT)
  .setProject(exports.PROJECT_ID)
  .setKey(exports.API_KEY);
exports.databases = new sdk.Databases(client);
exports.storage = new sdk.Storage(client);
exports.messaging = new sdk.Messaging(client);
exports.users = new sdk.Users(client);
