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
$$cos2x = 1 - sin^{2}x = sinx$$
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
