const { hands } = require('../rock_paper_scissors_shoot.js');
var { getHand } = require('../rock_paper_scissors_shoot.js');
var { playRound } = require('../rock_paper_scissors_shoot.js');

//toBe
describe("test hands array item(s)", () => {
    test("first item in hands array should be rock", () => {
        expect(hands[0]).toBe('rock');
    });
});

//toHaveLength
describe("hands array should have an index of 2 (length of 3)", () => {
    test("hands array length", () => {
        expect(hands).toHaveLength(3);

    });
});

//toBeTruthy
describe("getHand function is a truthy value", () => {
    test("truthy value", () => {
        expect(getHand).toBeTruthy();

    });
});



//toHaveBeenCalled
describe("getHand should be called", () => {
    test("if getHand has been called", () => {
        getHand = jest.fn();
        expect(getHand).toHaveBeenCalled();
    });
});

//toHaveReturned
const getHandMock = jest.fn(() => hands[parseInt(Math.random()*10)%3]);
describe("getHand should have returned hands for each player", () => {
    test("check getHand returns hands", () => {
        expect(getHandMock).toHaveReturned();

    });
});

