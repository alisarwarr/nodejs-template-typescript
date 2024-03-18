import app from "../config/app";
import connectDB from "../config/connectDB";


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});


export default app;