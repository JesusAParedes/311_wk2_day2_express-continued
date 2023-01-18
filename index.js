const express = require("express");
const app = express();
const port = process.env.PORT || 4001;

const commentRoutes = require('./routes/comments');
const contactRoutes = require('./routes/contacts');
const productRoutes = require('./routes/products');
const vehicleRoutes = require('./routes/vehicles');

app.use(express.json());
app.use(express.static('public'));
app.use(commentRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
