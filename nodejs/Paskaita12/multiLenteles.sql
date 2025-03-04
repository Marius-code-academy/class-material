--1 : 1 Relationship
--CREATE TABLE students (
--    id SERIAL PRIMARY KEY,
--    name VARCHAR(100),
--    email VARCHAR(100) UNIQUE
--);

--CREATE TABLE student_profiles (
--    id SERIAL PRIMARY KEY,
--    student_id INT UNIQUE REFERENCES students(id) ON DELETE CASCADE,
--    date_of_birth DATE,
--    address TEXT
--);

--insert into students (name, email) values 
--('Tomas', 'tomas@emailas.lt')

--select * from students
--select * from student_profiles

--insert into student_profiles (student_id, date_of_birth, address) values 
--(1, '1996-10-10', 'dar kazkoks miestas')

--delete from students where id=2

--select students.name as student_name, students.email, student_profiles.date_of_birth from students
--join student_profiles 
--on students.id = student_profiles.student_id

--1:many relationship

--CREATE TABLE teachers (
--    id SERIAL PRIMARY KEY,
--    name VARCHAR(100)
--);

--CREATE TABLE courses (
--    id SERIAL PRIMARY KEY,
--    course_name VARCHAR(100),
--    teacher_id INT REFERENCES teachers(id) ON DELETE SET NULL
--);

--insert into teachers (name) values 
--('Ugnius')

--select * from teachers
select * from courses

--insert into courses (course_name, teacher_id) values 
--('dizainas', 3)

--select * from teachers join 
--courses on teachers.id = courses.teacher_id

--delete from teachers where id=2

