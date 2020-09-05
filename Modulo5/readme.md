docker run \
    --name postgres \
    -e POSTGRES_USER=ed_arias \
    -e POSTGRES_PASSWORD=12345 \
    -e POSTGRES_DB=herois \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080
    --link postgres:postgres \
    -d \
    adminer

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=12345 \
    -d \
    mongo:4

docker run \
     --name mongoclient \
     -p 3000:3000 \
     --link mongodb:mongodb \
     -d \
     mongoclient/mongoclient