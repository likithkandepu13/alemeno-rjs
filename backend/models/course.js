const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  instructorName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  enrollmentStatus: {
    type: String,
    enum: ['Open', 'Closed', 'In Progress'],
    default: 'Open'
  },
  courseDuration: {
    type: Number,
    required: true
  },
  schedule: {
    days: {
      type: [String],
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    }
  },
  location: {
    type: String,
    required: true
  },
  prerequisites: {
    type: [String],
    required: true
  },
  syllabus: {
    type: [String],
    required: true
  },
  enrolled: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
