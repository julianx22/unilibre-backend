const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;  // ¡Importante!

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Servidor funcionando',
    universidad: 'Universidad Libre de Colombia'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
