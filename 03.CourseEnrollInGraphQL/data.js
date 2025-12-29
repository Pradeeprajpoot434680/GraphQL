// USERS (Including Students and more Instructors)
const users = [
  { id: "1", name: "Pradeep", email: "pradeep@mail.com" },
  { id: "2", name: "Rahul", email: "rahul@mail.com" },
  { id: "3", name: "Instructor John", email: "john@mail.com" },
  { id: "4", name: "Sarah Miller", email: "sarah@mail.com" }, // Instructor
  { id: "5", name: "Amit Sharma", email: "amit@mail.com" },
  { id: "6", name: "Elena Rodriguez", email: "elena@mail.com" }
];

// COURSES (Across different categories)
const courses = [
  { id: "101", title: "GraphQL Basics", instructorId: "3" },
  { id: "102", title: "Node.js Advanced", instructorId: "3" },
  { id: "103", title: "React Design Patterns", instructorId: "4" },
  { id: "104", title: "Database Indexing Deep Dive", instructorId: "4" },
  { id: "105", title: "TypeScript for Architects", instructorId: "3" }
];

// LESSONS (Structured within courses)
const lessons = [
  { id: "l1", title: "Intro to GraphQL", courseId: "101" },
  { id: "l2", title: "Queries & Mutations", courseId: "101" },
  { id: "l3", title: "Async Node Concepts", courseId: "102" },
  { id: "l4", title: "Streams & Buffers", courseId: "102" },
  { id: "l5", title: "Higher Order Components", courseId: "103" },
  { id: "l6", title: "Compound Components", courseId: "103" },
  { id: "l7", title: "B-Trees vs Hash Indexes", courseId: "104" },
  { id: "l8", title: "Generics & Utility Types", courseId: "105" }
];

// ENROLLMENTS (User → Course)
const enrollments = [
  { id: "e1", userId: "1", courseId: "101" },
  { id: "e2", userId: "1", courseId: "102" },
  { id: "e3", userId: "2", courseId: "101" },
  { id: "e4", userId: "5", courseId: "103" },
  { id: "e5", userId: "6", courseId: "103" },
  { id: "e6", userId: "6", courseId: "101" },
  { id: "e7", userId: "2", courseId: "105" }
];

// REVIEWS (Varied ratings)
const reviews = [
  { id: "r1", courseId: "101", userId: "1", rating: 4, comment: "Great introductory course!" },
  { id: "r2", courseId: "101", userId: "2", rating: 5, comment: "Loved the mutation examples." },
  { id: "r3", courseId: "102", userId: "1", rating: 3, comment: "Good, but needs more diagrams." },
  { id: "r4", courseId: "103", userId: "5", rating: 5, comment: "React patterns are explained so clearly." },
  { id: "r5", courseId: "103", userId: "6", rating: 4, comment: "Very helpful for my daily work." }
];

// USER PROGRESS
const progress = [
  { id: "p1", userId: "1", courseId: "101", lastLesson: "l2", completionPercent: 75 },
  { id: "p2", userId: "1", courseId: "102", lastLesson: "l3", completionPercent: 40 },
  { id: "p3", userId: "5", courseId: "103", lastLesson: "l6", completionPercent: 100 },
  { id: "p4", userId: "6", courseId: "103", lastLesson: "l5", completionPercent: 50 },
  { id: "p5", userId: "2", courseId: "105", lastLesson: "l8", completionPercent: 90 }
];

module.exports = {
  users,
  courses,
  lessons,
  enrollments,
  reviews,
  progress
};