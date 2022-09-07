const express = require("express");
const app = express();
const axios = require("axios");
const port = 5000; 
const cors = require("cors");


app.use(cors());

app.get("/", async (request, response) => {
  const serachTerm = request.query.q;
  try {
    const searchData = await axios.get(
      `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${serachTerm}`
    );
    response.send(searchData.data);
  } catch (err) {
    console.log(err);
    response.status(404).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
})

