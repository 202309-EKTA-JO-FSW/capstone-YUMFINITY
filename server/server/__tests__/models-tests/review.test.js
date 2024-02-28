const mongoose = require("mongoose");
const Review = require("../../Models/review");
const connectToMongo = require("../../db/connection");

beforeAll(() => {
  // Connect to the database before running any tests (only once)
  connectToMongo();
});

afterAll(async () => {
  // drop collection
  await Review.collection.drop();
  // Close connection after all tests are done
  mongoose.connection.close();
});

describe("Review model tests", () => {
  // setup global Ids
  const userId = new mongoose.Types.ObjectId();
  const restaurantId = new mongoose.Types.ObjectId();
  const orderId = new mongoose.Types.ObjectId();

  it("should create review document in database with valid data", async () => {
    // arrange
    const reviewId = new mongoose.Types.ObjectId();
    let newReview = new Review({
      _id: reviewId,
      rating: 1.7,
      comment: "so delecious",
      restaurantId: restaurantId,
      userId: userId,
      orderId: orderId,
    });

    let secondReview = new Review({
      rating: 4,
      comment: "so yemmy",
      restaurantId: restaurantId,
      userId: userId,
      orderId: orderId,
    });

    // act
    let error;
    try {
      await newReview.save();
      await secondReview.save();
    } catch (e) {
      error = e;
    }

    // assert
    const cart = await Review.findById(reviewId);
    expect(error).toBeUndefined();
    expect(cart).not.toBeNull();
    expect(cart.userId).toEqual(userId);
    expect(cart).toMatchObject({ rating: 2 });
  });

  it("should not create review document in database if userId, restaurantId, or orderId isn't provided", async () => {
    // arrange
    const reviewId = new mongoose.Types.ObjectId();
    let newReview = new Review({
      _id: reviewId,
      rating: 5,
      comment: "so delecious",
    });

    // act
    let error;
    try {
      await newReview.save();
    } catch (e) {
      error = e;
    }

    // assert
    const cart = await Review.findById(reviewId);
    expect(error).not.toBeNull();
    expect(error.message).toContain("validation failed");
    expect(cart).toBeNull();
  });
});
