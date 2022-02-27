const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = function(accumulator) {
//     const accumulator = 0
//     const total = batteryBatches.reduce(reducer)
//     return total + accumulator
// }

const initialValue = 0;
const totalBatteries = batteryBatches.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(totalBatteries);