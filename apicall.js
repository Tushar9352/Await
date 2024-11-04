function apiCall(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data from ${url}`);
            } else {
                reject('No URL provided');
            }
        }, 2000);
    });
}

async function fetchDataSequentially() {
    try {
        console.log('Fetching data from API 1...');
        let data1 = await apiCall('https://api.example.com/data1');
        console.log(data1);

        console.log('Fetching data from API 2...');
        let data2 = await apiCall('https://api.example.com/data2');
        console.log(data2);

        console.log('Fetching data from API 3...');
        let data3 = await apiCall('https://api.example.com/data3');
        console.log(data3);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchDataInParallel() {
    try {
        console.log('Fetching data in parallel...');

        let [data1, data2, data3] = await Promise.all([
            apiCall('https://api.example.com/data1'),
            apiCall('https://api.example.com/data2'),
            apiCall('https://api.example.com/data3')
        ]);

        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataSequentially();
fetchDataInParallel();
