## Question 1

**Content:**
Let $f(x) = -2x + 3$, for $x \in \mathbb{R}$
<br/>
(a) The graph of a linear function $g$ is parallel to the graph of $f$ and passes through the origin. Find an expression for $g(x)$.
<br/>
(b) The graph of a linear function $h$ is perpendicular to the graph of $f$ and passes through the point (-1 , 2). Find an expression for $h(x)$.
<br/>
(c) Find $(g \circ h)(0)$

**Solution:**

(a) First, recall that two lines are parallel if and only if they have the same slope. In this case, since the function $f(x)$ has slope of $m=-2$, the function $g(x)$, being parallel to $f(x)$, must also have a slope of -2.
Next, to find the equation of a line, we need a point through which it passes. Fortunately, we are told that gg passes through the origin, giving us the point $A(0, 0)$. We can now use the point-slope form of a line:

$$y - y_1 = m(x -x_1)$$

where $x_1$ and $y_1$ are the coordinates of A:

Substituting $m=-2$ and the point $(x_1 ,y_1)=(0,0)$, we find the equation of $g(x)$.

$$y - 0 = -2(x -0)$$
$$y = -2x$$
$$g(x) = -2x$$

<br/>
(b) For this one, we will use a similar approach as above, but with a small twist. That is, we should recall that two lines are perpendicular if and only if they are at a 90 degree angle from each other so that the product of their slope equals -1. That is:
$$m_1\cdot m_2 = -1$$

Let $m_1$ be the slope of $f(x)$, and $m_2$ the slope of $h(x)$. Then:
$$-2\cdot m_2 = -1$$
$$ m_2 = \frac{1}{2}$$

With this, let's use the equation of a straight line and substituting with the given points (-1, 2):

$$y - 2 = \frac{1}{2}(x - (-1)) + 2$$
$$y = \frac{1}{2}x + \frac{1}{2} + 2$$
$$ y = \frac{1}{2}x + \frac{5}{2}$$
$$h(x) = \frac{1}{2}x + \frac{5}{2}$$

(c) If this notation seems a little confusing, we can rewrite it as follow:

$$g(h(0))$$

Now, we just need to find what $h(x)$ is and use that output as the input for $g(x)$:

$$h(0) = \frac{1}{2}\cdot 0 + \frac{5}{2} \Rightarrow h(0)= \frac{5}{2}$$

Now we plug this value into $g(x)$:

$$g\left(\frac{5}{2}\right) = -2\cdot \frac{5}{2} \Rightarrow = g\left(\frac{5}{2}\right) = -5$$
$$g(h(0)) = -5$$

## Question 2

**Content:** The function $g$ is defined by $g(x) = e^{x^2 + 1}$, where $x \in \mathbb{R}$

Find $g'(-1)$.

**Solution:**
Great! We're asked to find the value of the first derivative when $x=-1$, so let's begin by taking the derivative of the function. To do this, recall the rule:
$$\frac{d}{dx} e^u = \frac{du}{dx}e^u$$

where $u$ is a differentiable function of $x$.

In simple terms, when differentiating an exponential function of the form $e^{u(x)}$, we first take the derivative of the exponent $u(x)$, then multiply it by the original expression $e^{u(x)}$.

In our case, $u = x^2 + 1$:
$$\frac{du}{dx} = 2x$$

And,

$$g'(x) = 2xe^{x^2 + 1}$$
$$g'(-1) = 2(-1)e^{(-1)^2 + 1}$$
$$g'(-1) = -2e^2$$

## Question 3

**Content:**
Consider a circle with a diameter AB, where A has coordinates (1, 4, 0) and B has coordinates (-3, 2, -4).

(a) Find <br/>
&nbsp;&nbsp;&nbsp;&nbsp;(i) the coordinates of the centre of the circle; <br/>
&nbsp;&nbsp;&nbsp;&nbsp;(ii) the radius of the circle.

<br/>
The circle forms the base of a right cone whose vertex $V$ has coordinates (-1, -1, 0).
<div style="text-align: center;">
  <img src="/assets/images/aasl22novq3.png" alt="Triangle" style="width: 200px; display: inline-block;">
</div>

(b) Find the exact volume of the cone.

**Solution:**
(a)(i) Given the diameter and the coordinate points that define it, we can visualize that the center of the circle lies exactly halfway between those two points. In other words, the center is the midpoint of the line segment connecting the endpoints of the diameter.

