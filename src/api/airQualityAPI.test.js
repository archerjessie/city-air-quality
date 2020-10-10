import { getFromUrl } from './airQualityAPI'

beforeEach(() => {
    fetch.resetMocks();
});

describe("getFromUrl", () => {
    it("should fetch from the url and pass data to callback", () => {
        fetch.mockResponseOnce(JSON.stringify({ data: "test data" }));
        const url = "https://google.com";
        const callback = jest.fn(data => {
            expect(data).toEqual("test data")
        });

        getFromUrl(url, callback);

        expect(fetch).toHaveBeenCalledWith(url);
    })
})