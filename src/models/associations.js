import Works from "./worksModel.js";
import Reviews from "./reviewsModel.js";

Works.hasMany(Reviews, {
  foreignKey: "work_id",
  onDelete: "CASCADE",
  hooks: true,
});
Reviews.belongsTo(Works, {
  foreignKey: "work_id",
});

export { Works, Reviews };
