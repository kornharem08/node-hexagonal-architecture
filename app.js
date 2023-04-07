const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const database = require('./config/database');
const userRoutes = require('./routes/user.routes');

app.use(express.json());
app.use('/users', userRoutes);


database.connect();
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});