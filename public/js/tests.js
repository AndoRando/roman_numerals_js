var roman = require("./roman");
var expect = require('chai').expect;

describe("roman numerals", function() {

  // DESCENDING LOGIC

  it("returns M for 1000", function() {
    expect(roman(1000)).to.eq("M");
  });
  it("returns MM for 2000", function() {
    expect(roman(2000)).to.eq("MM");
  });

  it("returns MMD for 2500", function() {
    expect(roman(2500)).to.eq("MMD");
  });

  it("returns MMDC for 2600", function() {
    expect(roman(2600)).to.eq("MMDC");
  });

  it("returns MMDCL for 2650", function() {
    expect(roman(2650)).to.eq("MMDCL");
  });

  it("returns MMDCLX for 2660", function() {
    expect(roman(2660)).to.eq("MMDCLX");
  });

  it("returns MMDCLXV for 2665", function() {
    expect(roman(2665)).to.eq("MMDCLXV");
  });

  it("returns MMDCLXVI for 2666", function() {
    expect(roman(2666)).to.eq("MMDCLXVI");
  });

  it("returns MMDCCLXXXVIII for 2788", function() {
    expect(roman(2788)).to.eq("MMDCCLXXXVIII");
  });

  // ASCENDING LOGIC

  it('returns IV for 4', function() {
    expect(roman(4)).to.eq("IV");
  });

  it('returns IX for 9', function() {
    expect(roman(9)).to.eq("IX");
  });

  it('returns XLIX for 49', function() {
    expect(roman(49)).to.eq("XLIX");
  });

  it('returns XCIII for 93', function() {
    expect(roman(93)).to.eq("XCIII");
  });

  it('returns CDLXXXIX for 489', function() {
    expect(roman(489)).to.eq("CDLXXXIX");
  });

  it('returns MMMCMXCIX for 3999', function() {
    expect(roman(3999)).to.eq("MMMCMXCIX");
  });

});
