const index = require("../index.js");

describe("pathInserted", () => {
  it("Should return false", () => {
    expect(index.pathInserted()).toBe(false);
  });
  it("Should return true", () =>{
    expect(index.pathInserted("./README.md")).toBe(true);
  });
});

describe("pathWorking", () =>{
  it("Should be false", () => {
    expect(index.pathWorking("./README.txt")).toBe(false);
  });
  it("Should be true", () => {
    expect(index.pathWorking("./README.md")).toBe(true);
  });
});

//describe ('pathIsAbsolute', () => {
//   it('should be true', () => {
//     expect(mdLinks.pathAbsolute("/home/laboratoria173/Laboratoria/GDL002-md-links/README.md"))
//       .toBe(true);
//   });
//   it('should be false', () => {
//     expect(mdLinks.pathAbsolute("Laboratoria/GDL002-md-links/README.md")).toBe(false);
//   });
// });

describe("pathDirectory", () =>{
  it("Should be true", () => {
    expect(index.pathDirectory("/Users/Lucero/Documents/JavaScript/GDL002-md-links")).toBe(true);
  });
  it("Should be false", () => {
    expect(index.pathDirectory("./README.md")).toBe(false);
  });
});

describe("fileMd", () => {
  it("Should be true", () => {
    expect(index.fileMd("./README.md")).toBe(true);
  });
  it("Should be false", () => {
    expect(index.fileMd("./README.txt")).toBe(false);
  });
});

describe("readingFile", () => {
  it("Should read the file", () =>{
    expect(index.readingFile("./prueba.md")).toBe(true);
  });
});

