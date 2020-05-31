const express = require('express');

const app = express();

// incoming REQuest, outcoming RESponse
app.get('/', (req, res) => {
  res.json({
    message: 'Hello Meower 😺❤️',
  });
});

app.listen(5001, () => {
  console.log('Listening on http://localhost:5001');
});
