const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    //1:n
    //post모델에 userid 추가됨 
    db.Post.belongsTo(db.User);
    //n:m
    //posthashtag 모델에 hashtagid 추가
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  }
};