let fs = require('fs');
const express = require('express');
const app = express();

const cors = require('cors');

const data = fs.readFileSync('chemistry.json');
const element = JSON.parse(data);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
app.use(express.static('public'));
app.use(cors());

app.get('/elements', allData);

function allData(req, res) {
  res.send(element);
}
