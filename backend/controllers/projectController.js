const { Project: Project} = require ("../models/Project");

const projectController = {
    create: async(req, res) => {
        try {
            const project = {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                language: req.body.language
            };

            const response = await Project.create(project);

            res.status(201).json({response, msg: "Project successfully created!"});

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async(req, res) => {
        try {
            const project = await Project.find();
            res.json(project); 

        } catch (error) {
            console.log(error);
        }
    },

    get: async(req, res) => {
        try {
            //id => req != GET
            //id => req === POST
            //id => URL === GET

            const id =  req.params.id;
            const project = await Project.findById(id);

            if(!project){
                res.status(204).json({msg: "Project not found!"});
                return;
            }

            res.json(project);  

        } catch (error) {
            console.log(error);
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const project = await Project.findById(id);

            if(!project){
                res.status(204).json({msg: "Project not found!"});
                return;
            }

            const deleteProject = await Project.findByIdAndDelete(id);
            res.status(200).json({deleteProject, msg: "Project deleted!"})
            res.json(project);

        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        const id = req.params.id;

        const project = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            language: req.body.language
        };

        const updateProject =  await Project.findByIdAndUpdate(id, project);

        if(!updateProject){
            res.status(204).json({msg: "Project not found!"});
            return;
        }

        res.status(200).json({project, msg: "The project has been updated!"});
    }
};

module.exports = projectController;