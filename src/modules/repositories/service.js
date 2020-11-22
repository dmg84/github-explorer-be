const {addRepository, getRepositories} = require("./repository");

const getAllTrackedRepositories = async () => await getRepositories();

const trackRepository = async (repository) => await addRepository(repository);

module.exports = {
    getAllTrackedRepositories,
    trackRepository
}