import { input } from "./input";

const main = async () => {
  type Student = {
    id: number;
    name: string;
    age: number;
  };

  let students: Student[] = [];
  let option = "";

  console.log("학생관리프로그램에 오신 것을 환영합니다.");
  while (option !== "6") {
    console.log(`
  1. Create a new student
  2. List all students
  3. Get a student by id
  4. Update a student
  5. Delete a student
  6. Exit
  `);

    option = await input("select an option: ");
    console.log(option);

    switch (option) {
      case "1":
        const name = await input("Student name: ");
        const age = await input("Student age: ");

        const newstudent = {
          id: students.length,
          name,
          age: +age,
        };

        students.push({
          id: students.length,
          name,
          age: +age,
        });

        console.log("Student created: ", newstudent);

        break;

      case "2":
        console.log("All Students: ", students);

        break;
    }
  }
};

main();
