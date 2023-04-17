export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const item of reportWithIterator) {
    result.push(item);
  }
  let i = 0;
  while (i < result.length - 1) {
    result[i] += ' |';
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return result.join(' ');
}
