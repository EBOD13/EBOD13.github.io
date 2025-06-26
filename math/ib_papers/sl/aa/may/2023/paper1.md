# IB Math AA HL - May 2023 - Paper 1

## Question 1

**Content:** Point P has coordinates (-3, 2) and point Q has coordinates (15, -8). Point M is the midpoint of [PQ].

(a) Find the coordinates of M.
<br/>
Line $L$ is perpendicular to [PQ] and passes through M.

(b) Find the gradient of $L$ <br/>
(c) Hence, write down the equation of $L$.

**Solution:**
(a) Given the coordinates of two points $P (-3, 2)$ and $Q(15, -8)$, we can find the midpoint $M$ of the segment $\overline{PQ}$ using the midpoint formula (see page 2 of the formula booklet):

$$ M = \left(\frac{x_1 + x_2}{2}, \frac{y_1+ y_2}{2}\right)$$

Substitute the coordinates of $P$ and $Q$ as $x_1, y_1$ and $x_2, y_2$, respectively. We obtain:

$$ M = \left(\frac{-3 + 15}{2}, \frac{2 + -8}{2}\right)$$
$$ M = \left(\frac{12}{2}, \frac{-6}{2}\right)$$
$$ M = (6, -3)$$

(b) Now, we have a line $L$ perpendicular to our segment $\overline{PQ}$. And more importantly, we are told that $L$ passes through $M$. This is important because it tells us that $L$ bisects $\overline{PQ}$ at a right angle.

What we can do next is recall that two lines are perpendicular if they intersect at a 90° angle, and the product of their slopes (also called gradients) is equal to $-1$.

That is:
$$m_1\cdot m_2 = -1$$

Where $m_1$ is the slope of the first line and $m_2$ is the slope of the second line.

Thus, if we know the gradient of one, we can easily find the other's.

Since we are given the coordinates of the segment $\overline{PQ}$, we can use the slope formula between two points to find the slope of $\overline{PQ}$ (see page 5 of the booklet)

$$ m = \left(\frac{y_2 - y_1}{x_2 - x_1} \right)$$

$$ m_1 = \left(\frac{-8 - 2}{15 -(-3)} \right)$$
$$ m_1 = \frac{-10}{18} = \frac{-5}{9}$$

Hence to find the gradient of $L$:
$$\frac{-5}{9} \cdot m_2 = -1 $$

Multiply by the reciprocal of $\frac{-5}{9}$ on both sides:

$$m_2 = \frac{9}{5}$$

(c) Great! We now have everything we need to write the equation of line $L$. Using the slope we just found (which is perpendicular to $\overline{PQ}$) and the midpoint $M$ through which $L$ passes, we can apply the point-slope form of a line:

$$y - y_1 = m(x - x_1)$$

where $m$ is the slope and $(x_1, y_1)$ is a point on the line—in this case, the midpoint $M$.

$$y - (-3) = \frac{9}{5}(x - 6)$$
$$y + 3 = \frac{9}{5}x - \frac{54}{5}$$
$$y = \frac{9}{5}x - \frac{54}{5} - 3$$
$$y = \frac{9}{5}x - \frac{69}{5}$$

Hence:
$$L = \frac{9}{5}x - \frac{69}{5}$$

## Question 2

**Content:** The function $f$ is defined by $f(x) = \frac{7x+7}{2x-4}$ for $x \in \mathbb{R}\, x \ne 2.$

(a) Find the zero of $f(x)$  
(b) For the graph of $y = f(x)$, write down the equation of  
&nbsp;&nbsp;&nbsp;&nbsp;(i) the vertical asymptote  
&nbsp;&nbsp;&nbsp;&nbsp;(ii) the horizontal asymptote  
(c) Find $f^{-1}(x)$, the inverse function of $f(x).$

**Solution:**

(a) To find the zero, set $f(x) = 0$:
$$\frac{7x+7}{2x-4} = 0$$
$$7x + 7 = 0$$

<div style="text-align: center;">
  <div style="display: inline-block; border: 1px solid black; padding: 4px;">
    $x = -1$
  </div>
</div>

(b)

