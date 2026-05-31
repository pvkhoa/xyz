require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;

const sequelize = require("./conectdtb");
const Talk = require("./model/talk");

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({ message: "Server is running" });
});

app.get("/apitest",(req,res)=>{
    res.json({
        "name": "Node.js & TypeScript",
        "image": "mcr.microsoft.com/devcontainers/typescript-node:4-24-trixie",
        "features": {
            "ghcr.io/devcontainers-extra/features/mongodb-atlas-cli-homebrew:1": {},
            "ghcr.io/devcontainers-extra/features/mysql-homebrew:1": {}
        },
        "customizations": {
            "vscode": { "extensions": ["GitHub.copilot"] }
        }
    });
});

app.post("/apipost",(req,res)=>{    
    console.log(req.body);
    res.json({ "message":"success" });
});

app.get("/apisql", async (req,res)=>{
    try {
        const talk = await Talk.findAll({
            where: { trang_thai: "hoat_dong" }
        });
        res.json(talk);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/apisql", async (req, res) => {
    try {
        const newTalk = await Talk.create({
            ten_nv: req.body.ten_nv,
            cv: req.body.cv,
            trang_thai: req.body.trang_thai || 'hoat_dong' 
        });
        res.json({ message: "Create successful", data: newTalk });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/apisql/:id", async (req, res) => {
    try {
        const talkId = req.params.id;
        await Talk.update(
            { ten_nv: req.body.ten_nv, cv: req.body.cv, trang_thai: req.body.trang_thai },
            { where: { id: talkId } }
        );
        res.json({ message: "Update successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/apisql/:id", async (req, res) => {
    try {
        const talkId = req.params.id;
        await Talk.destroy({ 
            where: { id: talkId } 
        });
        res.json({ message: "Delete successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port,()=>{
    console.log("listen is port success", port);
});