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

I originally asked chatGPT for what specifically I needed to check to determine if graphs were isomorphic, and used those checks as a sort of psuedocode to write functions that went through those checks and returned false if at any point the tests failed. Minor other help from chatGPT included some syntax (array generation, storing degree count in set) and help debugging. All code was hand typed by me.

My algorithm does do repeated work if it reaches the permutation check stage. It checks permutations without regard to symmetry which results in repeated or unnecessary work. If this is too much extra work I can attempt to further optimize. I know it is quite inefficient I just wanted to get a finished algorithm done so I could move on to other assignments.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?