&nbsp;&nbsp;&nbsp;&nbsp;(i) To find the vertical asymptote, set the denominator equal to zero.
$$2x-4 = 0$$
$$2x = -4$$
$$x=-2$$
&nbsp;&nbsp;&nbsp;&nbsp;(ii) To find the horizontal asymptote, we find the limit of the function as $x$ approaches infinity:
$$\lim_{x\to\infty} \frac{7x+7}{2x-4} = \frac{7}{2}$$
$$y = \frac{7}{2}$$

(c) To find the inverse:
$$y = \frac{7x+7}{2x-4}$$
Swap $x$ and $y$ and solve for $y$:
$$x = \frac{7y+7}{2y-4}$$
$$x(2y-4) = 7y+7$$
$$2xy - 4x = 7y + 7$$
$$2xy - 7y = 4x + 7$$
$$y(2x - 7) = 4x + 7$$
$$y = \frac{4x+7}{2x-7}$$
Therefore:
$$f^{-1}(x) = \frac{4x+7}{2x-7}$$

## Question 3

**Content:** On a Monday at an amusement park, a sample of 40 visitors was randomly selected as they were leaving the park. They were asked how many times that day they had been on a ride called The Dragon. This information is summarized in the following frequency table.

<br/>
<table border="1" cellspacing="0" cellpadding="6" style="text-align: center; ">
 
<!-- Header -->
  <tr>
    <th style="padding: 5px;"><strong>Number of times on The Dragon</strong></th>
    <th style="padding: 5px;"><strong>Frequency</strong></th>
  </tr>
<!-- Rows -->
  <tr><td>0</td><td>6</td></tr>
  <tr><td>1</td><td>16</td></tr>
  <tr><td>2</td><td>13</td></tr>
  <tr><td>3</td><td>2</td></tr>
  <tr><td>4</td><td>3</td></tr>
</table>

<br/>
It can be assumed that this sample is representative of all visitors to the park for the following day.

(a) For the following day, Tuesday, estimate

&nbsp;&nbsp;&nbsp;&nbsp;(i) the probability that a randomly selected visitor will ride <i>The Dragon</i>.

&nbsp;&nbsp;&nbsp;&nbsp;(ii) the expected number of times a visitor will ride <i>The Dragon</i>.

It is known that 1000 visitors will attend the amusement park on Tuesday. The Dragon can carry a maximum of 10 people each time it runs.

(b) Estimate the minimum number of times <i>The Dragon</i> must run to satisfy demand.
**Solution:**

&nbsp;&nbsp;&nbsp;&nbsp;(a)(i) Referring to the frequency table, we observe that a certain number of individuals rode The Dragon. These individuals were randomly selected from a group of 40 people. To calculate the probability that a randomly chosen person rode The Dragon, we sum the frequency of those who rode The Dragon and divide by the total number of people surveyed (i.e., 40). Note that we should exclude the case where no one went to _The Dragon_.

Thus:
$$\text{Rode at least once: } 16 + 13 + 2 + 3 = 34 $$
$$ \text{Probability} = \frac{34}{40}$$

&nbsp;&nbsp;&nbsp;&nbsp;(ii) To calculate the expected value, we can use the formula provided in the booklet (page 10).
$$E(X) = \mu = \sum x P(X=x)$$

Before proceeding, recall that the expected value (denoted by $\mu$)represents the mean of a discrete random variable — that is, the long-run average outcome, where each value is weighted by its probability.

Using the formula, we should be computing:

$$ 0 \cdot \frac{6}{40} + 1 \cdot \frac{16}{40} + 2 \cdot \frac{13}{40} + 3 \cdot \frac{2}{40} + 4 \cdot \frac{3}{40}$$

Or similarly, we could take out the $\frac{1}{40}$:
$$E(X) = \frac{1}{40}(0\cdot 6 + 1 \cdot 16 + 2 \cdot 13 + 3 \cdot 2 + 4 \cdot 3)$$
$$\frac{1}{40}(16 + 26 +6 + 12)$$
$$\frac{1}{40}(16 + 26 +6 + 12)$$

Simplify (divide both numerator and denominator by 20)

$$\frac{60}{40} \Rightarrow \frac{3}{2}$$
$$E(X) = \frac{3}{2} = 1.5$$

(b) We are told that 1000 visitors will attend the amusement park, and that The Dragon ride has a capacity of 10 people per run. Previously, we calculated the **expected number of riders per 40 visitors** to be:

$$\text{Expected value} = 1.5$$

To estimate the number of people who would ride The Dragon out of 1000 visitors, we scale up the expectation proportionally:

