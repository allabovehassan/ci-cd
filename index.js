const app = require('express')();

app.get("/", (req, res) => {
    res.send(`Api Route Working Fine`)
})


app.listen(9090, () => {
    console.log(`Server is running at 9090`)
}) 