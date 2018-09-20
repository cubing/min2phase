import {Sequence, fromJSON} from "alg"
import {Transformation} from "kpuzzle"
import {Min2PhaseSolver} from "./min2phase-solver"

import * as _AsyncWorker from "./min2phase.worker";
export const AsyncWorker = _AsyncWorker;

// TODO: Support multiple workers?
var asyncWorker: typeof AsyncWorker | undefined = undefined;
function worker(): typeof AsyncWorker {
  if (!asyncWorker) {
    asyncWorker = (AsyncWorker as any)();
  }
  return <typeof AsyncWorker>asyncWorker;
}

export const offThread: Min2PhaseSolver = {
  initialize: async function(): Promise<void> {
    return worker().initialize();
  },
  solve: async function(state: Transformation): Promise<Sequence> {
    return fromJSON(await worker().solve(state));
  }
}
