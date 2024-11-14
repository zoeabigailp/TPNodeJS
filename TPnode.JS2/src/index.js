import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;
const url = "https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json";


fetch(url)
.then(response => response.json())
.then(data => console.log("Data:", data))
.catch(error => console.error("Error:", error));

app.listen(port, () => {
    console.log("System run for port 3000");
})