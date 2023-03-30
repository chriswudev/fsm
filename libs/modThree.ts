import { createMachine } from './fsm';

export type State = 'S0' | 'S1' | 'S2';
export type Value = '0' | '1';

const Q: State[] = ['S0', 'S1', 'S2'];
const Σ: Value[] = ['0', '1'];

const transitions: { [key: string]: State } = {
  S00: Q[0],
  S01: Q[1],
  S10: Q[2],
  S11: Q[0],
  S20: Q[1],
  S21: Q[2],
};

function δ(q: State, σ: Value) {
  return transitions[`${q}${σ}`];
}

export function generateModThreeMachine() {
  const q0 = Q[0];
  const F = Q;
  return createMachine(Q, Σ, q0, F, δ);
}

export function getModThree(input: string) {
  const modThreeMachine = generateModThreeMachine();
  return parseInt(
    (input.split('') as Value[])
      .reduce((_: State, c: Value) => {
        return modThreeMachine(c);
      }, Q[0])
      .split('')[1]
  );
}
