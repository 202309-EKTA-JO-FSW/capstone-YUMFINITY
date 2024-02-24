const mongoose = require("mongoose");
const Order = require("../../Models/order");
const connectToMongo = require("../../db/connection");

beforeAll(() => {
  // Connect to the database before running any tests (only once)
  connectToMongo();
});

afterAll(async () => {
  // drop collection
  await Order.collection.drop();
  // Close connection after all tests are done
  mongoose.connection.close();
});

describe("Order model tests", () => {
  // setup global Ids
  const userId = mongoose.Types.ObjectId();
  const restaurantId = mongoose.Types.ObjectId();
  const itemId = mongoose.Types.ObjectId();

  it("should create order document in database with valid data", async () => {
    // arrange
    const id = mongoose.Types.ObjectId();
    const item2Id = mongoose.Types.ObjectId();
    const item3Id = mongoose.Types.ObjectId();
    let newOrder = new Order({
      _id: id,
      totalBill: 1,
      deliveryAddress: [151, 42],
      userId: userId,
      restaurantId: restaurantId,
      items: [{ itemId: itemId }, { itemId: item2Id }],
    });

    let secondOrder = new Order({
      totalBill: 4,
      deliveryAddress: [-1.46, 36.4984],
      userId: userId,
      restaurantId: restaurantId,
      items: [{ itemId: item3Id }],
    });

    // act
    let error;
    try {
      await newOrder.save();
      await secondOrder.save();
    } catch (e) {
      error = e;
    }

    // assert
    const order = await Order.findById(id);
    expect(error).toBeUndefined();
    expect(order).not.toBeNull();
    expect(order._id).toEqual(id);
    expect(order.items[0].itemId).toEqual(itemId);
  });

  it("should not create order document in database if duplicate itemId in items array provided", async () => {
    // arrange
    const id = mongoose.Types.ObjectId();
    let newOrder = new Order({
      _id: id,
      totalBill: 5,
      deliveryAddress: [151, 42],
      userId: userId,
      restaurantId: restaurantId,
      items: [{ itemId: itemId }, { itemId: itemId }],
    });

    // act
    let error;
    try {
      await newOrder.save();
    } catch (e) {
      error = e;
    }

    // assert
    const order = await Order.findById(id);
    expect(error).not.toBeNull();
    expect(order).toBeNull();
    expect(error.name).toEqual("ValidationError");
  });

  it("should not create order document in database if wrong order status provided", async () => {
    // arrange
    const id = mongoose.Types.ObjectId();
    let newOrder = new Order({
      _id: id,
      totalBill: 5,
      deliveryAddress: [151, 42],
      orderStatus: "preparing",
      userId: userId,
      restaurantId: restaurantId,
      items: [{ itemId: itemId }],
    });

    // act
    let error;
    try {
      await newOrder.save();
    } catch (e) {
      error = e;
    }

    // assert
    const order = await Order.findById(id);
    expect(error).not.toBeNull();
    expect(order).toBeNull();
    expect(error.name).toEqual("ValidationError");
  });

  it("should not create order document in database if empty items array provided", async () => {
    // arrange
    const id = mongoose.Types.ObjectId();
    let newOrder = new Order({
      _id: id,
      totalBill: 5,
      deliveryAddress: [151, 42],
      userId: userId,
      restaurantId: restaurantId,
    });

    // act
    let error;
    try {
      await newOrder.save();
    } catch (e) {
      error = e;
    }

    // assert
    const order = await Order.findById(id);
    expect(error).not.toBeNull();
    expect(order).toBeNull();
    expect(error.name).toEqual("ValidationError");
  });

  it("should not create order document in database if wrong address syntax provided", async () => {
    // arrange
    const id = mongoose.Types.ObjectId();
    let newOrder = new Order({
      _id: id,
      totalBill: 5,
      deliveryAddress: [2234, 151, 42],
      userId: userId,
      restaurantId: restaurantId,
      items: [{ itemId: itemId }],
    });

    // act
    let error;
    try {
      await newOrder.save();
    } catch (e) {
      error = e;
    }

    // assert
    const order = await Order.findById(id);
    expect(error).not.toBeNull();
    expect(order).toBeNull();
    expect(error.name).toEqual("ValidationError");
  });

  it("should not create order document in database if either userId or restaurantId not provided", async () => {
    // arrange
    const id = mongoose.Types.ObjectId();
    let newOrder = new Order({
      _id: id,
      totalBill: 5,
      deliveryAddress: [151, 42],
      userId: userId,
      items: [{ itemId: itemId }],
    });

    // act
    let error;
    try {
      await newOrder.save();
    } catch (e) {
      error = e;
    }

    // assert
    const order = await Order.findById(id);
    expect(error).not.toBeNull();
    expect(order).toBeNull();
    expect(error.name).toEqual("ValidationError");
  });
});
