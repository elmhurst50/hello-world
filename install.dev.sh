
#!/bin/bash

docker-compose -f docker-compose.yml up -d --build

docker exec -it -w /var/www/html/src challenge2022 npm install

docker exec -it -w /var/www/html/src challenge2022 npm run dev
