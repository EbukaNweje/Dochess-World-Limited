import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const MONGODB_URI =
  process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/dochess";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

const globalWithCache = globalThis as typeof globalThis & {
  _mongoose?: MongooseCache;
};

let cached: MongooseCache = globalWithCache._mongoose ?? {
  conn: null,
  promise: null,
};

if (!globalWithCache._mongoose) globalWithCache._mongoose = cached;

export async function connect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }

  cached.conn = await cached.promise;
  globalWithCache._mongoose = cached;
  return cached.conn;
}

export async function disconnect() {
  if (cached.conn) {
    await mongoose.disconnect();
    cached = { conn: null, promise: null };
    globalWithCache._mongoose = cached;
  }
}

export default mongoose;
