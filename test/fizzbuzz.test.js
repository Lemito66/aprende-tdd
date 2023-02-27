import { describe, it, expect } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  // Este test lo he desactivado porque es redundante

  /* it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function');
    }); */
  it("should throw if not a number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it("should throw a specific error message if not is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow("The parameter must be a number");
  });

  it("should throw a specific error message not a number is provided", () => {
    expect(() => fizzbuzz(NaN)).toThrow("The parameter must be a number");
  });

  it("should return 1 if 1 is provided", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it("should return 2 if 2 is provided", () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  it('should return "fizz" if number is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });

  // Este test ya no es necesario porque ya se cubre con el anterior

  /* it('should return 4 if number is 4', () => {
        expect(fizzbuzz(4)).toBe(4);
    }) */

  it('should return "buzz" if number is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
  });

  it('should return "fizzbuzz" if number is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
