import Sequelize from "sequelize";

const sequelize = new Sequelize(
    process.env.POSTGRES_STRING,
    {
        dialect: "postgres",
        underscored: true,
        define: {
            timestamps: false
        }
    }
)

export default sequelize;