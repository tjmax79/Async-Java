function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await delay(1000); // Delay for 1 second
        console.log(value);
    }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);


async function simulateApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "Fetched data" });
        }, 2000);
    });
}

async function awaitCall() {
    const response = await simulateApiCall();
    console.log(response.data);
}

// Example usage
awaitCall();


async function simulateApiCallWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to fetch data"));
        }, 2000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const response = await simulateApiCallWithError();
        console.log(response.data);
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}

// Example usage
awaitCallWithErrorHandling();
