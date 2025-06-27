const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); 


const applyRoute = require('./routes/applyRoute');
app.use('/api', applyRoute); 
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
