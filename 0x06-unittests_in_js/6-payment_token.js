async function getPaymentTokenFromAPI(success) {
    if (success) {
        return new Promise((resolve) => {
            const data = {data: 'Successful response from the API' };
            resolve(data);
        })};
}
module.exports = getPaymentTokenFromAPI
