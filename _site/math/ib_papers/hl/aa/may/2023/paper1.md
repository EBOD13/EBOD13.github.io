# IB Math AA HL - May 2023 - Paper 1

## Question 1

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

## Question 2

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

<p style="text-align: center;">Coming soon!</p>

## Question 3

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

## Question 4

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

## Question 5

**Content:** The function $f$ is defined by $f(x) = \sin{qx}$, where $q > 0$. The following diagram shows part of the graph of $f$ for $0 \le x \le 4m$, where $x$ is in radians. There are $x$-intercepts at $x=0 \, 2m$ and $4m$.

<div style="text-align: center;">
  <img src="/assets/images/sin_graph.png" alt="Sine Graph" style="width: 400px; display: inline-block;">
</div>

(a) Find an expression for $m$ in terms of $q$.

The function $g$ is defined by $g(x) = 3\sin{\frac{2qx}{3}}$, for $0 \le x \le 6m$.

(b) On the axes above, sketch the graph of $g$.

**Solution:**
(a) Observe that it take the graph $4m$ to make a full oscillation (period). With this, we use to use the formula: $$\frac{2\pi}{b} = \text{period}$$

Where $\text{period} = 4m \, \text{and} \ b=q$

Hence we have:
$$\frac{2\pi}{q} = 4m$$
$$\frac{\pi}{2q} = m$$

(b) Must use graphing calculator!

## Question 6

**Content:** The side lengths, $x$cm, of an equilateral triangle are increasing at a rate of 4cm$\text{s}^{-1}$.

Find the rate at which the area of the triangle, $A$ cm$^2$, is increasing when the lengths are $5\sqrt{3}$ cm.

**Solution:**
First, notice that we are asked to find <b> the area of an equilateral triangle </b> </a>. However, the <u><a href="/assets/docs/formula_booklet.pdf" target="_blank">IB Formula Sheet</a></u> does not include a specific formula for the area of an equilateral triangle. This means we’ll need to derive it ourselves using the general triangle area formula:

$$A_{triangle} = \frac{1}{2}bh$$

Where $b$ is the base and $h$ is the height

**Step 1: Recall Properties of an Equilateral Triangle**

&nbsp;&nbsp;&nbsp;&nbsp;**(i)** All sides are equal in length.

&nbsp;&nbsp;&nbsp;&nbsp;**(ii)** All interior angles measure 60°, summing to 180°.

We are told that each side has length $x$. That makes our base equal to $x$.

To find the height, we draw an imaginary vertical line from the top vertex down to the midpoint of the base. This line:

&nbsp;&nbsp;&nbsp;&nbsp;**(i)** Splits the triangle into two right-angled triangles,

&nbsp;&nbsp;&nbsp;&nbsp;**(ii)** Creates two angles of 30° and 60°,

&nbsp;&nbsp;&nbsp;&nbsp;**(iii)** And represents the height \( h \).

<div style="display: flex; gap: 5px; justify-content: center; align-items: flex-start;">

  <!-- First triangle: Equilateral -->
  <svg width="100" height="200" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle -->
    <polygon points="150,20 40,220 260,220" fill="none" stroke="black" stroke-width="2" />
    <text x="150" y="240" font-size="16" text-anchor="middle">x</text> <!-- Base -->
    <text x="70" y="130" font-size="16" >x</text> <!-- Left side -->
    <text x="220" y="130" font-size="16">x</text> <!-- Right side -->
    <text x="150" y="50" font-size="14" text-anchor="middle">60°</text> <!-- Top angle -->
    <text x="50" y="215" font-size="14">60°</text> <!-- Bottom left -->
    <text x="250" y="215" font-size="14" text-anchor="end">60°</text> <!-- Bottom right -->

  </svg>

  <!-- Second triangle: 30°-60°-90° with height -->
  <svg width="100" height="200" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle -->
    <polygon points="150,20 40,220 260,220" fill="none" stroke="black" stroke-width="2" />
    <line x1="150" y1="20" x2="150" y2="220" stroke="black" stroke-width="1" stroke-dasharray="5,5" />
    <text x="150" y="240" font-size="16" text-anchor="middle">x</text> <!-- Base -->
    <text x="70" y="130" font-size="16">x</text> <!-- Left side -->
    <text x="220" y="130" font-size="16">x</text> <!-- Right side -->
    <text x="160" y="130" font-size="16">h</text> <!-- Height -->
    <text x="140" y="60" font-size="14" text-anchor="middle">30°</text> <!-- Top angle -->
    <text x="50" y="215" font-size="14">60°</text> <!-- Bottom left -->
    <text x="130" y="215" font-size="14">90°</text> <!-- Right angle -->

  </svg>

