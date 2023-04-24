#  Kodtest

Exempelkomponent för att hämta in och presentera anställda hos 1337 .

Exempelkomponenten använder sig av Pinia för delat state mellan filter och komponenten som skriver ut listan med anställda.

### Installerade bibliotek
**- Axios** tillagd från start för att kunna hantera mer komplex funktionalitet framöver.
**- SASS** för modern och tydligare CSS.
**- Pinia** för delat state, för tydligare logik och flöde hellre än att skicka data mellan komponenter genom events.

### Implementerade user-stories
**- Reponsiv design** - Eftersom denna är till för en webbsida så bör den kodas enligt mobile-first principen och ha stöd för detta från början.
**- Modern CSS (SASS)** - För att enklare kunna skala upp projektet när CSSen blir mer avancerad.
**- Sortera på namn och kontor** - För att denna kändes som bas-funktionalitet för en sådan här komponent och för att visa upp kodkunskaper
**- Filtrera på namn och kontor** - För att denna kändes som bas-funktionalitet för en sådan här komponent och för att visa upp kodkunskaper
**- Tillgänglig på publik url (Azure)** - För att enkelt kunna demonstrera resultatet samt påvisa kunskap om deployment. Har heller aldrig använt Azure för detta, så jag ville prova att göra detta som en del av kodtestet.
**- CI/CD Pipeline från Github till Azure** - För att kunna visa på kunskap om deployment.
**- TypeScript** - För att påvisa kunskap om TypeScript, samt att jag inte kodat i detta länge, så jag tog denna för att friska upp minnet.


##  Sätt upp utvecklingsmiljön

Innan du börjar, se till att du har nodejs och npm installerat.

Visual Studio Code [VSCode](https://code.visualstudio.com/) + Plugin för Vue TypeScript + [Volar (https://marketplace.visualstudio.com/items?itemName=Vue.volar)

Därefter:
### Installera nödvändiga paket
```sh

npm install

```

### Skapa .env.local -fil med systemvariabler
Denna behövs för att kunna anropa endpointen för anställda. Lägg in din api-nyckel här för lokal utveckling.
```sh
VITE_1337_API_KEY=<your_api_key_here>
```

###  Starta utvecklingsserver med hot-reload

```sh

npm run dev

```

  

###  Typ-kontroll, kompilera och minifiera för produktion

*Deployment mot Azure sker automatiskt vid push till master, så denna behöver inte köras mer än för test.
  

```sh

npm run build

```
