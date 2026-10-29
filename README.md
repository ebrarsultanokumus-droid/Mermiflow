# MermiFlow – selbst hosten mit GitHub Pages und Firebase

Diese Version läuft auf einer eigenen Webadresse (z. B. `deinname.github.io/mermiflow`).
Konten mit E-Mail und Passwort, Chat, Feed, Kalender, Spiele und Tiere werden in **Firebase** gespeichert (kostenloser Spark-Tarif reicht für euch drei).

Ordnerinhalt:

| Datei | Wofür |
|---|---|
| `index.html` | die komplette App |
| `config.js` | **deine Einstellungen** (Firebase-Daten, Admin-E-Mail, Songs) |
| `firestore.rules` | Sicherheitsregeln für die Datenbank |
| `music/` | hier kommen eure MP3-Dateien rein (optional) |

---

## Schritt 1 – Firebase-Projekt anlegen
1. Gehe auf <https://console.firebase.google.com> und melde dich mit deinem Google-Konto an.
2. **Projekt hinzufügen** → Name z. B. `mermiflow` → Google Analytics kannst du ausschalten → **Projekt erstellen**.

## Schritt 2 – Web-App registrieren und Daten kopieren
1. Auf der Projektseite auf das **`</>`-Symbol** (Web) klicken.
2. App-Name `MermiFlow` eingeben, „Firebase Hosting“ **nicht** anhaken → **App registrieren**.
3. Firebase zeigt dir einen Block `const firebaseConfig = { apiKey: "...", ... }`.
4. Öffne `config.js` und kopiere die sechs Werte (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`) in den Bereich `firebase: { ... }`.
5. Trage bei `adminEmail` **deine** E-Mail-Adresse ein.

> Der apiKey ist kein Geheimnis – er darf öffentlich auf GitHub liegen. Geschützt werden eure Daten durch die Regeln aus Schritt 4.

## Schritt 3 – Anmeldung mit E-Mail einschalten
1. Links im Menü: **Build → Authentication → Jetzt starten**.
2. Reiter **Anmeldemethode** → **E-Mail/Passwort** → aktivieren → **Speichern**.
3. Optional: Reiter **Vorlagen** → Sprache auf Deutsch stellen (für „Passwort vergessen“-Mails).

## Schritt 4 – Datenbank anlegen und Regeln einfügen
1. Links: **Build → Firestore Database → Datenbank erstellen**.
2. Standort **europe-west3 (Frankfurt)** wählen → **Im Produktionsmodus starten**.
3. Reiter **Regeln** öffnen, alles löschen und den Inhalt von `firestore.rules` einfügen.
4. **Ganz wichtig:** In den Regeln `deine@email.de` durch deine echte E-Mail ersetzen (gleiche wie in `config.js`).
5. **Veröffentlichen** klicken.

## Schritt 5 – Musik (optional)
1. Lege MP3-Dateien in den Ordner `music/`, z. B. `music/unser-song.mp3`.
2. Trage sie in `config.js` unter `music` ein:
   ```js
   music: [
     { name: "Unser Song", artist: "Name", url: "music/unser-song.mp3" },
   ]
   ```
3. Die Songs erscheinen dann in der App über den Musik-Button unter **„Eure Songs“**.

> Achtung: Ein GitHub-Repository ist öffentlich. Lade nur Musik hoch, die ihr dafür verwenden dürft (z. B. lizenzfreie Tracks). Gekaufte Songs von Künstlern wie Mero gehören **nicht** ins Repo – die kann jede über „Eigene Musik → Datei wählen“ vom eigenen Handy abspielen, ohne sie hochzuladen. Die drei eingebauten MermiFlow-Tracks laufen immer.

## Schritt 6 – Auf GitHub hochladen
1. Konto anlegen auf <https://github.com> (falls noch keins).
2. Oben rechts **+ → New repository** → Name `mermiflow` → **Public** → **Create repository**.
3. Auf der leeren Repo-Seite: **uploading an existing file** anklicken.
4. **Alle Dateien und Ordner** aus diesem Ordner hineinziehen (`index.html`, `config.js`, `firestore.rules`, `README.md`, `.nojekyll`, Ordner `music`).
   Tipp: Die Datei `.nojekyll` ist auf dem Mac/PC evtl. unsichtbar – sie ist nicht zwingend nötig.
5. Unten **Commit changes**.

## Schritt 7 – GitHub Pages einschalten
1. Im Repo: **Settings → Pages**.
2. Bei **Source**: „Deploy from a branch“, Branch **main**, Ordner **/ (root)** → **Save**.
3. Nach 1–2 Minuten steht oben die Adresse, z. B. `https://deinname.github.io/mermiflow/`.

## Schritt 8 – Adresse in Firebase erlauben
1. Firebase → **Authentication → Einstellungen → Autorisierte Domains → Domain hinzufügen**.
2. `deinname.github.io` eintragen (ohne `https://` und ohne `/mermiflow`).

## Schritt 9 – Starten
1. Öffne deine Adresse → **Konto erstellen** mit deiner Admin-E-Mail → Benutzername, Figur und Tier wählen. Du bist automatisch Admin.
2. Schick den Link an deine Freundinnen. Sie erstellen ihr Konto.
3. Du gibst sie unter **Admin** frei – fertig.

**Als App aufs Handy:** Link im Handy-Browser öffnen → Teilen → **Zum Home-Bildschirm**.

---

## Änderungen später
- Datei auf GitHub anklicken → Stift-Symbol → ändern → **Commit changes**. Nach ca. 1 Minute ist es online.
- Neue Songs: MP3 in `music/` hochladen + in `config.js` eintragen.

## Wenn etwas nicht klappt
| Problem | Lösung |
|---|---|
| App zeigt „Vorschau-Modus“ | `apiKey` in `config.js` ist leer oder falsch kopiert. |
| Beim Login: Fehler „unauthorized domain“ | Schritt 8 – Domain in Firebase eintragen. |
| Konto erstellt, aber „Speichern hat nicht geklappt“ | Regeln aus Schritt 4 veröffentlicht? |
| Du bist nicht Admin | E-Mail in `config.js` **und** `firestore.rules` muss genau deine Login-E-Mail sein. |
| Freundinnen sehen keinen Chat | Sie sind noch nicht freigegeben (Admin → Freigeben). |