$$\text{Expected value} = \frac{1000}{40} \cdot 1.5 = 25 \cdot 1.5 = 37.5$$

So, we expect about 37.5 people to ride The Dragon. Since the ride can carry 10 people at a time, we divide:

$$\frac{37.5}{10} = 3.75$$

To ensure all expected riders are accommodated, the ride must run at least:
$$4 \text{ times}$$

## Question 4

**Content:** Solve cos2$x$ = sin$x$, where $-\pi \le x \le \pi$.

**Solution:**

Use the trig identity $cos2x = 1 - sin^{2}x$
$$1 - sin^{2}x = sinx$$
Bring all the terms on one side:
$$2sin^{2}x + sinx -1 = 0$$
Use abstraction! Let $y=sin^{2}x$ and solve the quadratic:
$$2y^2 + y -1 = 0$$
Factorize and solve for y:
$$(2y - 1)(y + 1) = 0$$

The bounds from $-\pi$ to $\pi$ cover the entire unit circle, just like going from $0$ to $2\pi$, but they start on the left side instead of the right. The only difference is how we label the angles — for example, instead of $\frac{3\pi}{2}$, we say $-\frac{\pi}{2}$ as we are going counterclockwise from the left (where $\pi$ normally is). Thus we have:

$$ (a) \ 2y = 1 \Rightarrow y = \frac{1}{2} \Rightarrow sinx = \frac{1}{2}$$
$$x = sin^{-1}\left(\frac{1}{2}\right)$$

$$
x = \left(\frac{\pi}{6}, \frac{5\pi}{6}\right)
$$

$$ (b) \ y = -1 \Rightarrow sinx = -1 \Rightarrow x = sin^{-1}$$
$$ x = \frac{-\pi}{2}$$

<b>Final answer</b>: $
x = \left(\frac{\pi}{6}, \frac{5\pi}{6}, \frac{-\pi}{2}\right)
$

<div style="text-align: center;">
<div style="position: relative; display: inline-block;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Unit_circle_angles_color.svg" style="width: 300px;">

</div>
</div>

## Question 5

**Content:** Find the range of possible values $k$ such that $e^{2x} +\ln{k} = 3e^x$ has at least one real solution.

**Solution:**
Bring all the terms on one side.
$$ e^{2x} - 3e^x + \ln{k} = 0 $$

Using abstraction, let $y = e^x$, therefore $y^2 = e^{2x}$

$$ y^2 - 3y + \ln{k} = 0 $$

Now, using the discriminant: $\sqrt{b^2 - 4ac}$

Since we are looking for a real solution, we note that we have one real solution when $\sqrt{b^2 - 4ac} = 0$. And more when $\sqrt{b^2 - 4ac} > 0$.

<br/>
Therefore we need to solve for $$\sqrt{b^2 - 4ac} \ge 0$$

Where:
$a = 1 \, b = 3\, c = \ln{k} $

$$\sqrt{3^2 - 4(1)(\ln{k})} \ge 0 \Rightarrow 9 - 4\ln{k} \ge 0$$

Squaring and then adding $4\ln{k}$ on both sides:
$$9 \ge 4\ln{k}$$
Solve for $k$ by dividing both sides by 4 and then exponentiating:

$$\frac{9}{4} \ge \ln{k}$$
$$e^{\frac{9}{4}} \ge k$$

<b>Final answer</b>: $0 < k \le e^{\frac{9}{4}}$

## Question 6

**Content:** The function $f$ is defined by $f(x) = \sin{qx}$, where $q > 0$. The following diagram shows part of the graph of $f$ for $0 \le x \le 4m$, where $x$ is in radians. There are $x$-intercepts at $x=0 \, 2m$ and $4m$.

<div style="text-align: center;">
  <img src="/assets/images/sin_graph.png" alt="Sine Graph" style="width: 400px; display: inline-block;">
</div>

(a) Find an expression for $m$ in terms of $q$.

The function $g$ is defined by $g(x) = 3\sin{\frac{2qx}{3}}$, for $0 \le x \le 6m$.

(b) On the axes above, sketch the graph of $g$.

**Solution:**
(a) Observe that it take the graph $4m$ to make a full oscillation (period). With this, we use to use the formula:

$$\frac{2\pi}{b} = \text{period}$$

Where $\text{period} = 4m \, \text{and} \ b=q$

