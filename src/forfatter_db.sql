-- Author database
CREATE DATABASE forfatter_db;

-- Author table
CREATE TABLE Author (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(255), -- File path or link to the image
    name VARCHAR(100),
    birth_year INT,
    biography TEXT
);

-- Works table
CREATE TABLE Works (
    work_id INT PRIMARY KEY AUTO_INCREMENT,
    author_id INT,
    image VARCHAR(255), -- File path or link to the image
    title VARCHAR(255),
    publication_date DATE,
    publisher VARCHAR(100),
    purchase_link VARCHAR(255),
    description TEXT,
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);

-- Reviews table
CREATE TABLE Reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    work_id INT,
    name VARCHAR(100),
    email VARCHAR(255),
    review_text TEXT,
    rating INT,
    FOREIGN KEY (work_id) REFERENCES Works(work_id)
);

-- News table
CREATE TABLE News (
    news_id INT PRIMARY KEY AUTO_INCREMENT,
    author_id INT,
    headline VARCHAR(255),
    content TEXT,
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);

-- Contact-Me table
CREATE TABLE ContactMe (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(255),
    message TEXT,
);

-- SoMe (Social Media) table
CREATE TABLE SocialMedia (
    soMe_id INT PRIMARY KEY AUTO_INCREMENT,
    author_id INT,
    platform VARCHAR(255),
    link VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);

-- Insert two authors into the Author table
INSERT INTO Author (image, name, birth_year, biography) VALUES
    ('path/to/image1.jpg', 'Caroline Storgaard Gyldmark', 1999, 'Placeholder'),
