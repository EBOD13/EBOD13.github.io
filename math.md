---
layout: default
title: Math Problems
permalink: /math/
---

# Math Problems

## Inductive Proof 1

Prove:  
$$1\cdot2 + 2\cdot3+ 3\cdot4 + \dots + n(n+1) = \frac{n(n+1)(n+2)}{3}$$ for all $$n \ge 1$$.

### Base Case

For $$n=1$$:
$$1(1+1) = \frac{1(1+1)(1+2)}{3}$$
$$2 = \frac{6}{3}$$
$$2 = 2$$

Hence, the base case holds.

### Inductive Hypothesis

Assume the formula holds for some $$k \ge 1$$:
$$1\cdot2 + 2\cdot3 + \dots + k(k+1) = \frac{k(k+1)(k+2)}{3}$$

### Inductive Step

We must show it holds for $$k+1$$:
$$1\cdot2 + 2\cdot3 + \dots + k(k+1) + (k+1)(k+2) = \frac{(k+1)(k+2)(k+3)}{3}$$

Starting with the left side:
$$\frac{k(k+1)(k+2)}{3} + (k+1)(k+2)$$
$$= \frac{k(k+1)(k+2) + 3(k+1)(k+2)}{3}$$
$$= \frac{(k+1)(k+2)(k + 3)}{3}$$

Which matches the right side. Therefore, by induction, the formula holds for all $$n \ge 1$$.

## Inductive Proof 2

Prove:
$$1^2 + 3^2 + 5^2 + \dots + (2n-1)^2 = \frac{n(2n-1)(2n+1)}{3}$$ for all $$n \ge 1$$.

### Base Case

For $$n=1$$:
$$(2\cdot1-1)^2 = \frac{1(2\cdot1-1)(2\cdot1+1)}{3}$$
$$1 = \frac{1 \cdot 1 \cdot 3}{3}$$
$$1 = 1$$

Base case holds.

### Inductive Hypothesis

Assume for some $$k \ge 1$$:
$$1^2 + 3^2 + \dots + (2k-1)^2 = \frac{k(2k-1)(2k+1)}{3}$$

### Inductive Step

Show for $$k+1$$:
$$1^2 + 3^2 + \dots + (2k-1)^2 + (2(k+1)-1)^2 = \frac{(k+1)(2(k+1)-1)(2(k+1)+1)}{3}$$

Simplify the right side:
$$\frac{(k+1)(2k+1)(2k+3)}{3}$$

Starting with the left side:
$$\frac{k(2k-1)(2k+1)}{3} + (2k+1)^2$$
$$= \frac{k(2k-1)(2k+1) + 3(2k+1)^2}{3}$$
$$= \frac{(2k+1)[k(2k-1) + 3(2k+1)]}{3}$$
$$= \frac{(2k+1)(2k^2 - k + 6k + 3)}{3}$$
$$= \frac{(2k+1)(2k^2 + 5k + 3)}{3}$$
$$= \frac{(2k+1)(k+1)(2k+3)}{3}$$

Which matches the simplified right side. Therefore, by induction, the formula holds for all $$n \ge 1$$.