Hence we have:
$$\frac{2\pi}{q} = 4m$$
$$\frac{\pi}{2q} = m$$

(b) Must use graphing calculator!

**Solution:**
This is a little tricky! But we've got this.
We are told that $z-3i$ as a factor of the polynomial $P(z)$.
This immediately tells us that $z = 3i$ is a **root** of the polynomial.
Now, by the **Complex Conjugate Root Theorem**, we know that if a polynomial has **real coefficients**, then the **complex roots must occur in conjugate pairs**.
Since $3i$ is a root, its complex conjugate $-3i$ must also be a root.

Thus, both $z=3i$ and $z=-3i$ are roots of $P(z)$, and so both $z-3i$ and $z+3i$ are factors of the polynomial.

This is amazing. Since we are told that $z−3i$ is a factor of the polynomial $P(z)$, and we’ve already deduced from the Complex Conjugate Root Theorem that $z+3i$ must also be a factor, that gives us two linear factors.

Now, looking at the polynomial $P(z)$, we observe that it is a degree 3 polynomial. A degree 3 polynomial can have at most three linear factors (counting multiplicity).

Therefore, we infer that there is a third factor—call it $(Az+B)$, which corresponds to a real root, since the first two roots $3i$ and $−3i$ are non-real and already form a conjugate pair.

So, the general factored form of the polynomial is:

$$P(z) = (z-3i)(z+3i)(Az+B)$$

We simplify the first part:
$$(z-3i)(z+3i) = (z^2+9)$$

Hence:
$$P(z) = (z^2+9)(Az+B)$$

Expand and set equal to the original equation $P(z)$:

$$(z^2+9)(Az+B) = 4m - mz + \frac{36}{m}z^2 - z^3$$

$$Az^3+Bz^2+ 9Az + 9B = 4m - mz + \frac{36}{m}z^2 - z^3$$

Observe the terms on both sides. Notice the coefficients of each terms:

(1) $Az^3 = -z^3 \Rightarrow A = -1$

(2) $9Az = -mz \Rightarrow 9A = -m$, From (1), $\Rightarrow -9z = -mz \Rightarrow m = 9$

(3) $Bz^2 = \frac{36}{m}z^2 \Rightarrow B = \frac{36}{m}$, From (2), $B = \frac{36}{9} \Rightarrow B = 4$

(4) $9B = 4m$, From (2), $\Rightarrow 9B = 4(9) \Rightarrow B = 4$ - Consistent with the above.

Thus, we have our new factor:
$$Az + B = -z + 4$$

With root:
$$z = 4$$

Hence the roots are
$$z = 3i, -3i, 4 $$

## Question 7

**Content:** The function $h$ is defined by $h(x) = 2xe^x + 3$, for $x \in \mathbb{R}$ . The following diagram shows part of the graph of $h$, which has a local minimum at point A.

<div style="text-align: center;">
  <img src="/assets/images/aasl23q7.png" alt="Sine Graph" style="width: 400px; display: inline-block;">
</div>

(a) Find the value of the y-intercept.<br/>
(b) Find $h'(x)$ <br/>
(c) Hence, find the coordinates of A. <br/>
(d) (i) Show that $h''(x) = (2x + 4)e^x$ . <br/>
&nbsp;&nbsp;&nbsp;&nbsp;(ii) Find the values of $x$ for which the graph of $h$ is concave-up.

**Solution:**

(a) Recall that the y-intercept is the point where a curve intersects (touches) the y-axis, which occurs when $x = 0$. To find it, we substitute $x=0$ into the equation of the function:
$$h(x) = 2(0)e^0 + 3$$
$$h(x) = 0\cdot 1 + 3$$
$$y-intercept = 3$$

(b) Great! Now we need to find the first derivative — that is, the slope of the tangent line to the curve at any given point. Notice that our function contains both $2x$ and $e^x$, which can be treated as two separate functions being multiplied together. Therefore, we'll apply the product rule, which states (see page 11 of formula book):

$$ y = uv \Rightarrow \frac{dy}{dx} = u\frac{dv}{dx} + v\frac{du}{dx}$$

Where $u = 2x$ and $v = e^x$

You will also see how to get the derivative of $e^x$. Thus:
$$ \frac{du}{dx} = 2$$
$$\frac{dv}{dx} = e^x$$

Putting it all together:

