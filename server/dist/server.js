import express from 'express';
import cors from 'cors'; // Importing CORS
import db from './config/connection.js';
import routes from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 3001;
// Enable CORS for all domains (you can replace '*' with your frontend URL for more security)
app.use(cors()); // Enabling CORS middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(routes);
db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
