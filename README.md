# cassiopeiaWeb

how to run:
musíš mít funkční docker, nodejs a npm

  1. `npm install`
  2. `docker-compose -f testDB/docker-compose.yml up` (compose up pro DB)
  3. `npm run dev`
  
  nebo zapnout všechno najednou pomocí :
  `./run.sh`
  *Pozor, první run stahuje mysql image, tak chvilku trvá
  
Při první spuštění je také potřeba udělat migrace.
Takže jakmile běží docker (prostě potom co se `./run.sh` nějak ustálí)
je potřeba ve vedlejší consoli spustit: `npm run regenerate-migration`
To nahraje data do DB a vytvoří uživatele admin:admin (Jakože jméno admin a heslo admin)