// Imports 
const express = require('express');
const PORT = process.env.PORT || 8080
const app = express();

// Mounting the router
const router = express.router();
app.use('/api/user', router);

const createUser = (req, res) => {

}

const getUser = (req, res) => {
    
}

const getUserById = (req, res) => {

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

router.router('/')
        .get(getUser)
        .post(createUser)
        .patch(updateUser)
        .delete(deleteUser);

router.router('/:id').get(getUserById);

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});