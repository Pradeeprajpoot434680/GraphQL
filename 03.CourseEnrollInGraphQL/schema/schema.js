const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat
} = require("graphql");

const {
  users,
  courses,
  lessons,
  enrollments,
  reviews,
  progress
} = require("../data");

// ➤ Review Type
const ReviewType = new GraphQLObjectType({
  name: "Review",
  fields: () => ({
    id: { type: GraphQLString },
    rating: { type: GraphQLInt },
    comment: { type: GraphQLString },

    user: {
      type: UserType,
      resolve(parent) {
        return users.find(u => u.id === parent.userId);
      }
    }
  })
});

// ➤ Progress Type
const ProgressType = new GraphQLObjectType({
  name: "Progress",
  fields: () => ({
    id: { type: GraphQLString },
    lastLesson: { type: GraphQLString },
    completionPercent: { type: GraphQLInt }
  })
});

// ➤ Course Stats Type (computed values)
const CourseStatsType = new GraphQLObjectType({
  name: "CourseStats",
  fields: () => ({
    lessonCount: { type: GraphQLInt },
    avgRating: { type: GraphQLFloat }
  })
});

// ➤ Lesson Type
const LessonType = new GraphQLObjectType({
  name: "Lesson",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString }
  })
});

// ➤ Enrollment Type
const EnrollmentType = new GraphQLObjectType({
  name: "Enrollment",
  fields: () => ({
    id: { type: GraphQLString },

    course: {
      type: CourseType,
      resolve(parent) {
        return courses.find(c => c.id === parent.courseId);
      }
    }
  })
});

// ➤ User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },

    enrollments: {
      type: new GraphQLList(EnrollmentType),
      resolve(parent) {
        return enrollments.filter(e => e.userId === parent.id);
      }
    }
  })
});

// ➤ Course Type (with nested & computed fields)
const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },

    instructor: {
      type: UserType,
      resolve(parent) {
        return users.find(u => u.id === parent.instructorId);
      }
    },

    lessons: {
      type: new GraphQLList(LessonType),
      resolve(parent) {
        return lessons.filter(l => l.courseId === parent.id);
      }
    },

    stats: {
      type: CourseStatsType,
      resolve(parent) {
        const courseLessons = lessons.filter(l => l.courseId === parent.id);
        const courseReviews = reviews.filter(r => r.courseId === parent.id);

        return {
          lessonCount: courseLessons.length,
          avgRating:
            courseReviews.reduce((a, r) => a + r.rating, 0) /
            (courseReviews.length || 1)
        };
      }
    },

    progress: {
      type: ProgressType,
      args: { userId: { type: GraphQLString } },
      resolve(parent, args) {
        return progress.find(
          p => p.userId === args.userId && p.courseId === parent.id
        );
      }
    },

    userReview: {
      type: ReviewType,
      args: { userId: { type: GraphQLString } },
      resolve(parent, args) {
        return reviews.find(
          r => r.userId === args.userId && r.courseId === parent.id
        );
      }
    }
  })
});

// ➤ ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(_, args) {
        return users.find(u => u.id === args.id);
      }
    },

    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return users;
      }
    },

    courses: {
      type: new GraphQLList(CourseType),
      resolve() {
        return courses;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
