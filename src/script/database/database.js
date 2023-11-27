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
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
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
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publication_date: {
      type: DataTypes.DATE,
      allowNull: false,
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
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review_text: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
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
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    submitted_date: {
      type: DataTypes.DATE,
      allowNull: false,
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
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
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
