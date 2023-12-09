import Work from "./worksModel.js";
import Reviews from "./reviewsModel.js";

Work.hasMany(Reviews, { foreignKey: "work_id", onDelete: "CASCADE" });
Reviews.belongsTo(Work, { foreignKey: "work_id", onDelete: "CASCADE" });
