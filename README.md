# JavaScript: Unexpected NaN with undefined in arithmetic operation

This repository demonstrates a subtle bug in JavaScript related to the handling of `null` and `undefined` values in arithmetic operations.  The issue arises when attempting to perform addition with `undefined`.  While `null` is explicitly checked for, `undefined` is not.  This leads to `NaN` (Not a Number) being returned instead of a more appropriate error handling mechanism.

## Bug Description:
The provided JavaScript code includes a function `foo` designed to add two numbers. It handles `null` values correctly by returning `null` if either input is `null`. However, it fails to handle the `undefined` input, resulting in `NaN`. 

## Solution:
The solution involves explicitly checking for `undefined` values in addition to `null` values, thereby providing more robust handling of unexpected inputs.  This ensures consistent and predictable behavior. 