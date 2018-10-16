const chai = require("chai");
const expect = chai.expect;
const httpStatus = require("http-status");
const clientFactory = require("../client-factory");
const serverFactory = require("../server-factory");

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
                    expect(res.statusCode).to.equal(httpStatus.OK);
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
                    expect(res.statusCode).to.equal(httpStatus.CREATED);
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
                    expect(res.statusCode).to.equal(httpStatus.NO_CONTENT);
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
                    expect(res.statusCode).to.equal(httpStatus.NO_CONTENT);
                    done();
                });
        });
    }
    );
});

