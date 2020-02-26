# Counting Mountains

We created an app that records when a user is walking downhill or uphill.
Each user's step, up or down, is represented by on unit of change in altitude.
We want to obtain the number of valleys that the user walked.

Please notices that a valley is a sequence of steps below the sea level, starting one step
below the level of the sea and ending in one step above the level of the sea.

For example, lets assume the app returns this array: `arr=[DDUUUUDD]`.
* This means that the user, from the sea level, entered a valley by 2 units deep `DD`.
* Then, the user climb out of the valley into a mountain `UUUU`
* Finally, the user return to the sea level `DD`  
The final slope should be `0`

Another example is if we get an array as such: `arr=[UDDDUDUU]`
In this case, are expecting to end with a slope of `1`

## Pre-Analysis Summary

For this particular problem, I decided that I could get away with counters or stacks.

## Pre-Analysis

My first thought when solving this problem was that I could use a Stacks.
After all, I just needed to keep track of when I was going down or up.
The results of the stacks would tell me if I was at sea level or not.

However, later, I came to the realization that I only needed counters.
The stack could become overcomplicated.