</div>

**Step 2: Use Trigonometry to Find the Height**

In the right triangle, we apply SOH-CAH-TOA. Since we know the hypotenuse is $x$ and the angle is 60°, we use:

$$\sin(\theta) = \frac{opposite}{adjacent}$$
$$\sin(60) = \frac{h}{x}$$

From the unit circle, we know: $$\sin(60) = \frac{\sqrt{3}}{2}$$

So,
$$\frac{\sqrt{3}}{2} = \frac{h}{x} \Rightarrow h = \frac{\sqrt{3}}{2}x $$

Putting it all together:
$$A_{\text{equilateral triangle}} = \frac{1}{2}x \cdot \frac{\sqrt{3}}{2}x$$
$$A_{\text{equilateral triangle}} = \frac{\sqrt{3}}{4}x^2$$

**Step 3: Use Related Rates to Find the Solution**
Now that we’ve derived the formula for the area of an equilateral triangle, we can move on to solving the original question.

We are told that the side length is increasing at a constant rate, which we can express as:

$$\frac{dx}{dt}$$
We are also given the side length at a specific moment:

$$x =5\sqrt{3}$$

and asked to find the corresponding rate of change of the area, or:
$$\frac{dA}{dt}$$

With all of this, we can immediately observe that it is a **related rates problem** because:

&nbsp;&nbsp;&nbsp;&nbsp;**(a)** Two quantities — the side length $x$ and the area $A$ — are changing with respect to time.

&nbsp;&nbsp;&nbsp;&nbsp;**(b)** We have a formula that relates the two:
$$A = \frac{\sqrt{3}}{4}x^2$$

To find how fast the area is changing at the moment when $x=5\sqrt{3}$​, we differentiate both sides of the formula with respect to time using the chain rule.

$$\frac{dA}{dt} = \frac{\sqrt{3}}{4} \cdot 2x \frac{dx}{dt}$$
$$\frac{dA}{dt} = \frac{\sqrt{3}}{4} \cdot 2(5\sqrt{3}) \cdot 4$$
$$\frac{dA}{dt} = 3 \cdot 5 \cdot 2$$
$$\frac{dA}{dt} = 30\text{cm}^2\text{s}^{-1}$$

## Question 7

**Content:** Consider $P(z) = 4m - mz + \frac{36}{m}z^2 - z^3$, where $z \in \mathbb{C}$ and $m \in \mathbb{R^+}$.

Given that $z-3i$ is a factor of $P(z)$, find the roots of $P(z) = 0$

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

Hence the roots are $$z = 3i \, -3i\, 4 $$

## Question 8

**Content:**

**Solution:**

## Question 9

**Content:**

**Solution:**

## Question 10

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

Then: $$u_2 = S_2 - S_1 \Rightarrow u_2 = 12 - 5 = 7$$

Now notice that the difference between $u_1$ and $u_2$ is 2, thus $d=2$.

Finally, using the formula for the $n$th term of an arithmetic sequence (in the booklet on page 3):

$$u_n = u_1 + (n-1)d$$

Our expression for $u_n$ becomes:
$$u_n = 5 + (n-1)\cdot 2$$

## Question 11

**Content:** Consider the following diagram, which shows the plan of part of a house.

<div style="text-align: center;">
  <img src="/assets/images/angle_house.png" alt="Sine Graph" style="width: 400px; display: inline-block;">
</div>

A narrow passageway with width $\frac{3}{4}$m is perpendicular to a room of width 6m. There is a corner point C. Points A and B are variable points on the base of the walls such that A, C and B lie on a straight line.

Let $L$ denote the length AB in metres.

