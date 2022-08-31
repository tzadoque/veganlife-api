const express = require('express');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors());

  consign().include('libs').include('routers').into(app);

  return app;
};