$$h'(x) = 2xe^x + 2e^x \text{ or } h'(x) = e^x(2x + 2)$$

(c) Using the first derivative, we can find the coordinates of point $A$ by setting $h'(x)=0$. This allows us to identify the critical points — locations where the slope of the tangent line is zero — which typically correspond to local maxima, minima, or saddle points.

In this case, based on the graph provided, we can see that point $A$ lies at the bottom of a valley, indicating an upward concavity. This suggests that $A$ is a local minimum (we'll confirm this formally using the second derivative shortly).

We will be using the factorized answer for $h'(x)$ since this will allow us to solve for $x$ as we have to account for the $2x$ and $e^x$.
$$ 0 = e^x(2x + 2)$$

Solve for $x$
$$ \text{(a) } e^x 0 \text{ and } \text{(b) } 2x + 2 = 0$$
$$(a) \ln(e^x) = ln(0) \text{ - Undefined}$$
$$(b) 2x = -2 \Rightarrow x = \frac{-2}{2}$$
$$ (a) \text{ Undefined} \text{ and } \text{(b) } x = -1$$

We now have $x = -1$, plugging it back into the original equation will give us the exact coordinates of $A$:

$$h(-1) = 2(-1)e^{-1} + 3$$
$$h(-1) = \frac{-2}{e} + 3$$
$$A = \left(-1, \frac{-2 +3e}{e}\right)$$

(d)(i) Let's find the second derivative by deriving the first derivative:

$$h''(x) =  \frac{dh'(x)}{dx}$$
$$h''(x) = \frac{d}{dx}2xe^x + 2e^x$$

Looking at the expression above, we notice that part of the right-hand side of the equation before the plus sign is essentially the same as $h(x)$ (excluding the constant term). Since we’ve already found the derivative of $h(x)$ as $h'(x) = 2xe^x + 2e^x$, we can now focus on differentiating the rest of the expression. Then, by applying the sum rule for derivatives, we simply add the derivatives of each term together.

$$ \frac{d}{dx}2e^x \Rightarrow 2 \frac{d}{dx}e^x \Rightarrow 2e^x$$

Putting it all together:

$$h''(x) = 2xe^x + 2e^x + 2e^x \Rightarrow 2xe^x + 4e^x$$

Factor out $e^x$:

$$h''(x) = (2x + 4)e^x$$

&nbsp;&nbsp;&nbsp;&nbsp; (ii) Now, that we have the second derivative, we can find the solve this question, since the second derivative tells us about the concavity of the graph. But first, lets recall:

$$f''(x) > 0 \text{ Concave up}$$
$$f''(x) < 0 \text{ Concave down}$$
$$f''(x) = 0 \text{ Neither - Inconclusive}$$

Thus, let's solve for $h''(x) > 0$
$$(2x + 4)e^x > 0 $$
Since we already know that $e^x$ is undefined, let's focus on $2x + 4$:

$$2x + 4 > 0 \Rightarrow 2x > -4$$

Hence:
$$ x > -2$$

## Question 8

**Content:** Consider the arithmetic sequence $u_1, u_2, u_3,...$

The sum of the first $n$ terms of this sequence is given by $S_n = n^2 + 4n$.

(a) (i) Find the sum of the first five terms

&nbsp;&nbsp;&nbsp;&nbsp;(ii) Given that $S_6 = 60$, find $u_6$.

(b) Find $u_1$.

(c) Hence or otherwise, write an expression for $u_n$ in terms of $n$.

Consider a geometric sequence, $v_n$, where $v_2 = u_1$ and $v_4 = u_6$.

(d) Find the possible values of the common ratio, $r$.

(e) Given that $v_{99} < 0$, find $v_5$.

**Solution:**
(a)(i) Plug in 5 for $n$:
$$S_5 = 5^2 + 4(5) = 25 + 20 = 45$$

&nbsp;&nbsp;&nbsp;&nbsp;(ii) We know that $S_6 = 60$ and $S_5 = 45$. Finding $u_6$ is the difference between the two - aka, the number we last added to the sum:

$$u_6 = S_6 - S_5 = 60 - 45 = 15$$

(b) Finding $u_1$ is the same as finding the sum of the first number. Hence:
$$u_1 = S_1$$
$$u_1 = 1^2 + 4(1) \Rightarrow u_1 = 1+4 = 5$$

(c) Since, we know that $u_1 = 5$, we can try to find the common difference $d$ in the sequence. There are a few ways to do that. One way is to use the arithmetic sum formula:

$$S_n = \frac{n}{2}(2u_1+(n-1)d)$$

Plug in $u_1 = 5$ and $S_n = 60$, for $n = 60$, then solve for $d$:

$$S_n = \frac{6}{2}(2(5)+(6-1)d)$$
$$ 60 = 3(10 + 5d) \Rightarrow 60 = 30 + 15d \Rightarrow = 15d = 30$$
$$d = 2$$

**Or**

Find the sum of $n=2$:
$$S_2 = 2^2 + 4(2) = 12$$

Then:
$$u_2 = S_2 - S_1 \Rightarrow u_2 = 12 - 5 = 7$$

Now notice that the difference between $u_1$ and $u_2$ is 2, thus $d=2$.

Finally, using the formula for the $n$th term of an arithmetic sequence (in the booklet on page 3):

$$u_n = u_1 + (n-1)d$$

Our expression for $u_n$ becomes:
$$u_n = 5 + (n-1)\cdot 2$$

(d) At first glance, this question might seem a bit challenging — but don’t worry! Let’s break it down. We are given two key pieces of information: the values of $v_2$​ and $v_4$​. Since this is a geometric sequence, we are tasked with finding the common ratio.

To do that, we need to relate the known terms to the common ratio. This can be done by recalling the general formula for the $n$th term of a geometric sequence (see page 3 of the formula booklet):

$$v_n = v_1r^{n-1}$$

where $v_1$​ is the first term, $r$ is the common ratio, and $v_n$​ is the value of the $n$th term.

Now, let's set them up for $v_2$ and $v_4$ and see if we can spot any pattern:

$$v_2 = v_1r^{2-1} \Rightarrow 5 = v_1r$$
$$v_4 = v_1r^{4-1} \Rightarrow 15 = v_1r^3$$

Notice that both $v_2$ and $v_4$​ involve different powers of the common ratio rr, but both also include the same base term $v_1$.What we can do is write $v_1$ in terms of $r$ and $v_2$ and $v_4$.

$$v_1 = \frac{5}{r}$$
$$v_1 = \frac{15}{r^3}$$

Since we have two equations for $v_1$ and both having $r$, we can set them equal to each other and solve for $r$:

$$\frac{5}{r} = \frac{15}{r^3}$$
$$ 5r^3 = 15r \Rightarrow 5r^3 - 15r = 0$$
Factor out $5r$:

$$5r(r^2 -3) = 0$$

Since the common ratio $r$ cannot be equal to 0, we end up with:

$$r^2-3 = 0  \Rightarrow r^2 = 3$$
$$\sqrt{r^2} =\sqrt{3} \Rightarrow r = \pm \sqrt{3}$$

(e) Since we discovered that our common ratio could either be $r = \sqrt{3}$ or $r = -\sqrt{3}$, we should observe that with $r=\sqrt{3}$, our sum will rise as we move up the series. However, given the requirement that $v_{99}$ should be smaller than 0, we can expect our values to become increasingly negative as we progress in the sequence. To find $v_5$, we will use $r = -\sqrt{3}$. <br/>

But first, let's get $v_1$, which may be obtained from our prior solution:

$$v_1 = \frac{5}{r} \Rightarrow v_1 = \frac{5}{-\sqrt{3}}$$

Now, $v_5$ (Using the geometric formula for the $n$th term):

$$v_5 = \frac{5}{-\sqrt{3}}(-\sqrt{3})^4$$
$$v_5 = \frac{5}{-\sqrt{3}} \cdot 9$$
$$v_5 = \frac{45}{-\sqrt{3}}$$

## Question 9

**Content:** An object moves along a straight line. Its velocity, $v$m$s^{-1}$, at time $t$ seconds is given by $v(t) = -t^3 + \frac{7}{2}t^2 - 2t + 6$, for $ 0 \le t \le 4$. The object first comes to rest at $t=k$.

The graph of $v$ is shown in the following diagram.

<div style="text-align: center;">
  <img src="/assets/images/aasl23q9.png" alt="Sine Graph" style="width: 400px; display: inline-block;">
</div>

At $t=0$, the object is at the origin. <br/>
(a) Find the displacement of the object from the origin at $t = 1$. <br/>
(b) Find an expression for the acceleration of the object. <br/>
(c) Hence, find the greatest speed reached by the object before it comes to rest. <br/>
(d) Find the greatest speed reached by the object for $0 \le t \le 4$.<br/>
(e) Write down an expression that represents the distance travelled by the object while its
speed is increasing. Do not evaluate the expression.

**Solution:**

**NOTE**: I admit, this leans more toward a physics question. That said, here’s how we can approach it mathematically:

&nbsp;&nbsp;&nbsp;&nbsp;1. The derivative of displacement $s(t)$ with respect to time gives the velocity $v(t)$:

$$v(t) = \frac{ds}{dt}$$

&nbsp;&nbsp;&nbsp;&nbsp;2. The derivative of velocity $v(t)$ with respect to time gives the acceleration $a(t)$

$$a(t) = \frac{dv}{dt} = \frac{d^{2}s}{dt^2}$$

So, velocity is the first derivative of displacement, and acceleration is the second derivative.
What this also tells us is that the anti-derivative of acceleration is velocity, and the anti-derivative of velocity is displacement.

(a) Now, given what we have above, we can find the displacement of the object by taking the anti-derivative (integral) of $v(t)$ from the origin $t=0$ to $t=1$:

$$\int_0^t -t^3 + \frac{7}{2}t^2 - 2t + 6 dt$$
$$\left[-\frac{t^4}{4} + \frac{7}{2}\frac{t^3}{3} - 2\frac{t^2}{2} + 6t \right]_0^1$$

Multiply and simplify:
$$\left[-\frac{t^4}{4} + \frac{7t^3}{6} - t^2 + 6t \right]_0^1$$

Substitute $t=0$ and $t=1$ and subtract:
$$\left(-\frac{1^4}{4} + \frac{7(1)^3}{6} - 1^2 + 6(1) \right) -\left(-\frac{0^4}{4} + \frac{7(0)^3}{6} - 0^2 + 6(0) \right)$$

Everything to the right goes to 0, so we are left with:
$$-\frac{1}{4} + \frac{7}{6} -1 +6$$
$$\frac{-6 +28}{24} + 5 \Rightarrow -\frac{22}{24} + 5$$

Simplify (divide the numerator and denominator of the fraction by 2):

$$\frac{22}{24} + 5 \Rightarrow \frac{11}{12} + 5$$

Find a common denominator (I use the butterfly method):

$$\frac{11 + 60}{12} \Rightarrow \frac{71}{12}$$

(b) Earlier, we noted that acceleration was derived by taking the derivative of velocity (or the second derivative of displacement) with respect to time. Since we are given $v(t)$, we can find an expression for $a(t)$ by taking its first derivative:

$$a(t) = \frac{d}{dt} \left(-t^3 + \frac{7}{2}t^2 - 2t + 6\right)$$

Using the power rule for the derivative **(first one on page 11 of the formula booklet)**:

$$a(t) = -3t^2 + 7t - 2$$

(c)From a previous exercise, we recall that the second derivative tells us about the concavity of a function.

&nbsp;&nbsp;&nbsp;&nbsp;(1) If the second derivative is positive $(f''(x)>0)$, the graph is concave up.

&nbsp;&nbsp;&nbsp;&nbsp;(2) If the second derivative is negative $(f''(x)<0)$, the graph is concave down.
<br/>
Now, if we're trying to find the point of greatest speed, we should look for where the graph of velocity has a local maximum. This typically occurs where the graph is concave down, meaning the second derivative is negative and the first derivative (slope) is zero at that point.

Since we are given $v(t)$ and not $s(t)$, we should therefore find the critical points of $v(t)$ by setting $a(t)=0$ and solve for $t$, making sure that the point $t$ is in the interval $0 \le t \le 4$:

$$-3t^2 + 7t - 2 = 0$$

Rewrite $7t$ as $6t + 1t$ to help factorize:
$$-3t^2 + 6t + t -2 = 0$$

Split it into two factors:
$$(-3t^2 + 6t) + (t -2) = 0$$

Factor out $-3t$ from the left and $1$ from the right:
$$(t - 2)(-3t + 1) = 0$$

Set each factor equal to 0 and solve for t:
$$t = 2 \text{ and } t = \frac{1}{3}$$

Great! We now have two critical points. We can substitute those two values in the original equation for $v(t)$ and get the greatest speed:

$$v(2) = -(2)^3 + \frac{7}{2}\cdot 2^2 - 2(2) + 6$$
$$v(2) = -8 + 14 -4 +6 \Rightarrow = -8 + 10 + 6$$
$$v(2) = -8 + 16$$
$$v(2) = 8$$

Now:

$$v\left(\frac{1}{3}\right) = -\left(\frac{1}{3}\right)^3 + \frac{7}{2}\left(\frac{1}{3}\right)^2 - 2\cdot \frac{1}{3} + 6$$

$$v\left(\frac{1}{3}\right) = -\frac{1}{27} + \frac{7}{18} - \frac{2}{3} + 6$$

$$v\left(\frac{1}{3}\right) = -\frac{1}{27} + \frac{7 + 6}{18} + 6$$

$$v\left(\frac{1}{3}\right) = -\frac{1}{27} + \frac{13}{18} + 6$$

$$v\left(\frac{1}{3}\right) = -\frac{1}{27} + \frac{13 + 108}{18}$$

$$v\left(\frac{1}{3}\right) = \frac{307}{54}$$
$$v\left(\frac{1}{3}\right) \approx 5.69$$

Thus, the greatest speed occurs when $t =2$ such that $v(2) = 8ms^{-1}$

(d) When we set the acceleration equal to zer0, we found two critical points, which allowed us to find two maxima. However, now that we are given interval $0 \le t \le 4$, we should attempt to see what happens to the time on the boundaries. That is, when $t = 0$ and $t=1$.

$$v(0) = -(0)^3 + \frac{7}{2}\cdot 0^2 - 2(0) + 6$$
$$v(0) = 6$$

And

$$v(10) = -(4)^3+\frac{7}{2}\cdot 4^2 - 2(4) + 6$$
$$v(4) = -64 + \frac{7}{2}\cdot 16 - 8 +6  \Rightarrow -64 + 56 -2$$
$$|v(4)| = |-10| \Rightarrow v(4) = 10ms^{-1}$$

We can make two observation from above. First, we note that on the boundary, when $t=4$ we have the greatest speed. Second, notice that this was a negative speed. This is because the object might have started moving in the opposite direction, therefore yielding a negative velocity. Nonetheless, by taking the absolute value of this velocity, we ensure to focus solely on the magnitude and ignore the direction (of motion) as this is irrelevant for this question.
<br/>
(e) Lastly, we are asked to find the **distance traveled by the object while it is accelerating**. To do this, we must recall that the displacement of an object is obtained by integrating its velocity function, and the total distance traveled corresponds to the definite integral of the speed (i.e., the absolute value of velocity) over time.

However, we must proceed carefully. Since we are asked to find the distance _while the object is accelerating_, we need to consider the intervals where the **acceleration is positive** — that is, where the derivative of velocity, $a(t)=v'(t)$, is greater than zero.

From previous steps, we identified:

&nbsp;&nbsp;&nbsp;&nbsp;(1) The critical points of $v(t)$ by setting $a(t)=0$,

&nbsp;&nbsp;&nbsp;&nbsp;(2) The point at which the object reaches maximum speed (even if in the negative direction), and

&nbsp;&nbsp;&nbsp;&nbsp;(3) That the object eventually comes to rest at time $t=k$.

Even though the object was moving in the negative direction (i.e., velocity $v(t)<0$), if acceleration is positive (i.e., $a(t)>0$), then the object is speeding up in the negative direction. This still counts as accelerating — just not in the direction we typically associate with "forward" motion.

Thus, we consider the interval from $t=4$ (when the object had its greatest speed in magnitude) up to $t=k$, when it comes to rest. The distance traveled over this interval can be found by integrating the absolute value of velocity:

$$Distance = \int_a^b|v(t)| dt$$
This approach makes sense because:

&nbsp;&nbsp;&nbsp;&nbsp;(1) The object is accelerating (as indicated by $a(t)>0$),

&nbsp;&nbsp;&nbsp;&nbsp;(2) It is still moving (since $v(t)<0$) up until $t=k$,

&nbsp;&nbsp;&nbsp;&nbsp;(3) And it comes to rest at $t=k$, giving us a natural endpoint for the motion.

Thus, combining those intervals we have

$$s(t)_{\text{with increasing speed}} = \int_{\frac{1}{3}}^2 v(t) dt + \int_4^k |v(t)| dt$$

$$
$$
