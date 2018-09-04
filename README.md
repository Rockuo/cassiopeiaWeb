# cassiopeiaWeb

how to run:

  1. npm install
  - env PORT=1234 npm start


testing:\
docker run --detach --name=test-mysql --env="MYSQL_ROOT_PASSWORD=mypassword" --publish 3306:3306 mysql:5.7\
docker exec -it test-mysql bash\
mysql -u root -p\
CREATE DATABASE testing;
