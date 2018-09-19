import {parse, BareBlockMove, structureEquals} from "alg"
import {KPuzzle, Puzzles} from "kpuzzle"
import {solve} from "../src"

describe("solve()", () => {
  it("should solve simple case", () => {
    const puzzle = new KPuzzle(Puzzles["333"])
    puzzle.applyBlockMove(BareBlockMove("R", 1));
    puzzle.applyBlockMove(BareBlockMove("U", 1));
    puzzle.applyBlockMove(BareBlockMove("R", -1));
    puzzle.applyBlockMove(BareBlockMove("F", -1));
    puzzle.applyBlockMove(BareBlockMove("U", 2));
    puzzle.applyBlockMove(BareBlockMove("L", -1));
   
    expect(structureEquals(parse("U' L F U2"), solve(puzzle.state)));
  });
});
