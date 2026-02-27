# Mumbai Time API

API service that provides current time information for Mumbai timezone.

## Endpoint

- `GET /time` - Returns current Mumbai time
- `GET /health` - Health check endpoint

## Running Locally

```bash
npm install
npm start
```

## Running with Docker

```bash
docker build -t api-mumbai .
docker run -p 3005:3005 api-mumbai
```