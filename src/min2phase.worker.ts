import {Sequence} from "alg"
import {Transformation} from "kpuzzle"
import {
  initialize as wrappedInitialize,
  solve as wrappedSolve
} from "./min2phase-wrapper"

export async function initialize(): Promise<void> {
  return wrappedInitialize();
}

export async function solve(state: Transformation): Promise<Sequence> {
  return wrappedSolve(state);
}
