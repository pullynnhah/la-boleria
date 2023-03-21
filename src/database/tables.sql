CREATE DATABASE "laBoleria";

CREATE TABLE "flavours" (
  "id" serial PRIMARY KEY,
  "name" varchar(255) NOT NULL
);

CREATE TABLE "cakes" (
  "id" serial PRIMARY KEY,
  "name" varchar(255) NOT NULL UNIQUE,
  "price" numeric NOT NULL CHECK ("price" > 0),
  "image" varchar(255) NOT NULL,
  "description" text,
  "flavourId" int NOT NULL REFERENCES "flavours" ("id")
);

CREATE TABLE "clients" (
  "id" serial PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "address" varchar(255) NOT NULL,
  "phone" varchar(11) NOT NULL
);

CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
  "clientId" int NOT NULL REFERENCES "clients" ("id"),
  "cakeId" int NOT NULL REFERENCES "cakes" ("id"),
  "quantity" int CHECK ("quantity" > 0 AND "quantity" < 5),
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "totalPrice" numeric CHECK ("totalPrice" > 0),
  "isDelivered" boolean DEFAULT FALSE
);