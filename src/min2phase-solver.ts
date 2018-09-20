import {Sequence} from "alg"
import {Transformation} from "kpuzzle"

export interface Min2PhaseSolver {
  initialize: () =>Promise<void>;
  solve: (state: Transformation) =>Promise<Sequence>;
}
