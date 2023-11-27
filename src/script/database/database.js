//Connecting to the server

import sequelize from "sequelize";

import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

// const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
//   host: process.env.MYSQL_HOST,
//   dialect: "mysql",
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
//   insecureAuth: true,
//   logging: console.log,
// });

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "your-database-host",
  username: "your-username",
  password: "your-password",
  database: "author_db",
});

const Author = sequelize.define("Author", {
  author_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  birth_year: {
    type: DataTypes.INTEGER,
  },
  biography: {
    type: DataTypes.TEXT,
  },
});

const Work = sequelize.define("Work", {
  work_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  publication_date: {
    type: DataTypes.DATE,
  },
  publisher: {
    type: DataTypes.STRING,
  },
  average_rating: {
    type: DataTypes.DECIMAL(3, 2),
  },
  purchase_link: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Work.belongsTo(Author, { foreignKey: "author_id" });

const Review = sequelize.define("Review", {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  review_text: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

Review.belongsTo(Work, { foreignKey: "work_id" });

const News = sequelize.define("News", {
  news_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  headline: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
  created_date: {
    type: DataTypes.DATE,
  },
});

News.belongsTo(Author, { foreignKey: "author_id" });

const ContactMe = sequelize.define("ContactMe", {
  contact_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
  submitted_date: {
    type: DataTypes.DATE,
  },
});

const SocialMedia = sequelize.define("SocialMedia", {
  soMe_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  platform: {
    type: DataTypes.STRING,
  },
  link: {
    type: DataTypes.STRING,
  },
});

SocialMedia.belongsTo(Author, { foreignKey: "author_id" });

sequelize.sync({ force: true }).then(async () => {
  await Author.bulkCreate([
    {
      image: "path/to/image1.jpg",
      name: "Author 1",
      birth_year: 1980,
      biography: "Biography for author 1",
    },
    {
      image: "path/to/image2.jpg",
      name: "Author 2",
      birth_year: 1990,
      biography: "Biography for author 2",
    },
  ]);

  console.log("Database synchronized.");
});

export { sequelize, DataTypes };
