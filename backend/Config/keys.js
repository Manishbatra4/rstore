module.exports = {
  port: process.env.PORT,
  sql_db: {
    host: process.env.SQL_HOST,
    database: process.env.SQL_DATABASE,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    port: process.env.SQL_PORT,
    dialect: "mysql",
  },
  jwt: {
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    accessTokenLife: "1d",
    refreshTokenLife: "7d",
  },
};
