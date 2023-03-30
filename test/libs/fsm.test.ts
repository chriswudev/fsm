import { createMachine, State, Value } from '../../libs';

describe('createMachine', () => {
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
  const q0 = Q[0];
  const F = Q;

  it('generates machine correctly', () => {
    const machine = createMachine(Q, Σ, q0, F, δ);
    const input = '1010';
    expect(
      parseInt(
        (input.split('') as Value[])
          .reduce((_: State, c: Value) => {
            return machine(c);
          }, Q[0])
          .split('')[1]
      )
    ).toBe(1);
  });

  it('throws error for invalid params', () => {
    let machine = null;
    try {
      const invalidQ = [];
      machine = createMachine(invalidQ, Σ, q0, F, δ);
    } catch (error) {
      expect(error.message).toBe('States(Q) is not valid!');
    }
    try {
      const invalidΣ = [];
      machine = createMachine(Q, invalidΣ, q0, F, δ);
    } catch (error) {
      expect(error.message).toBe('Input alphabet(Σ) is not valid!');
    }
    try {
      const invalidq0 = null;
      machine = createMachine(Q, Σ, invalidq0, F, δ);
    } catch (error) {
      expect(error.message).toBe('Initial state(q0) is not valid!');
    }
    try {
      const invalidF = ['S3'];
      machine = createMachine(Q, Σ, q0, invalidF, δ);
    } catch (error) {
      expect(error.message).toBe('Accepting/final states(F) is not valid!');
    }
    try {
      const invalidδ = 'function' as any;
      machine = createMachine(Q, Σ, q0, F, invalidδ);
    } catch (error) {
      expect(error.message).toBe('Transition function(δ) is not valid!');
    }
  });
});
