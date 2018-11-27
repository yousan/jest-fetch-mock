import fetch from 'node-fetch'

jest.mock('node-fetch', () => jest.fn())

describe('fetch-mock test', () => {
    it('check fetch mock test', async () => {
        const dummyResponse = Promise.resolve({
            ok: true,
            status: 200,
            json: () => {
                return {};
            },
        });
        fetch.mockImplementation(() => dummyResponse)
        await dummyResponse;
        console.log(dummyResponse);
        // makeRequest().then(function (data) { // success
        //     console.log('got data', data);
        // }).catch((e) => { // error
        //     console.log(e.message)
        // });
    });
});
