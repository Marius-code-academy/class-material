--CREATE TABLE students (
--    id SERIAL PRIMARY KEY,
--    name VARCHAR(100) NOT NULL,
--    email VARCHAR(100) UNIQUE NOT NULL
--);

--CREATE TABLE courses (
--    id SERIAL PRIMARY KEY,
--    course_name VARCHAR(100) UNIQUE NOT NULL
--);

--CREATE TABLE student_courses (
--    student_id INT REFERENCES students(id) ON DELETE CASCADE,
--    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
--    PRIMARY KEY (student_id, course_id)
--);

--insert into students (name, email) values ('Maksim', 'maksim@email.lt')

--insert into courses (course_name) values ('Geography')

--select * from students
--select * from courses

--insert into student_courses (student_id, course_id) values (3, 4)

--select * from students 
--join student_courses on students.id = student_courses.student_id
--join courses on student_courses.course_id = courses.id

--select * from students 
--left join student_courses on students.id = student_courses.student_id
--left join courses on student_courses.course_id = courses.id

--select * from students 
--right join student_courses on students.id = student_courses.student_id
--right join courses on student_courses.course_id = courses.id

--select * from students 
--full outer join student_courses on students.id = student_courses.student_id
--full outer join courses on student_courses.course_id = courses.id

select * from students 
cross join courses