Let $\alpha$ be the angle that [AB] makes with the room wall, where $0 < \alpha < \frac{\pi}{2}$.

(a) Show that $L = \frac{3}{4}\sec{\alpha }+ 6\csc{\alpha}$.

(b)&nbsp;&nbsp;&nbsp;&nbsp;(i) Find $\frac{dL}{d\alpha}$.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii) When $\frac{dL}{d\alpha} = 0$, show that $\alpha = \arctan2$.

(c) &nbsp;&nbsp;&nbsp;&nbsp;(i) Find $\frac{d^{2}L}{d\alpha^2}$

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii) When $\alpha = \arctan 2$, show that $\frac{d^{2}L}{d\alpha^2} = \frac{45}{4}\sqrt{5}$.

(d) &nbsp;&nbsp;&nbsp;&nbsp;(i) Hence, justify that L is a minimum when $\alpha = \arctan2$.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii) Determine the minimum value of $L$.

Two people need to carry a pole of length 11.25 m from the passageway into the room.

It must be carried horizontally.

(e) Determine whether this is possible, giving a reason for your answer.
**Solution:**
(a) We will solve this in two steps. First, by analyzing the diagram, we observe that multiple triangles are formed by the intersecting lines. Let's focus on two of them.

Let the **first triangle** be the one on the **right**, with the **side opposite to angle** $\alpha$ measuring **6 meters**.

Next, consider the **second triangle** on the left. Imagine that the **horizontal line** passing through **point C** (which intersects segment AB) extends all the way to the **leftmost vertical line**. This forms another triangle to the left.

Now, observe that the new angle created at the intersection — let’s call it $\alpha'$ — is directly **opposite** angle $\alpha$. These two angles share the same vertex and are formed by intersecting straight lines, which makes them **vertical angles** <a href="https://www.mathsisfun.com/geometry/parallel-lines.html" target = "_blank"><i><u>(read more here)</u></i></a>.

By definition, vertical angles are equal, so:

$$\alpha = \alpha'$$

In this new triangle on the left, angle $\alpha'$ is known, and the adjacent side to this angle measures $\frac{3​}{4}$ meters.

Now that we have everything we need, let’s find the total length of segment [AB].

From the left triangle we constructed, we know that segment [AC] is a portion of [AB]. In that triangle, [AC] is the hypotenuse, and we are given:

&nbsp;&nbsp;&nbsp;&nbsp;(1) Angle $\alpha$

&nbsp;&nbsp;&nbsp;&nbsp;(2) The adjacent side to angle $\alpha$, which is $\frac{3}{4}$​m.

Using SOH-CAH-TOA, we recall that for cosine:

$$\cos(\alpha) = \frac{adjacent}{hypotenuse} = \frac{\frac{3}{4}}{AC} \Rightarrow \cos(\alpha) = \frac{3}{4} \cdot AC $$

Solve for AC:

$$
AC = \frac{3}{4} \cdot \frac{1}{\cos(\alpha)}
$$

$$
AC = \frac{3}{4} \sec(\alpha)
$$

Similarly, for the right triangle. We now have:

&nbsp;&nbsp;&nbsp;&nbsp;(1) Angle $\alpha$

&nbsp;&nbsp;&nbsp;&nbsp;(2) [CB] - hypotenuse

&nbsp;&nbsp;&nbsp;&nbsp;(3) The opposite side to angle $\alpha$, which is 6m

Using SOH-CAH-TOA, we recall that for sine:

$$\sin(\alpha) = \frac{opposite}{hypotenuse} = \frac{6}{CB} $$
$$CB = 6\frac{1}{\sin(\alpha)} $$
$$CB = 6\csc(\alpha) $$

Bringing everything together:

$$AB = AC + BC \Rightarrow AB = \frac{3}{4} \sec(\alpha) + 6\csc(\alpha)$$

$$L = \frac{3}{4} \sec(\alpha) + 6\csc(\alpha)$$

(b) &nbsp;&nbsp;&nbsp;&nbsp;(i) Using the derivatives given in the formula booklet:

$$\frac{dL}{d\alpha} = \frac{3}{4}\tan\alpha\sec\alpha - 6\csc\alpha\cot\alpha$$

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ii) Solve for $\alpha$:
