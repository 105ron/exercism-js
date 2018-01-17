const bufferEmptyException = () => 'Error reading Buffer - Buffer empty';

const bufferFullException = () => 'Error writing to Buffer - Buffer full';

const circularBuffer = capacity => {
  const buffer = {
    array: [],
    capacity
  }

  const read = () => {
    if (buffer.array.length === 0) throw bufferEmptyException()
    return buffer.array.shift();
  }

  const write = value => {
    if (buffer.array.length === buffer.capacity) throw bufferFullException();
    if (value) buffer.array.push(value);
  }

  const forceWrite = value => {
    if (buffer.array.length === buffer.capacity) buffer.array.shift();
    write(value);
  }

  const clear = () => {
    buffer.array = []
  }

  return {
    read, write, clear, forceWrite
  }
}

module.exports = {
    circularBuffer,
    bufferEmptyException,
    bufferFullException
};