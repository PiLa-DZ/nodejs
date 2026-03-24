// *** Reading Modes ***
// *** Readable streams operate in one of two modes: ***
// *** Flowing Mode: Data is read from the source and provided to your application as quickly as possible using events ***
// *** Paused Mode: You must explicitly call stream.read() to get chunks of data from the stream ***

const fs = require('fs');

// Paused mode example
const readableStream = fs.createReadStream('./dir/file.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

// Manually consume the stream using read()
readableStream.on('readable', () => {
  let chunk;
  while (null !== (chunk = readableStream.read())) {
    console.log(`Read ${chunk.length} bytes of data.`);
    console.log(chunk);
  } });

readableStream.on('end', () => {
  console.log('No more data to read.');
});