Since we’re working in 3D space, we can use the midpoint formula for a line segment in three dimensions (see page 6 of the formula booklet):

$$\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2}$$

Substituting our points:

$$\frac{1 + (-3)}{2}, \frac{4 + 2}{2}, \frac{0 + (-4)}{2} \Rightarrow \frac{-2}{2}, \frac{6}{2}, \frac{-4}{2}$$

$$\text{Center coordinates, } C = (-1, 3, -2)$$

&nbsp;&nbsp;&nbsp;&nbsp; (ii) Now that we’ve found the midpoint—which represents the center of the circle—we can easily determine the radius. The radius is simply the distance from the center of the circle to any point on its circumference. Since we know the coordinates of two points on the circle, we can calculate the radius by finding the distance between the center and one of those points.

To do this in 3D space, we use the distance formula:

$$
Distance = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2 + (z_1-z_2)^2}
$$

Substituting with what we have:

$$
radius = \sqrt{(-3-(-1))^2 + (2-3)^2 + (-4-(-2))^2}
$$

$$
radius = \sqrt{(-2)^2 + (-1)^2 + (-2)^2}
\Rightarrow \sqrt{4 + 1 + 4}
$$

$$radius = \sqrt{9} \Rightarrow radius = 3$$

(b) To find the volume of the cone, we will use the formula for a right cone:

$$Volume = \frac{1}{3}\pi r^2h$$

Where $r$ is the radius, $h$ is the height.

Given that we already have the radius, we must find the height in order to proceed. Since we are given the vertex of the cone, which lies right above the center of the circle, we will once again use the distance formula to calculate the height, and then plug those values in the volume formula to solve this problem.

$$height = \sqrt{(-1 - (-1))^2 + (-1 - 3)^2 +(0-2)^2}$$
$$height = \sqrt{0 + (-4)^2 +(-2)^2} \Rightarrow height = \sqrt{16 + 4}$$
$$height = \sqrt{20} \Rightarrow height = 2\sqrt{5}$$

Plug the values and find the volume:

$$Volume = \frac{1}{3}\pi(3^2)(2\sqrt{5})$$
$$Volume = \frac{1}{3}\pi(9)(2\sqrt{5})$$
$$Volume = 6\pi\sqrt{5}$$

## Question 4

**Content:**
(a) Show that $a^2 + \left(\frac{a^2-1}{2}\right)^2 = \left(\frac{a^2+1}{2}\right)^2$.

Consider a right-angled triangle with sides of length $a$, $\left(\frac{a^2-1}{2}\right)$ and $\left(\frac{a^2+1}{2}\right)$.
<br/>
(b) Find an expression for the area of the triangle in terms of $a$.

**Solution:**
(a) To verify that the left-hand side (LHS) is equal to the right-hand side (RHS), we can expand the LHS and simplify it. If the result matches the RHS, the equality is confirmed:

First, expand $\left(\frac{a^2-1}{2}\right)^2$:

$$\left(\frac{a^2-1}{2}\right)^2 = \left(\frac{a^2-1}{2}\right)\cdot \left(\frac{a^2-1}{2}\right)$$
The numerator will become:
$$(a^2 - 1)(a^2 - 1) = a^4 - 2a^2 + 1 $$
Combine with the denominator
$$\left(\frac{a^4 - 2a^2 + 1 }{4}\right)$$

Now add $a^2$ (I use the butterfly method):
$$\left(\frac{4a^2 + a^4 - 2a^2 + 1 }{4}\right)$$
$$\left(\frac{a^4 + 2a^2 + 1 }{4}\right)$$

Observe that our numerator could be rewritten as:
$$(a^2 + 1)^2 = (a^2 + 1)(a^2 + 1)$$

And the denominator as:
$$2 \cdot 2$$

Taking this power of 2 our from both numerator and denominator, we get:

$$\left(\frac{a^2+1}{2}\right)^2$$

You can check it by expanding it!

This matches the RHS! Thus, we have shown that the LHS = RHS

(b) Recall that the area of a triangle is given by the formula:
$$A = \frac{1}{2}bh$$

where $b$ is the base and $h$ is the height

To express the area in terms of what we’re given, we first need to determine which of the given lengths corresponds to the base and which one to the height.

