const index = require("../src/index.js");

describe("pathInserted", () => {
  it("Should return false if the user didn't enter a path", () => {
    expect(index.pathInserted()).toBe(false);
  });
  it("Should return true if the user entered a path", () =>{
    expect(index.pathInserted("./README.md")).toBe(true);
  });
});

describe("pathWorking", () =>{
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
  it("Should be true if the path is a directory", () => {
    expect(index.pathDirectory("/Users/Lucero/Documents/JavaScript/GDL002-md-links")).toBe(true);
  });
  it("Should be false if the path is not a directory", () => {
    expect(index.pathDirectory("./README.md")).toBe(false);
  });
});

describe("fileMd", () => {
  it("Should be true if the file is a .md", () => {
    expect(index.fileMd("./README.md")).toBe(true);
  });
  it("Should be false if the file is not a .md", () => {
    expect(index.fileMd("./README.txt")).toBe(false);
  });
});

describe("readingFile", () => {
  it("Should read the file", () =>{
    expect(index.readingFile("./src/prueba.md")).toBe(true);
  });
});

describe("getLinks", () => {
  it("Should identify the link '[Google](https://www.google.com)' and return an array of objects", () => {
    expect(index.getLinks("https://www.google.com")).toEqual("https://www.google.com");
  });
 });

//   describe('markdown-it', () => {
//     var md = require('../')({
//       html: true,
//       langPrefix: '',
//       typographer: true,
//       linkify: true
//     });
// });
