FROM nomorechokedboy/node:14-builder as builder

FROM nomorechokedboy/node:14-runtime
# docker build -f Dockerfile.dev -t nomorechokedboy/web-project:pizza-api-prod .
