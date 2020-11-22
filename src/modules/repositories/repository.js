const {db} = require('../../database/mongo');

const Model = db.model('Repository', {
    id: Number,
    repoId: Number,
    name: String,
    owner: String,
    description: String,
    language: String,
    openIssues: Number,
    defaultBranch: String,
    url: String,
    createdAt: Date,
    updatedAt: Date,
    viewedAt: {type: Date, default: Date.now},
});

const addRepository = async (repository) => {
    const created = new Model(repository);
    return created.save();
}

const getRepositories = async () => Model.find();

module.exports = {
    addRepository,
    getRepositories
}