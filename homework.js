// app.js

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function processData(data) {
    return data.reduce((acc, val) => acc + val, 0);
}
// finding the maximum value
function processDataAsync(data) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.length === 0) {
                reject('No data provided.');
            } else {
                resolve(Math.max(...data));
            }
        }, 1000);
    });
}

// Function with intentional error for testing
function processDataError(data) {
    if (!data || data.length === 0) {
        throw new Error('Invalid data provided.');
    }
    return data.map((item) => item * 2);
}

module.exports = { fetchData, processData, processDataAsync, processDataError };
