const { Project: Project} = require ("../models/Project");
const mongoose = require("mongoose");

const projectController = {
    insertProject: async(req, res) => {
        try {
            const project = {
                title: req.body.title,
                description: req.body.description,
                image: req.file.filename,
                language: req.body.language
            };

        if(!project){
            res.status(422).json({
                errors: ["Houve um problema, por favor tente novamente mais tarde."]
            });
            return;
        };
            const response = await Project.create(project);

            res.status(201).json({response, msg: "Project successfully created!"});

        } catch (error) {
            console.log(error);
        }
    },

    getAllProjects: async(req, res) => {
        try {
            const project = await Project.find();

            if(!project){
                res.status(404).json({msg: "Projects not found!"});
                return;
            }

            if(!project.length === true){
                res.status(404).json({msg: "Don't have Projects!"});
                return;
            }

            res.json(project); 

        } catch (error) {
            res.status(404).json({msg: "Project not found!"});
        }
    },

    getProject: async(req, res) => {
        try {
            //id => req != GET
            //id => req === POST
            //id => URL === GET

            const id =  req.params.id;
            const project = await Project.findById(id);
            res.json(project);  

        } catch (error) {
            res.status(404).json({msg: "Project not found!"});
        }
    },

    deleteProject: async(req, res) => {
        try {
            const id = req.params.id;

            const project = await Project.findById(id);

            if(!project){
                res.status(404).json({msg: "Project not found!"});
                return;
            }

            const deleteProject = await Project.findByIdAndDelete(id);
            res.status(200).json({deleteProject, msg: "Project deleted!"})

        } catch (error) {
            res.status(404).json({msg: "Project not found"});
        }
    },

    updateProject: async (req, res) => {
        const id = req.params.id;

        const project = {
            title: req.body.title,
            description: req.body.description,
            language: req.body.language
        };

        const updateProject =  await Project.findByIdAndUpdate(id, project);
        if(!updateProject){
            res.status(404).json({msg: "Project not found!"});
            return;
        }

        res.status(200).json({project, msg: "The project has been updated!"});
    },
};

module.exports = projectController;