const request = require('request');
const fs = require('fs');

function breedFetcher (breed) {
    const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
    request(URL, (error, response, body) => {
        if (error) {
            console.log('error : ', error);
        }

        if (response.statusCode !== 200) {
            console.log(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`);
            return;
        }
        // console.log(body);
        // console.log(typeof body); => string
        const data = JSON.parse(body);
        // console.log(data);
        // console.log(typeof data); => object
        if (data[0]) {
            console.log(data[0].description)
        } else {
            console.log('Error: the requested breed is not found.')
        }
    });
}


breedFetcher(process.argv[2]);

//https://docs.thecatapi.com/api-reference/breeds/breeds-search