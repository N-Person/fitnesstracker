//require mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },

    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
            type: Number,
        },
      },
    ],
    totalDuration: {
      type: Number,
      default: 0,
    },
  },
  { toJSON: { virtuals: true } }
);

const Workout = mongoose.model("Workout", WorkoutSchema);
// export to index.js
module.exports = Workout;
