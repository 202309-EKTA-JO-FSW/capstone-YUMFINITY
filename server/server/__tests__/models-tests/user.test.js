const mongoose = require("mongoose");
const User = require("../../Models/user");
const connectToMongo = require("../../db/connection");

beforeAll(() => {
  // Connect to the database before running any tests (only once)
  connectToMongo();
});

afterAll(async () => {
  // drop collection
  await User.collection.drop();
  // Close connection after all tests are done
  mongoose.connection.close();
});

describe("User schema test", () => {
  it("create document in database with valid data", async () => {
    // arrange
    let user = new User({
      username: "ahmad",
      password_hash: "hash",
      email: "ahmad@test.com",
      firstName: "Ahmad",
      lastName: "Khaled",
      phoneNumber: parseInt("0780000000", 10),
      isAdmin: true,
      addresses: [
        {
          addressName: "zarqa",
          location: [32.0608, 36.0942],
        },
      ],
    });

    // act
    await user.save();
    const createdUser = await User.findOne({ username: user.username });
    // assert
    expect(createdUser._id).toBeDefined();
    expect(createdUser.username).toEqual(user.username);
  });

  it("should not create document if data isn't  valid", async () => {
    // arrange
    let error;
    let user = new User({
      password_hash: "hash",
      email: "ahmad@test.com",
      firstName: "Ahmad",
      lastName: "Khaled",
      phoneNumber: parseInt("0780000000", 10),
      isAdmin: true,
      addresses: [
        {
          addressName: "zarqa",
          location: [32.0608, 36.0942, 50],
        },
      ],
    });

    // act
    try {
      await user.save();
    } catch (e) {
      error = e;
    }
    // assert
    expect(error).not.toBeNull();
    expect(error.message).toBeDefined();
  });
});
