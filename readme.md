# Array Pick Random

Pick a number of unique items from a given array (without using array.sort)

[![npm](https://img.shields.io/npm/v/array-pick-random)](https://www.npmjs.com/package/array-pick-random)

## Installation

```bash
npm install --save array-pick-random
```

## Usage

```typescript
array_pick_random( array: any[], itemsCount: number ): any[];
```

## Usage example

```typescript
import array_pick_random from 'array-pick-random';

console.log(
    array_pick_random([ 1,2,3,4,5,6,7,8,9 ], 3),
    // Returns [ 6, 1, 4 ]
);
```