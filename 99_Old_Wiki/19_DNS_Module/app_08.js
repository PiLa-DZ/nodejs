// *** Advanced DNS Operations ***
// 2. Network vs. Operating System Level Resolution

// The DNS module offers two different approaches to name resolution:
// Function 	Implementation 	Network Calls 	Uses
// dns.lookup() 	Uses getaddrinfo() system call 	No direct network calls 	Follows local configuration (hosts file, etc.)
// dns.resolve*(), dns.reverse() 	Makes actual network requests 	Always connects to DNS servers 	Bypasses local configuration, direct DNS queries

// Warning: Due to these differences, the results from dns.lookup() and dns.resolve*() methods may not always match, especially in environments with custom host configurations.
