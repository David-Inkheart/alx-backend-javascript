// Create a function named createInt8TypedArray that returns a new ArrayBuffer
// with an Int8 value at a specific position.

// It should accept three arguments: length (Number), position (Number), and value (Number).

// If adding the value is not possible the error Position outside range should be thrown.

// eslint-disable-next-line
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  try {
    const TarrayView = new DataView(buffer);
    TarrayView.setInt8(position, value);
    return TarrayView;
  } catch (e) {
    console.log('Position outside range');
  }
}
