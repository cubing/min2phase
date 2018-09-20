import {Sequence} from "alg"
import {Transformation} from "kpuzzle"
import {Min2PhaseSolver} from "./min2phase-solver"
import {initialize, solve} from "./min2phase-wrapper"


export const onThread: Min2PhaseSolver = {
  initialize: async function(): Promise<void> {
    return initialize();
  },
  solve: async function(state: Transformation): Promise<Sequence> {
    return solve(state);
  }
}
