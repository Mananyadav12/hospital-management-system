import dotenv from 'dotenv';
import connectTodb from './db/connect.db.js';

dotenv.config({ path: '/.env' });

connectTodb()
.then(() =>{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is listening on port: ${process.env.PORT}`);
    })   
})
.catch((error) =>{
    console.log("Database connection fail", error);
})
