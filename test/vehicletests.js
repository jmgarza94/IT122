const expect = require("chai").expect;
const data = require("../data.js");

describe("Vehicle module", () => {
  it("does nada", () => {
    // add test code here
  });

  it("does return the requested vehicle item", () => {
    const vehicle = data.getItem("Lamborghini");
    expect(vehicle.make).to.not.be.undefined;
    expect(vehicle).to.deep.equal({
      ID: 1,
      make: "Lamborghini",
      model: "Huracan",
      year: 2018,
      color: "white",
    });
  });
  it("does return a different requested vehicle item", () => {
    const vehicle = data.getItem("Nissan");
    expect(vehicle.make).to.not.be.undefined;
    expect(vehicle).to.deep.equal({
      ID: 2,
      make: "Nissan",
      model: "GTR",
      year: 2012,
      color: "black",
    });
  });
  it("will not return invalid vehicle", () => {
    const result = data.getItem("taxi");
    expect(result).to.have.string('not found');
  });

  it("does add a new vehicle to the array", () => {
    const newVehicle = {
      ID: 6,
      make: "Hyundai",
      model: "Sonata",
      year: 2009,
      color: "brown",
    };
    const result = data.addItem(newVehicle);
    expect(result).to.be.true;
    expect(data.getAll().length).to.equal(7);
  });
  it("failed because item already exists", () => {
    const duplicateVehicle = {
      ID: 2,
      make: "Nissan",
      model: "GTR",
      year: 2012,
      color: "black",
    };
    const result = data.addItem(duplicateVehicle);
    expect(result).to.be.false;
    expect(data.getAll().length).to.equal(7);
  });

  it("does delete a vehicle from the array", () => {
    const currentCount = data.getAll().length;
    const result = data.deleteItem("Lamborghini");
    expect(data.getAll().length).to.equal(currentCount - 1);
    expect(result).to.be.true;
  });
  it("does not delete a nonexistent vehicle", () => {
    const currentCount = data.getAll().length;
    const result = data.deleteItem("Taxi");
    expect(data.getAll().length).to.equal(currentCount);
    expect(result).to.be.false;
  });
});