const Todo = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
      "todo",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        done: {
          type: DataTypes.TINYINT(1),
          allowNull: false,
          defaultValue: 0,
        },
      },// params2: 컬럼 정의
      {
        tableName: "todo",
        freezeTableName: true, 
        timestamps: false, 
      }
    );
    return model;
  };
  
  module.exports = Todo;