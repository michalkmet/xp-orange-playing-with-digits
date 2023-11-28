# Notes

Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :


If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ DONE plan pomodoro 1
- ✅ DONE create backlog file
- ✅ DONE refactor names/files
- ✅ DONE add project description
- 🚧 IN PROGRESS create examples

Pomodoro 2:
- ✅ DONE create examples
- ✅ DONE create User stories and UATs
- 🚧 IN PROGRESS User Story 1: p = 1

- ✅ DONE UAT1.1: When I pass (1, 1), then I should see 1
- ✅ DONE UAT1.2: When I pass (2, 1), then I should see 1
- ✅ DONE UAT1.3: When I pass (3, 1), then I should see 1
- ✅ DONE UAT1.4: When I pass (9, 1), then I should see 1
- ✅ DONE UAT1.5: When I pass (10, 1), then I should see -1
- ⚠ TODO UAT1.6: When I pass (15, 1), then I should see -1
- ⚠ TODO UAT1.7: When I pass (33, 1), then I should see -1
- ⚠ TODO UAT1.8: When I pass (89, 1), then I should see 1
- ⚠ TODO UAT1.9: When I pass (92, 1), then I should see -1
- ⚠ TODO UAT1.10: When I pass (111, 1), then I should see -1