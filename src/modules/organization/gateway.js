const {axiosInstance} = require('../../utils/axios')

const getAllCompanies = async () => axiosInstance.get('/organizations?since=135');

const getRepositoriesFromCompany = async (name) => axiosInstance.get(`${process.env.ORGANIZATION}/${name}${process.env.REPOSITORY}?sort=updated`);

module.exports = {
    getRepositoriesFromCompany,
    getAllCompanies
}