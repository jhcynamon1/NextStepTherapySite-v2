#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, HTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    print("Starting no-cache server on http://localhost:8100")
    print("This server sends cache-busting headers with every response")
    HTTPServer(('localhost', 8100), NoCacheHandler).serve_forever()