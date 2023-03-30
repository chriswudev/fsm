import { throwError } from './error';
import { arrayIncludes } from './utils';

/**
 * @param Q is a finite set of states
 * @param Σ is a finite input alphabet
 * @param q0 ∈ Q is the initial state
 * @param F ⊆ Q is the set of accepting/final states
 * @param δ: Q×Σ→Q is the transition function
 * @returns a finite state machine
 */
export function createMachine<TState, TValue>(
  Q: TState[],
  Σ: TValue[],
  q0: TState,
  F: TState[],
  δ: (q: TState, σ: TValue) => TState
) {
  validateMachineConfig(Q, Σ, q0, F, δ);
  let q = q0;
  return function machine(σ: TValue): TState {
    q = δ(q, σ);
    return q;
  };
}

function validateMachineConfig<TState, TValue>(
  Q: TState[],
  Σ: TValue[],
  q0: TState,
  F: TState[],
  δ: (q: TState, σ: TValue) => TState
) {
  if (!Q || Q.length === 0) {
    throwError('States(Q) is not valid!');
  }
  if (!Σ || Σ.length === 0) {
    throwError('Input alphabet(Σ) is not valid!');
  }
  if (q0 === undefined || q0 === null || !Q.includes(q0)) {
    throwError('Initial state(q0) is not valid!');
  }
  if (!F || F.length === 0 || !arrayIncludes(Q, F)) {
    throwError('Accepting/final states(F) is not valid!');
  }
  if (typeof δ !== 'function') {
    throwError('Transition function(δ) is not valid!');
  }
}
