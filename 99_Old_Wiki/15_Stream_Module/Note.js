// Stream Events
// All streams are instances of EventEmitter and emit several events:
// Readable Stream Events
    data:     Emitted when the stream has data available to read
    end:      Emitted when there's no more data to be consumed
    error:    Emitted if an error occurs while reading
    close:    Emitted when the stream's underlying resource has been closed
    readable: Emitted when data is available to be read
// Writable Stream Events
    drain:    Emitted when the stream is ready to accept more data after a write() method has returned false
    finish:   Emitted when all data has been flushed to the underlying system
    error:    Emitted if an error occurs while writing
    close:    Emitted when the stream's underlying resource has been closed
    pipe:     Emitted when the pipe() method is called on a readable stream
    unpipe:   Emitted when the unpipe() method is called on a readable stream
