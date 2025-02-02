import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    
    test('should return andrew id', () => {
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My andrewID is xinyic2."
          ));
    });

    test('should return largest', () => {
        const query = "largest 1 2 3";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "3"
          ));
    });

    test('should return square and cube', () => {
        const query = "largest 1 2 3";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "3"
          ));
    });

    test('should return power', () => {
        const query = "power 3 2";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "9"
          ));
    });

    test('should return prime', () => {
        const query = "prime 2, 16, 12, 21?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "2"
          ));
    });
});