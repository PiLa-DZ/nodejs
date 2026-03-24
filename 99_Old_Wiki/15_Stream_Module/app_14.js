// *** Practical Examples ***
// *** HTTP Streaming ***
// *** Streams are used extensively in HTTP requests and responses. ***

const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle different routes
  if (req.url === '/') {
    // Send a simple response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Stream Demo</h1><p>Try <a href="/file">streaming a file</a> or <a href="/video">streaming a video</a>.</p>');
  }
  else if (req.url === '/file') {
    // Stream a large text file
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const fileStream = fs.createReadStream('./dir/largefile.txt', 'utf8');

    // Pipe the file to the response (handles backpressure automatically)
    fileStream.pipe(res);

    // Handle errors
    fileStream.on('error', (err) => {
      console.error('File stream error:', err);
      res.statusCode = 500;
      res.end('Server Error');
    });
  }
  else if (req.url === '/video') {
    // Stream a video file with proper headers
    const videoPath = 'video.mp4';
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      // Handle range requests for video seeking
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;

      const videoStream = fs.createReadStream(videoPath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4'
      });

      videoStream.pipe(res);
      } else {
        // No range header, send entire video
        res.writeHead(200, {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4'
        });

        fs.createReadStream(videoPath).pipe(res);
      }
  } 
  else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});

