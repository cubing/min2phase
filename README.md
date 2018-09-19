# `min2phase.js`

A JS package for Chen Shuang's Kociemba-based [min2phase](https://github.com/cs0x7f/min2phase) 3x3x3 solver.

## Usage
    
    import {BareBlockMove} from "alg"
    import {KPuzzle, Puzzles} from "kpuzzle"
    import {initialize, solve} from "min2phase"

    const puzzle = new KPuzzle(Puzzles["333"])
    puzzle.applyBlockMove(BareBlockMove("R", 1));

    // Optional: pre-initialize ahead of time.
    initialize();
   
    console.log(solve(puzzle.state));
