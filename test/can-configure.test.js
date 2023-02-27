import { describe, expect, it } from "vitest";
import { canConfigure } from "../src/canConfigure";

describe("canConfigure", () => {
  /* it('should be a function', () => {
    expect(canConfigure).toBeTypeOf("function");
  }); */

  it("should throw if first parameter is missing", () => {
    expect(() => canConfigure()).toThrow();
  });

  it("should throw if first parameter is not a string", () => {
    expect(() => canConfigure(2)).toThrow();
  });

  it("should return a boolean", () => {
    expect(canConfigure("a", "b")).toBeTypeOf("boolean");
  });
  it("should return false if strings provided have different length", () => {
    expect(canConfigure("a", "bb")).toBe(false);
  });

  it("should return false if strings provided have different number of unique letters", () => {
    expect(canConfigure("abc", "ddd")).toBe(false);
  });

  it("should return false if strings provided have different length even with", () => {
    expect(canConfigure("abc", "ab")).toBe(false);
  });

  it("should return false if strings has differente order of transformation", () => {
    expect(canConfigure("XBOX", "XXBO")).toBe(false);
  });
});
