# Awesome repo

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


## Examples

Example 1:
n = 1; p = 1 ---> 1 since 1¹ = 1 = 1 * 1

Example 2:
n = 2; p = 1 ---> 1 since 2¹ = 2 = 2 * 1

Example 3:
n = 3; p = 1 ---> 1 since 3¹ = 3 = 3 * 1

Example 4:
n = 9; p = 1 ---> 1 since 9¹ = 9 = 9 * 1

Example 5:
n = 10; p = 1 ---> -1 since 1¹ + 0² = 1 + 0 = -1

Example 6:
n = 15; p = 1 ---> 1 since 1¹ + 5² = 1 + 25 = 27 = -1

Example 7:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

Example 8:
n = 92; p = 1 ---> -1 since 9¹ + 2² = 9 + 4 = 13 = -1

Example 9:
n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2