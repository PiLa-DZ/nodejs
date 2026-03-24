# Install openssl

openssl genrsa -out key.pem

openssl req -new -key key.pem -out csr.pem

openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

# // allow invalid certificates on firefox
## // on search bar   --> about:config
## // on search input --> security.ssl.enable_ocsp_stapling
## // change it to    --> false
