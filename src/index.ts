import app from "./app";
import mongooseConnection from './config/mongooseConfig';

mongooseConnection('mongodb://127.0.0.1:27017/favs_api');

app.listen(4000, () => console.log(`Server started on port 4000`));
