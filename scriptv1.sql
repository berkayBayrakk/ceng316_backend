-- Drop tables if they exist
DROP TABLE IF EXISTS Student CASCADE; 
DROP TABLE IF EXISTS Candidate CASCADE;
DROP TABLE IF EXISTS Form CASCADE;
DROP TABLE IF EXISTS Election CASCADE;
DROP TABLE IF EXISTS ElectionResult CASCADE;
DROP TABLE IF EXISTS Vote CASCADE;
DROP TABLE IF EXISTS Faculty CASCADE;
DROP TABLE IF EXISTS Notification CASCADE;
DROP TABLE IF EXISTS Department CASCADE;

-- Faculty Table
CREATE TABLE Faculty (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Department Table
CREATE TABLE Department (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    faculty_id INTEGER REFERENCES Faculty(id) NOT NULL
);
-- Student Table
CREATE TABLE Student (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    department_id INTEGER REFERENCES Department(id),
    role TEXT DEFAULT 'undergraduate',
    tenure DATE
);

-- Candidate Table
CREATE TABLE Candidate (
    id SERIAL PRIMARY KEY,
    correction boolean DEFAULT false,
    status TEXT,
    student_id INTEGER REFERENCES Student(id) NOT NULL
);

-- Form Table
CREATE TABLE Form (
    id SERIAL PRIMARY KEY,
    candidate_id INTEGER REFERENCES Candidate(id) NOT NULL,
    type TEXT,
    name TEXT
);



-- Election Table
CREATE TABLE Election (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    date DATE,
    start_time TIME,
    end_time TIME,
    position TEXT
);

-- Election Result Table
CREATE TABLE ElectionResult (
    id SERIAL PRIMARY KEY,
    election_id INTEGER REFERENCES Election(id) NOT NULL,
    winner_student_id INTEGER,
    votes INTEGER
);

-- Notification Table
CREATE TABLE Notification (
    id SERIAL PRIMARY KEY,
    receiver_id INTEGER NOT NULL,
    message TEXT NOT NULL
);

-- Vote Table (Joint)
CREATE TABLE Vote (
	student_id INTEGER REFERENCES Student(id),
	election_id INTEGER REFERENCES Election(id),
	PRIMARY KEY(Student_id, election_id)

);