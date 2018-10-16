const chai = require("chai");
const expect = chai.expect;
const clientFactory = require("../clientFactory");
const serverFactory = require("../serverFactory");

var client;
var server;

describe("Values Controller E2E Tests", () => {
    before((done) => {
        client = clientFactory.createClient();
        server = serverFactory.createServer();
        done();
    });

    after((done) => {
        client.close();
        server.close(done);
    });

    describe("GET", () => {
        it("should return the expected response", (done) => {
            const expectedValues = [1, 2, 3];

            client.get(
                "/api/values",
                (err, _, res, actualValues) => {
                    expect(err).to.be.null;
                    expect(res.statusCode).to.equal(200);
                    expect(actualValues).to.have.all.members(expectedValues);
                });

            done();
        });
    }
    );

    describe("POST", () =>{
        it("should return the expected response", (done) => {
            const expectedValues = [1, 2, 3];
            client.post(

                "/api/values",
                expectedValues,
                (err, _, res, actualValues) => {
                    expect(err).to.be.null;
                    expect(res.statusCode).to.equal(201);
                    expect(actualValues).to.have.all.members(expectedValues);
                    done();
                });
        });
    }
    );

    describe("PUT", () =>{
        it("should return the expected response", (done) => {
            client.put(
                "/api/values",
                [1, 2, 3],
                (err, _, res, resBody) => {
                    expect(err).to.be.null;
                    expect(resBody).to.be.empty;
                    expect(res.statusCode).to.equal(204);
                    done();
                });
        });
    }
    );

    describe("DELETE", () =>{
        it("should return the expected response", (done) => {
            client.del(
                "/api/values",
                (err, _, res, resBody) => {
                    expect(err).to.be.null;
                    expect(resBody).to.be.empty;
                    expect(res.statusCode).to.equal(204);
                    done();
                });
        });
    }
    );
});

