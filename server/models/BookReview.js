const { Schema, model } = require('mongoose');

// import schema from Book.js
const Book = require('./Book');
const User = require('./User');

const bookReviewSchema = new Schema(
  {
    user:
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    book:
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    },
    content: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now()
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const BookReview = model('BookReview', bookReviewSchema);

module.exports = BookReview;
