const index = require("../src/index.js");

describe("pathInserted", () => {
  it("Should be a function", () => {
    expect(typeof index.pathInserted).toBe("function");
  });
  it("Should return false if the user didn't enter a path", () => {
    expect(index.pathInserted()).toBe(false);
  });
  it("Should return true if the user entered a path", () =>{
    expect(index.pathInserted("./README.md")).toBe(true);
  });
});

describe("pathWorking", () =>{
  it("Should be a function", () => {
    expect(typeof index.pathWorking).toBe("function");
  });
  it("Should be false if the path doesn't exist", () => {
    expect(index.pathWorking("./README.txt")).toBe(false);
  });
  it("Should be true if the path exist", () => {
    expect(index.pathWorking("./README.md")).toBe(true);
  });
});

// describe ('pathIsAbsolute', () => {
//   it('should be true', () => {
//     expect(mdLinks.pathAbsolute("/home/laboratoria173/Laboratoria/GDL002-md-links/README.md")).toBe(true);
//   });
//   it('should be false', () => {
//     expect(mdLinks.pathAbsolute("Laboratoria/GDL002-md-links/README.md")).toBe(false);
//   });
// });

describe("pathDirectory", () =>{
  it("Should be a function", () => {
    expect(typeof index.pathDirectory).toBe("function");
  });
  it("Should be true if the path is a directory", () => {
    expect(index.pathDirectory("/Users/Lucero/Documents/JavaScript/GDL002-md-links")).toBe(true);
  });
  it("Should be false if the path is not a directory", () => {
    expect(index.pathDirectory("./README.md")).toBe(false);
  });
});

describe("fileMd", () => {
  it("Should be a function", () => {
    expect(typeof index.fileMd).toBe("function");
  });
  it("Should be true if the file is a .md", () => {
    expect(index.fileMd("./README.md")).toBe(true);
  });
  it("Should be false if the file is not a .md", () => {
    expect(index.fileMd("./README.txt")).toBe(false);
  });
});

test('should be read content of file with a asyncronous function', () => {
  readFile('../src/prueba.md', null).then((result) => {
    expect(result).equality('Content of file');
  });
});

// describe("readingFile", () => {
//   it("Should read the file", () =>{
//     expect(index.readingFile("./src/prueba.md")).toBe(true);
//   });
// });


