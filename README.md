# uruchomienie docker-compose
W celu uruchomienia aplikacji wraz z bazą danych należy wykonać polecenie `docker compose -f compose-db-typesense.yaml -f compose-server.yaml up -d` w katalogu głównym projektu. Po **pierwszym** uruchomieniu należy wykonać polecenie `pnpm prisma migrate dev && tsx prisma/dbDataInit.ts` w celu zainicjalizowania bazy danych.

# compose.yaml
start - `docker compose -f compose-db-typesense.yaml -f compose-server.yaml up -d`
Konfiguracja do produkcji uruchamiająca bazę danych, Typesense oraz aplikację.
usuń - `docker compose -f compose-db-typesense.yaml -f compose-server.yaml down`

# compose-db-typesense.yaml
start - `docker compose -f compose-db-typesense.yaml up -d`
Konfiguracja do developmentu uruchamiająca jedynie bazę danych oraz Typesense. Server uruchamiamy poleceniem `pnpm dev`.
usuń - `docker compose -f compose-db-typesense.yaml down`