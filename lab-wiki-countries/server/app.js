const express = require("express");
const app = express();
const countries = require("../starter-code/src/countries.json");

app.get("/countries", (req, res) => {
  res.json(countries);
});

const getCountryByCode = cca3 => countries.find(el => el.cca3 === cca3);

app.get("/countries/:countryCode", (req, res) => {
  const country = { ...getCountryByCode(req.params.countryCode) };

  country.borders = country.borders.map(cca3 => getCountryByCode(cca3));

  console.log("REQUEST : ", req.params.countryCode);

  res.json(country);
});

app.listen(5555);
