const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

//1. Viết function tính thứ hạng trung bình của cả lớp
function averageGrade(grades) {
  let totalGrade = 0;
  grades.forEach((e) => {
    totalGrade += e.grade == null ? 0 : e.grade;
  });
  return totalGrade / grades.length;
}
console.log(averageGrade(grades));

//2. Viết function tính thứ hạng trung bình của nam trong lớp
function averageGradeOfMale(grades) {
  let totalMaleGrade = 0;
  let maleCount = 0;
  grades
    .filter((e) => e.sex === "M")
    .forEach((e) => {
      totalMaleGrade += e.grade == null ? 0 : e.grade;
      maleCount++;
    });
  return totalMaleGrade / maleCount;
}
console.log(averageGradeOfMale(grades));

//3. Viết function tính thứ hạng trung bình của Nữ trong lớp
function averageGradeOfFemale(grades) {
  let totalFemaleGrade = 0;
  let femaleCount = 0;
  grades
    .filter((e) => e.sex === "F")
    .forEach((e) => {
      totalFemaleGrade += e.grade == null ? 0 : e.grade;
      femaleCount++;
    });
  return totalFemaleGrade / femaleCount;
}
console.log(averageGradeOfMale(grades));

//4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function highestRankOfMale(grades) {
  const maleGrades = grades.filter((e) => e.sex === "M");
  let highestRank = maleGrades[0].grade;
  let result = maleGrades[0];
  maleGrades.forEach(e => {
    if (e.grade < highestRank) {
      result = e;
      highestRank = e.grade;
    }
  })
  return result;
}
console.log(highestRankOfMale(grades));

//5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function highestRankOfFemale(grades) {
  const femaleGrades = grades.filter((e) => e.sex === "F");
  let highestRank = femaleGrades[0].grade;
  let result = femaleGrades[0];
  femaleGrades.forEach((e) => {
    if (e.grade < highestRank) {
      result = e;
      highestRank = e.grade;
    }
  });
  return result;
}
console.log(highestRankOfFemale(grades));

//6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function lowestRankOfMale(grades) {
  const maleGrades = grades.filter((e) => e.sex === "M");
  let lowestRank = maleGrades[0].grade;
  let result = maleGrades[0];
  maleGrades.forEach((e) => {
    if (e.grade > lowestRank) {
      result = e;
      lowestRank = e.grade;
    }
  });
  return result;
}
console.log(lowestRankOfMale(grades));

//7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function lowestRankOfFemale(grades) {
  const femaleGrades = grades.filter((e) => e.sex === "F");
  let lowestRank = femaleGrades[0].grade;
  let result = femaleGrades[0];
  femaleGrades.forEach((e) => {
    if (e.grade > lowestRank) {
      result = e;
      lowestRank = e.grade;
    }
  });
  return result;
}
console.log(lowestRankOfFemale(grades));

//7. Viết function thứ hạng cao nhất của cả lớp
function highestRankOfClass(grades) {
  let highestRank = grades[0].grade;
  let result = grades[0];
  grades.forEach(e => {
    if (e.grade < highestRank) {
      result = e;
      highestRank = e.grade;
    }
  });
  return result;
}
console.log(highestRankOfClass(grades));

//9. Viết function thứ hạng thấp nhất của cả lớp
function lowestRankOfClass(grades) {
  let lowestRank = grades[0].grade;
  let result = grades[0];
  grades.forEach((e) => {
    if (e.grade > lowestRank) {
      result = e;
      lowestRank = e.grade;
    }
  });
  return result;
}
console.log(lowestRankOfClass(grades));

//10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function maleStudentsOfClass(grades) {
  return grades.filter(e => e.sex === "M");
}
console.log(maleStudentsOfClass(grades));

//11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortClassByName(grades) {
  grades.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}
sortClassByName(grades);
console.log(grades);

//12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortClassByGrade(grades) {
  grades.sort((a, b) => {
    return -(a.grade - b.grade)
  });
}
sortClassByGrade(grades);
console.log(grades);

//13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function femaleStudentsWhoseNameStartWithJ(grades) {
  return grades.filter(e => {
    return e.sex === "F" && e.name.startsWith("J") 
  });
}
console.log(femaleStudentsWhoseNameStartWithJ(grades));

//14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function fiveHighestRankStudents(grades) {
  grades.sort((a, b) => a.grade - b.grade);
  return grades.slice(0, grades.length >= 5 ? 5 : grades.length);
}
console.log(fiveHighestRankStudents(grades));