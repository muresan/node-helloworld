# node-helloworld

Simple hello-world type app that shows also request headers, responses and IPs used on the client and server.

```
$ curl localhost:3000
Hello v1.0 ::ffff:172.17.0.1 from 172.17.0.2
{
    "method": "GET",
    "url": "/",
    "headers": {
        "host": "localhost:3000",
        "user-agent": "curl/7.51.0",
        "accept": "*/*"
    },
    "ip": "::ffff:172.17.0.1",
    "ips": []
}
```

