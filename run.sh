#!/usr/bin/env bash
npm install
docker-compose -f testDB/docker-compose.yml up &
npm run dev