const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

const PORT = 5000; // Hardcoded port, no .env needed
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
