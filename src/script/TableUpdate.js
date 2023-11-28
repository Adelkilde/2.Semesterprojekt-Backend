import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./database/database.js";
import Author from "../models/authorModel.js";
import News from "../models/newsModel.js";
import ContactMe from "../models/contactMeModel.js";
import Reviews from "../models/reviewsModel.js";
import Works from "../models/worksModel.js";
import SocialMedia from "../models/socialMediaModel.js";

function Syncing() {
  sequelize.sync({ alter: true });
}

// Author.create({
//   image: "src/assets/images/Author_CSG.jpg",
//   name: "Caroline Storgaard Gyldmark",
//   birth_year: 1999,
//   biography: "Placeholder",
// });

// Works.create({
//   author_id: 1,
//   image: "src/assets/images/Works_CSG.jpg",
//   title: "Jeg",
//   publication_date: "2021-07-01",
//   publisher: "Forfatterskabet",
//   average_rating: 5,
//   purchase_link: "https://www.forfatterskabet.dk/produkt/jeg/",
//   description:
//     "Jeg. Dig. Den. Du ser én. Jeg to. Du ser jeg. Jeg ser. Den og dig. Du tror, du ser jeg. Men det er den, du ser. Den er en illusion. Din ønskedatter. Ikke jeg.Den er deform i mine øjne. Ikke i dine. Fuldkommen bliver den. Aldrig. For den bærer. Mit præg. Ved at være den fik jeg din kærlighed, jeg aldrig fik.  Når jeg var. Jeg. Digtsamlingen ”Jeg” er en personlig fortælling i tre dele, som tager sit afsæt i et barns oplevelse af svigt og afsavn. Det bliver begyndelsen til et indre kaos, som i teenageårene udvikler sig til et psykisk sammenbrud, og en rejse ind i sindets dystre afkroge, som en uundgåelig konsekvens af jegets langsomme destruktion.",
// });

export default Syncing;
