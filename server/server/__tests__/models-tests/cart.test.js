const mongoose = require("mongoose");
const Cart = require("../../Models/cart");
const connectToMongo = require("../../db/connection");

beforeAll(() => {
  // Connect to the database before running any tests (only once)
  connectToMongo();
});

afterAll(async () => {
  // drop collection
  await Cart.collection.drop();
  // Close connection after all tests are done
  mongoose.connection.close();
});

describe("Cart model tests", () => {
  // setup global Ids
  const userId = new mongoose.Types.ObjectId();
  const restaurantId = new mongoose.Types.ObjectId();
  const itemId = new mongoose.Types.ObjectId();

  it("should create cart document in database with valid data", async () => {
    // arrange
    const cartId = new mongoose.Types.ObjectId();
    const secondUserId = new mongoose.Types.ObjectId();
    const item2Id = new mongoose.Types.ObjectId();
    let newCart = new Cart({
      _id: cartId,
      userId: userId,
      restaurantId: restaurantId,
      items: [
        {
          itemId: itemId,
          quantity: 2,
          specialItemRequirement: "pizza without onion",
        },
        {
          itemId: item2Id,
          quantity: 1,
          specialItemRequirement: "pizza without potato",
        },
      ],
    });

    let secondCart = new Cart({
      userId: secondUserId,
      restaurantId: restaurantId,
      items: [
        {
          itemId: item2Id,
          quantity: 9,
          specialItemRequirement: "pizza without ketchup",
        },
      ],
    });

    // act
    let error;
    try {
      await newCart.save();
      await secondCart.save();
    } catch (e) {
      error = e;
    }

    // assert
    const cart = await Cart.findById(cartId);
    expect(error).toBeUndefined();
    expect(cart).not.toBeNull();
    expect(cart.userId).toEqual(userId);
    expect(cart.items[0].itemId).toEqual(itemId);
  });

  it("should not create cart document in database if duplicate userId is provided", async () => {
    // arrange
    const cartId = new mongoose.Types.ObjectId();
    let newCart = new Cart({
      _id: cartId,
      userId: userId,
      restaurantId: restaurantId,
      items: [
        {
          itemId: itemId,
          quantity: 7,
          specialItemRequirement: "pizza without mayonase",
        },
      ],
    });

    // act
    let error;
    try {
      await newCart.save();
    } catch (e) {
      error = e;
    }

    // assert
    const cart = await Cart.findById(cartId);
    expect(error).not.toBeNull();
    expect(error.message).toContain("duplicate key error");
    expect(cart).toBeNull();
  });

  it("should not create cart document in database if duplicate itemId in items array is provided", async () => {
    // arrange
    const cartId = new mongoose.Types.ObjectId();
    const newUser = new mongoose.Types.ObjectId();
    let newCart = new Cart({
      _id: cartId,
      userId: newUser,
      restaurantId: restaurantId,
      items: [
        {
          itemId: itemId,
          quantity: 7,
          specialItemRequirement: "pizza without mayonase",
        },
        {
          itemId: itemId,
          quantity: 12,
          specialItemRequirement: "shawerma",
        },
      ],
    });

    // act
    let error;
    try {
      await newCart.save();
    } catch (e) {
      error = e;
    }

    // assert
    const cart = await Cart.findById(cartId);
    expect(error).not.toBeNull();
    expect(error.name).toContain("ValidationError");
    expect(cart).toBeNull();
  });
});
