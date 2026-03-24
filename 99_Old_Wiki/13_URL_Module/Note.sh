URL Parsing and Formatting
URL Object Properties

When you parse a URL, you get a URL object with the following properties:

    href:     The full URL that was parsed
    protocol: The protocol scheme (e.g., 'http:')
    host:     The full host portion (e.g., 'example.com:8080')
    hostname: The hostname portion (e.g., 'example.com')
    port:     The port number if specified
    pathname: The path section of the URL
    search:   The query string including the leading ?
    query:    Either the query string without the ?, or a parsed query object
    hash:     The fragment identifier including the #

