# Finite State Machine
finite state machine

## Finite Automation
A finite automaton (FA) is a 5-tuple (Q,Σ,q0,F,δ) where,
```
Q is a finite set of states;
Σ is a finite input alphabet;
q0 ∈ Q is the initial state;
F ⊆ Q is the set of accepting/final states; and 
δ:Q×Σ→Q is the transition function.
```
For any element q of Q and any symbol σ∈Σ, we interpret δ(q,σ) as the state to which the FA moves, if it is in state q and receives the input σ.

## Mod-Three FA
Based on the notation from the definition, our modulo three FSM would be configured as follows:
```
Q = (S0, S1, S2)
Σ = (0, 1)
q0 = S0
F = (S0, S1, S2)
δ(S0,0) = S0; δ(S0,1) = S1; δ(S1,0) = S2; δ(S1,1) = S0; δ(S2,0) = S1; δ(S2,1) = S2
```
