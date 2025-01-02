# React Native: useRef Callback After Component Unmount

This repository demonstrates a common error in React Native involving the `useRef` hook and asynchronous operations.  When a component unmounts before a `useRef` callback completes, it can lead to errors because `myRef.current` might be null.  The example shows how to mitigate this issue.

## Bug

The `bug.js` file demonstrates the problem.  A `setInterval` function accesses `myRef.current` even after the component unmounts.  This can lead to unexpected behavior or crashes.

## Solution

The `bugSolution.js` file provides a solution that uses a `mounted` state variable to check if the component is still mounted before accessing `myRef.current`. This prevents errors when the component is unmounted.