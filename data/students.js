const students = [
  {
    name: "Mark",
    grade: 9,
    smart: true,
  },
  {
    name: "Wendy",
    grade: 10,
    smart: true,
  },
  {
    name: "Steph",
    grade: 11,
    smart: true,
  },
  {
    name: "Victor",
    grade: 12,
    smart: true,
  },
];

module.exports = {
  getAll: function () {
    return students;
  },
};
