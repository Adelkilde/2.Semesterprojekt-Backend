import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
    insecureAuth: true,
    logging: console.log,
  }
);

const Author = sequelize.define(
  "Author",
  {
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
    date_of_birth: {
      type: DataTypes.DATE,
    },
    biography: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

const Work = sequelize.define(
  "Work",
  {
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
  },
  {
    timestamps: true,
  }
);

Work.belongsTo(Author, { foreignKey: "author_id" });

const Review = sequelize.define(
  "Review",
  {
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
  },
  {
    timestamps: true,
  }
);

Review.belongsTo(Work, { foreignKey: "work_id" });

const News = sequelize.define(
  "News",
  {
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
  },
  {
    timestamps: true,
  }
);

News.belongsTo(Author, { foreignKey: "author_id" });

const ContactMe = sequelize.define(
  "ContactMe",
  {
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
  },
  {
    timestamps: true,
  }
);
ContactMe.belongsTo(Author, { foreignKey: "author_id" });

const SocialMedia = sequelize.define(
  "SocialMedia",
  {
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
  },
  {
    timestamps: true,
  }
);

SocialMedia.belongsTo(Author, { foreignKey: "author_id" });

Author.sync({ alter: true })
  .then((data) => {
    const author = Author.build({
      image: "Test",
      name: "test",
      date_of_birth: "1995-08-06",
      biography: "test test test test test",
    });
    console.log("Table and model created");
    return author.save();
  })
  .then((data) => {})
  .catch((err) => {
    console.log("Error syncing table and model");
  });

export { sequelize, DataTypes };
