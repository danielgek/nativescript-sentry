var Sentry = require("nativescript-sentry").Sentry;
var sentry = new Sentry();

describe("greet function", function() {
    it("exists", function() {
        expect(sentry.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(sentry.greet()).toEqual("Hello, NS");
    });
});