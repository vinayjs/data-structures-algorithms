// Given a list of intervals,
// merge all the overlapping intervals to produce
// a list that has only mutually exclusive intervals.

// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// one [1,5].

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   getInterval() {
//     return "[" + this.start + ", " + this.end + "]";
//   }
// }

// const merge = (intervals) => {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   intervals.sort((a, b) => a.start - b.start);
//   const mergedIntervals = [];
//   let start = intervals[0].start,
//     end = intervals[0].end;
//   for (i = 1; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start <= end) {
//       end = Math.max(interval.end, end);
//     } else {
//       mergedIntervals.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }
//   mergedIntervals.push(new Interval(start, end));
//   return mergedIntervals;
// };

// let result = merge([
//   new Interval(1, 4),
//   new Interval(2, 5),
//   new Interval(7, 9),
// ]);
// console.log("Merged intervals :", result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a list of non-overlapping intervals sorted by their start time,
// insert a given interval at the correct position and
// merge all necessary intervals to produce a list
// that has only mutually exclusive intervals.

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7],
// we merged them into one [4,7].

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
//   printInterval() {
//     return "[" + this.start + ", " + this.end + "]";
//   }
// }

// const insert = (intervals, newInterval) => {
//   let merged = [];
//   i = 0;
//   while (i < intervals.length && intervals[i].end < newInterval.start) {
//     merged.push(intervals[i]);
//     i += 1;
//   }
//   while (i < intervals.length && intervals[i].start <= newInterval.end) {
//     newInterval.start = Math.min(intervals[i].start, newInterval.start);
//     newInterval.end = Math.max(intervals[i].end, newInterval.end);
//     i += 1;
//   }
//   merged.push(newInterval);

//   while (i < intervals.length) {
//     merged.push(intervals[i]);
//     i += 1;
//   }
//   return merged;
// };
// let result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 6)
// );

// console.log("new output :", result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given two lists of intervals,
// find the intersection of these two lists.
// Each list consists of disjoint intervals sorted on their start time.

// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.

// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]
// Explanation: The output list contains the common intervals between the two lists.

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
// }
// const merge = (intervalsA, intervalsB) => {
//   let result = [],
//     i = 0,
//     j = 0;
//   while (i < intervalsA.length && j < intervalsB.length) {
//     aOverLapB =
//       intervalsA[i].start >= intervalsB[j].start &&
//       intervalsA[i].start <= intervalsB[j].end;
//     bOverLapA =
//       intervalsB[j].start >= intervalsA[i].start &&
//       intervalsB[j].start <= intervalsA[i].end;
//     if (aOverLapB || bOverLapA) {
//       result.push(
//         new Interval(
//           Math.max(intervalsA[i].start, intervalsB[j].start),
//           Math.min(intervalsA[i].end, intervalsB[j].end)
//         )
//       );
//     }
//     if (intervalsA[i].end < intervalsB[j].end) {
//       i += 1;
//     } else {
//       j += 1;
//     }
//   }
//   return result;
// };
// let result = merge(
//   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
//   [new Interval(2, 3), new Interval(5, 7)]
// );

// console.log(result);
