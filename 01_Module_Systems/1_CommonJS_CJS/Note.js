// Core Built-in Modules
  fs          - File system operations
  http        - HTTP server and client
  path        - File path utilities
  os          - Operating system utilities
  events      - Event handling
  util        - Utility functions
  stream      - Stream handling
  crypto      - Cryptographic functions
  url         - URL parsing
  querystring - URL query string handling


// CommonJS vs ES Modules
Feature             	CommonJS                  	ES Modules
File Extension      	.js (default)             	.mjs (or .js with proper config)
Import Syntax       	require()                 	import
Export Syntax       	module.exports / exports  	export / export default
Import Timing       	Dynamic (runtime)         	Static (parsed before execution)
Top-level Await     	Not supported             	Supported
File URL in Imports 	Not required              	Required for local files
