# cassiopeiaWeb

how to run:

  1. npm install
  - env PORT=1234 npm start
  2. Nainstalovat testovací DB:

testing:\
docker run --detach --name=test-mysql --env="MYSQL_ROOT_PASSWORD=mypassword" --publish 3306:3306 mysql:5.7\
docker exec -it test-mysql bash\
mysql -u root -p\
CREATE DATABASE testing;
  
  3. npm ŕun dev
  4. vlézt do HomeController.js
  5. odcomentovat danger
  6. přistoupit na 127.0.0.1:3000/danger (to dělá migrace :D :D)
  8. zaregistrovat uživatele na 127.0.0.1:3000/signup
  9. v DB mu změnit ["user"] na ["admin"]
  
     NEBO vlézt do UserController.js zakomentovat to že je potřeba admin role a prostě sám sobě v editaci uživatelů dát admin práva
  10. pokud ses z toho neposral, tak hotovo
