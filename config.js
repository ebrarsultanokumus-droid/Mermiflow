// MermiFlow – Einstellungen
// Trage hier deine Daten ein (siehe README.md, Schritt 2 bis 4).
// Solange apiKey leer ist, läuft die App nur als Vorschau auf dem eigenen Gerät.

window.MERMI_CONFIG = {
  // Deine E-Mail-Adresse. Wer sich mit dieser E-Mail registriert, ist Admin.
  // Dieselbe Adresse muss auch in firestore.rules stehen.
  adminEmail: "ebrarsultanokumus@gmail.com",

  // Aus der Firebase-Konsole: Projekteinstellungen → Allgemein → Deine Apps → Web-App → SDK-Konfiguration
  firebase: {
  apiKey: "AIzaSyDJQ19syCpFAiTYpetuWIC4xMKL8OXJZPU",
  authDomain: "mermiflow-1988c.firebaseapp.com",
  projectId: "mermiflow-1988c",
  storageBucket: "mermiflow-1988c.firebasestorage.app",
  messagingSenderId: "999549730537",
  appId: "1:999549730537:web:a13e8760ef3abf4a70ba78"
  },

  // Eigene Songs: MP3-Dateien in den Ordner "music" legen und hier eintragen.
  // Nur Musik verwenden, die ihr nutzen dürft.
  music: [
    // { name: "Unser Song", artist: "Name", url: "music/unser-song.mp3" },
  ]
};
