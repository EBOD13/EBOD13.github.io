---
layout: default
title: Math Problems
permalink: /math/
---

# Math Problems

## Inductive Proof 1

Prove:  
$1\cdot2 + 2\cdot3+ 3\cdot4 + \dots + n(n+1) = \frac{n(n+1)(n+2)}{3}$

### Base Case:

$$n=1 \Rightarrow 1(1+1) = \frac{1(1+1)(1+2)}{3} \Rightarrow 2 = \frac{6}{3} = 2$$  
✔️ Base case holds.

### Inductive Hypothesis:

Assume:
$$1\cdot2 + 2\cdot3 + \dots + k(k+1) = \frac{k(k+1)(k+2)}{3}$$

### Step Case: Show it holds for \( k+1 \)

Add \( (k+1)(k+2) \) to both sides:
$$\frac{k(k+1)(k+2)}{3} + (k+1)(k+2)$$  
$$= \frac{(k(k+1)(k+2) + 3(k+1)(k+2))}{3}$$  
$$= \frac{(k+1)(k+2)(k+3)}{3}$$

---
