import app from "./index.js"


const PORT = 3000

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
})