From observation, we can analyze how each length changes as the variable aa increases. By substituting increasing values of $a$, we obtain the following values for each length:

<div style="text-align: center;">
<div style="position: relative; display: inline-block;">
<br/>
<table border="1" cellspacing="0" cellpadding="6" style="text-align: center; ">
  <thead>
    <tr>
      <th style="padding: 8px;">\( a \)</th>
      <th style="padding: 8px;">\( \frac{a^2 + 1}{2} \)</th>
      <th style="padding: 8px;">\( \frac{a^2 - 1}{2} \)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td style="padding: 8px;">\( \frac{1^2 + 1}{2} = 1 \)</td>
      <td style="padding: 10px;">\( \frac{1^2 - 1}{2} = 0 \)</td>
    </tr>
    <tr >
      <td style="padding: 10px;">2</td>
      <td style="padding: 10px;">\( \frac{2^2 + 1}{2} = \frac{5}{2} \)</td>
      <td style="padding: 10px;">\( \frac{2^2 - 1}{2} = \frac{3}{2} \)</td>
    </tr>
    <tr>
      <td style="padding: 10px;">3</td>
      <td style="padding: 10px;">\( \frac{9 + 1}{2} = 5 \)</td>
      <td style="padding: 10px;">\( \frac{9 - 1}{2} = 4 \)</td>
    </tr>
    <tr>
      <td style="padding: 10px;">4</td>
      <td style="padding: 10px;">\( \frac{16 + 1}{2} = \frac{17}{2} \)</td>
      <td style="padding: 10px;">\( \frac{16 - 1}{2} = \frac{15}{2} \)</td>
    </tr>
  </tbody>
</table>
</div>
</div>

As we can see, $\left( \frac{a^2 + 1}{2} \right)$ consistently has the largest value among the three expressions. This suggests it represents the hypotenuse of the triangle. Since the area of a right triangle is calculated using the base and height—which are the two legs—we can exclude the hypotenuse from our area calculation.

Therefore, let $a$ be the base and $\left( \frac{a^2 - 1}{2} \right)$ be the height. Then the area is given by:
$$A = \frac{1}{2}\cdot a \cdot \left( \frac{a^2 - 1}{2} \right)$$

## Question 5

**Content:**
The derivative of the function $f$ is given by $f'(x) = \frac{6x}{x^2+1}$.
<br/>
The graph of $y = f(x)$ passes through the point (1,5). Find an expression for $f(x)$.

**Solution:**
Since we are given the derivative of a function, we can easily find the original function by integrating it.

$$\int \frac{6x}{x^2+1} dx$$

Using $u$ substitution. Let $u = x^2 + 1$

$$u = x^2 + 1 \qquad du =  2xdx$$

$$\frac{du}{2x} = dx$$

Substituting for $u$:

$$\int \frac{6x}{u} \frac{du}{2x}$$

Simplify

$$\int \frac{3}{u} du \Rightarrow 3 \int \frac{1}{u}$$

Integrate with respect to $u$:

$$3\ln|u| + C$$
$$f(x) = 3\ln(|x^2 + 1|) + C$$

Since we are given a point of this graph, let's use it to find the value of $C$ and therefore derive the expression for $f(x)$:

$$5 = 3\ln(|1^2 + 1|) + C$$
$$ 5 - 3\ln(2) = C \Rightarrow C = 5 - ln(8)$$

Thus we have:

$$f(x) = 3\ln(|x^2 + 1|) + 5 - ln(8)$$

We can further simplify by rewriting $\ln(8)$ as $3\ln(2)$ and applying log rules:

$$f(x) = 3\ln(|x^2 + 1|) + 5 - 3ln(2)$$
$$f(x) = 3\ln(|x^2 + 1|) - 3ln(2) + 5$$
$$f(x) = 3\ln\left(\frac{x^2 + 1}{2}\right) + 5$$

## Question 6

**Content:**
Events $A$ and $B$ are such that $P(A) = 0.3$ and $P(B) = 0.8$. <br/>
(a) Determine the value of $P(A \cap B)$ in the case where the events $A$ and $B$ are independent.<br/>
(b) Determine the minimum possible value of $P(A \cap B)$. <br/>
(c) Determine the maximum possible value of $P(A \cap B)$, justifying your answer.

**Solution:**
Coming soon

## Question 7

