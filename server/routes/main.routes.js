import { Router } from "express";
import { carsModel } from "../models/cars.js";
import { hash, compare } from "bcrypt";
import { userModel } from "../models/users.js";
import jwt from "jsonwebtoken";

const mainRouter = Router();

mainRouter.get('/cars', async (req, res) => {

    try {

        const data = await carsModel.find();
        const count = await carsModel.count();

        if (count > 0) {
            res.json(data);
        }

        else {
            res.json({ message: "No cars found" });
        }
        res.end();
    }
    catch (err) {
        console.log(err);
    }
});

mainRouter.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const encryptedPassword = await hash(password, 10);

    try {
        const user = await userModel.create({
            username,
            email,
            password: encryptedPassword,
        });
        res.status(201).json({ message: "User has been registered.", user });
        res.end();

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while registering the user." });
        re.end();
    }
});

mainRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.findOne({ username });

        if (!user) {
            res.status(401).json({ message: "Invalid Username" })
            res.end();
        }
        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid Password" })
            res.end();
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
        console.log("Generated Token:", token);

        res.status(200).json({ token });

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});


export default mainRouter;