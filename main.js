const fs = require('fs')
const axios = require('axios')
const qs = require('querystring')

/**
 * Made by Muhammad Naufal Al Fattah
 * @param {String} path | Image path
 * @returns {String} base64
 */
async function fileToBase64(path){
    return new Promise(function (resolve, reject){
        return fs.readFile(path, 'base64', function (err, data){
            if (err){
                reject(err)
            }
            resolve(data)
        })
    })
}

module.exports = turunet_uploader = async (path) => {
    const file = await fileToBase64(path)
    const upload = axios.post("https://turupedia.net/api/1/upload", qs.stringify({
        key: "turunet",
        source: file,
        format: "json"
    }))
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err.response.data
    })
    return upload
}