**Content:**
(a) The graph of a quadratic function f has its vertex at the point (3, 2) and it intersects the $x$-axis at $x = 5$. Find $f$ in the form $f(x) = a(x - h)^2 + k$.

The quadratic function $g$ is defined by $g(x) = px^2 + (t - 1)x - p$ where $x \in \mathbb{R}$ and $p, t \in \mathbb{R}$, $p \ne 0$.

(b) In the case where $g(-3) = g(1) = 4$, <br/>
&nbsp;&nbsp;&nbsp;&nbsp;(i) find the value of $p$ and the value of $t$; ,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;(ii) find the range of $g$.
<br/>
(c) The linear function $j$ is defined by $j(x) = -x + 3p$ where $x \in \mathbb{R}$ and $p \in \mathbb{R}$ , $p \ne 0$.

Show that the graphs of $j(x) = -x + 3p$ and $g(x) = px^2 + (t - 1)x - p$ have two distinct points of intersection for every possible value of $p$ and $t$.
**Solution:**
(a) To answer this question, we first recall that a quadratic function can be written in vertex form, which is especially helpful when the vertex and a point on the parabola are known. The vertex form is:

$$f(x) = a(x - h)^2 + k$$

Where:

**$(h, k)$** is the <b>vertex</b> of the parabola.this represents the highest or lowest point on the graph. In this pair, $h$ is the $x$ coordinate and $k$ is the $y$ coordinate.</li>

**$a$** is coefficient that determines two key properties:

&nbsp;&nbsp;&nbsp;&nbsp; **Stretch/Compression:**

<div style="padding-left: 40px">
The larger the absolute value of $a$ (i.e., $∣a∣$), the narrower the graph becomes. A smaller $∣a∣$ makes the parabola wider.
For example, if $a=\frac{1}{2}$​, the graph will be wider than if $a=3$.
Think of it this way: a larger value of aa increases the vertical growth more quickly—small changes in $x$ lead to large changes in $y$, creating a steeper (narrower) curve. Conversely, with a smaller $a$, the vertical growth is slower, so it takes longer for the graph to rise or fall, resulting in a wider shape.
</div>

<b>Direction:</b><br/>

<div style="padding-left: 40px">
The sign of aa determines the direction the parabola opens.

&nbsp;&nbsp;&nbsp;&nbsp;If $a>0$, the parabola opens upward (concave up). <br/>
&nbsp;&nbsp;&nbsp;&nbsp;If $a<0$, it opens downward (concave down). </li>

</div>

**Visual tip:** A positive $a$ creates a shape that can "hold water," while a negative aa spills it downward.

With this explanation out of the way, we can now write the vertex form of the function $f$ using the information we have. Note that we don’t yet know the value of $a$, which we’ll need to find.

We are told that the function intersects the $x$-axis at $x=5$. Visually, we can imagine this point lying on the curve, and recall that whenever a graph intersects the $x$-axis, the corresponding $y$-value is 0. In other words, the point $(5,0)$ lies on the graph.
Using this point, we can substitute into the vertex form:
$$f(x) = a(x - h)^2 + k$$
and solve for $a$:

$$0 = a(5 - 3)^2 + 2 \Rightarrow 0 = a(2)^2 + 2$$
$$0 = 4a + 2 \Rightarrow -2 = 4a$$
$$a = -2$$

Hence, our vector form becomes:

$$f(x) = -2(x - 3)^2 + 2$$

(b)(i) Perfect! Given the formula for $g(x)$ and knowing that $g(-3)$ and $g(1)$ both equal $4$, we can first evaluate them:

$$g(-3) = p(-3)^2 + (t-1)(-3) - p  \quad \text{   } g(1) = (1)x^2 + (t-1)(1) - p$$

$$g(-3) = 9p -3(t-1) - p  \quad \text{   } g(1) = p + (t-1) - p$$
$$g(-3) = 8p -3(t-1)  \quad \text{   } g(1) = t-1$$

Looking at the two equations above, we observe that g(1) contains only the variable $t$. This allows us to solve for $t$ directly, and then substitute that value into g(-3) and solve for $p$:

$$ 4 = t-1 \Rightarrow t = 5$$

Solve for $p$:

Multiply throughout:
$$ 8p -3(5-1) = 4 \Rightarrow 8p -3(4) = 4 \Rightarrow 8p -12 = 4$$
Divide both sides by 8:
$$8p = 16 \Rightarrow p = 2$$
