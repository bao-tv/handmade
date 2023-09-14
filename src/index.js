const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routers/web')

const port = 8000;
//template engine
configViewEngine(app);

//khai báo routes
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  });