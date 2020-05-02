import {checkUrl} from '../client/js/nameChecker'


describe('Test, the function "checkUrl()" should exist' , () => {
    test('It should return true', async () => {
        expect(checkUrl).toBeDefined();
    });
});
describe('Test, the function "checkUrl()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof checkUrl).toBe("function");
    });
});

describe('Test, the function "checkUrl()" for valid url' , () => {
    var url1 = "https://www.nytimes.com/2020/04/30/world/asia/coronavirus-poverty-unemployment.html";
    test('return true', async () => {
        const response1 = checkUrl(url1);
        expect(response1).toBeDefined();
        expect(response1).toBe(true);
    });
});
describe('Test "checkUrl()" for invalid url' , () => {
    // I wrote an invalid url to make it invalid
    var url = "htpshttwdadps://wwww.skillsyouandwqdeed.com/ips/dealing-with-criticism.html";
    test('return false', async () => {
        const response = checkUrl(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});

