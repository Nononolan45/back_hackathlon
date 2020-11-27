#! /bin/bash

mongoimport --host mongo --db hackathlon --collection schools --type json --file /data/schools.json --jsonArray
mongoimport --host mongo --db hackathlon --collection users --type json --file /data/users.json --jsonArray