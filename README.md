# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

I originally asked chatGPT for what specifically I needed to check to determine if graphs were isomorphic, and used those checks as a sort of psuedocode to write functions that went through those checks and returned false if at any point the tests failed. Minor other help from chatGPT included some syntax (array generation, storing degree count in set) and help debugging. All code was hand typed by me, chatGPT assisted lines are marked as such.

My algorithm does do repeated work if it reaches the permutation check stage. It checks permutations without regard to symmetry which results in repeated or unnecessary work. If this is too much extra work I can attempt to further optimize. I know it is quite inefficient I just wanted to get a finished algorithm done so I could move on to other assignments.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst case runtime for my algorithm would be when all permutations have to be checked, which I have tried to offer some avoidance of by adding helper function that eliminate certain graphs before we reach this step. Because we are using an adjacency matrix and comparing every possible connection (vertex pairing) we must perform V<sup>2</sup> compares for every permutation we check, and in our worst case we have V! permutations by nature of permutations. Therefore our worst case big $\Theta$ time complexity is $\Theta$(V! * V<sup>2</sup>)
