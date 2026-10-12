// Übungsaufgaben zur Bernoulli-Formel. Alle Werte mit Python nachgerechnet (auf 4 Stellen gerundet).
// stufe: 1 = Einstieg (genau k), 2 = kumuliert (höchstens, mindestens), 3 = Abiturniveau.
// Teilaufgaben mit `erg` haben eine Ergebnisprüfung; ohne `erg` nur die Musterlösung.
const t = String.raw;

export const AUFGABEN = [
  {
    nr: 1,
    stufe: 1,
    titel: "Elfmeter im Training",
    bild: "01-elfmeter",
    text: t`Lea trifft beim Elfmeter mit einer Wahrscheinlichkeit von 80 %. Im Training schießt sie fünf Elfmeter.`,
    teile: [
      {
        frage: t`Begründe, dass die Anzahl der Treffer durch eine Bernoulli-Kette beschrieben werden kann. Gib \(n\) und \(p\) an.`,
        loesung: [
          t`p:Jeder Schuss hat genau zwei Ausgänge: Treffer oder kein Treffer.`,
          t`p:Wir nehmen an, dass die Trefferwahrscheinlichkeit bei jedem Schuss gleich bleibt und die Schüsse sich nicht beeinflussen (keine Müdigkeit, kein Druck).`,
          t`p:Dann ist \(X\): „Anzahl der Treffer“ eine Bernoulli-Kette mit \(n = 5\) und \(p = 0{,}8\).`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit trifft sie genau viermal?`,
        erg: 0.4096,
        loesung: [t`P(X=4) = \binom{5}{4}\cdot 0{,}8^4\cdot 0{,}2^1 = 5\cdot 0{,}4096\cdot 0{,}2 = 0{,}4096`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit trifft sie alle fünf?`,
        erg: 0.3277,
        loesung: [t`P(X=5) = \binom{5}{5}\cdot 0{,}8^5\cdot 0{,}2^0 = 0{,}8^5 = 0{,}32768 \approx 0{,}3277`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit trifft sie höchstens dreimal?`,
        erg: 0.2627,
        tipp: t`Vier Summanden \(P(X=0)\) bis \(P(X=3)\) sind viel Arbeit. Was ist das Gegenereignis?`,
        loesung: [
          t`p:Gegenereignis von „höchstens 3“ ist „mindestens 4“.`,
          t`P(X\le 3) = 1 - P(X=4) - P(X=5) = 1 - 0{,}4096 - 0{,}32768 = 0{,}26272 \approx 0{,}2627`,
        ],
      },
    ],
  },
  {
    nr: 2,
    stufe: 1,
    titel: "Warten auf die Sechs",
    bild: "03-wuerfel",
    text: t`Beim Brettspiel darf man erst mit einer Sechs starten. Mia würfelt sechsmal mit einem fairen Würfel.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit würfelt sie genau zwei Sechsen?`,
        erg: 0.2009,
        loesung: [
          t`X:\ \text{Anzahl der Sechsen},\quad n = 6,\ p = \tfrac16`,
          t`P(X=2) = \binom{6}{2}\cdot\left(\tfrac16\right)^2\cdot\left(\tfrac56\right)^4 = 15\cdot\tfrac1{36}\cdot\tfrac{625}{1296} \approx 0{,}2009`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit würfelt sie keine einzige Sechs?`,
        erg: 0.3349,
        loesung: [t`P(X=0) = \left(\tfrac56\right)^6 \approx 0{,}3349`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit kann sie nach den sechs Würfen starten, würfelt also mindestens eine Sechs?`,
        erg: 0.6651,
        loesung: [t`P(X\ge 1) = 1 - P(X=0) = 1 - \left(\tfrac56\right)^6 \approx 1 - 0{,}3349 = 0{,}6651`],
      },
    ],
  },
  {
    nr: 3,
    stufe: 1,
    titel: "Freiwürfe",
    bild: "11-freiwurf",
    text: t`Jonas verwandelt 70 % seiner Freiwürfe. Im Spiel bekommt er acht Freiwürfe.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit trifft er genau sechsmal?`,
        erg: 0.2965,
        loesung: [
          t`X:\ \text{Anzahl der Treffer},\quad n = 8,\ p = 0{,}7`,
          t`P(X=6) = \binom{8}{6}\cdot 0{,}7^6\cdot 0{,}3^2 = 28\cdot 0{,}117649\cdot 0{,}09 \approx 0{,}2965`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit trifft er mindestens siebenmal?`,
        erg: 0.2553,
        loesung: [
          t`P(X\ge 7) = P(X=7) + P(X=8)`,
          t`= \binom{8}{7}\cdot 0{,}7^7\cdot 0{,}3 + 0{,}7^8 \approx 0{,}1977 + 0{,}0576 = 0{,}2553`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit trifft er höchstens fünfmal?`,
        erg: 0.4482,
        tipp: t`Nutze das Gegenereignis \(X \ge 6\) und die Ergebnisse von oben.`,
        loesung: [t`P(X\le 5) = 1 - P(X=6) - P(X=7) - P(X=8) \approx 1 - 0{,}2965 - 0{,}1977 - 0{,}0576 = 0{,}4482`],
      },
    ],
  },
  {
    nr: 4,
    stufe: 2,
    titel: "Raten im Multiple-Choice-Test",
    bild: "02-multiple-choice",
    text: t`Ein Test hat zehn Fragen mit je vier Antworten, von denen genau eine richtig ist. Tim hat nicht gelernt und kreuzt bei jeder Frage zufällig eine Antwort an.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit hat er genau drei Antworten richtig?`,
        erg: 0.2503,
        loesung: [
          t`X:\ \text{Anzahl der richtigen Antworten},\quad n = 10,\ p = 0{,}25`,
          t`P(X=3) = \binom{10}{3}\cdot 0{,}25^3\cdot 0{,}75^7 = 120\cdot 0{,}015625\cdot 0{,}13348 \approx 0{,}2503`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit hat er höchstens eine Antwort richtig?`,
        erg: 0.244,
        loesung: [
          t`P(X\le 1) = P(X=0) + P(X=1) = 0{,}75^{10} + \binom{10}{1}\cdot 0{,}25\cdot 0{,}75^9`,
          t`\approx 0{,}0563 + 0{,}1877 = 0{,}2440`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit hat er mindestens zwei Antworten richtig?`,
        erg: 0.756,
        loesung: [t`P(X\ge 2) = 1 - P(X\le 1) \approx 1 - 0{,}2440 = 0{,}7560`],
      },
    ],
  },
  {
    nr: 5,
    stufe: 2,
    titel: "Blutspende",
    bild: "04-blutspende",
    text: t`Etwa 6 % der Menschen in Deutschland haben die Blutgruppe 0 negativ. Ihr Blut kann im Notfall fast jeder bekommen. An einem Spendentermin kommen 20 Personen.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit hat genau eine Person Blutgruppe 0 negativ?`,
        erg: 0.3703,
        loesung: [
          t`X:\ \text{Anzahl der Spender mit 0 negativ},\quad n = 20,\ p = 0{,}06`,
          t`P(X=1) = \binom{20}{1}\cdot 0{,}06\cdot 0{,}94^{19} \approx 0{,}3703`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit hat keine Person diese Blutgruppe?`,
        erg: 0.2901,
        loesung: [t`P(X=0) = 0{,}94^{20} \approx 0{,}2901`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mindestens zwei dabei?`,
        erg: 0.3395,
        loesung: [t`P(X\ge 2) = 1 - P(X=0) - P(X=1) \approx 1 - 0{,}2901 - 0{,}3703 = 0{,}3395`],
      },
    ],
  },
  {
    nr: 6,
    stufe: 2,
    titel: "Keimende Samen",
    bild: "07-samen",
    text: t`Auf einer Samentüte steht: „Keimfähigkeit 90 %“. Ella sät zwölf Samen in einzelne Töpfe.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit keimen alle zwölf Samen?`,
        erg: 0.2824,
        loesung: [
          t`X:\ \text{Anzahl der keimenden Samen},\quad n = 12,\ p = 0{,}9`,
          t`P(X=12) = 0{,}9^{12} \approx 0{,}2824`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit keimen mindestens zehn Samen?`,
        erg: 0.8891,
        loesung: [
          t`P(X\ge 10) = P(X=10) + P(X=11) + P(X=12)`,
          t`= \binom{12}{10}\cdot 0{,}9^{10}\cdot 0{,}1^2 + \binom{12}{11}\cdot 0{,}9^{11}\cdot 0{,}1 + 0{,}9^{12}`,
          t`\approx 0{,}2301 + 0{,}3766 + 0{,}2824 = 0{,}8891`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit keimen höchstens neun Samen?`,
        erg: 0.1109,
        loesung: [t`P(X\le 9) = 1 - P(X\ge 10) \approx 1 - 0{,}8891 = 0{,}1109`],
      },
    ],
  },
  {
    nr: 7,
    stufe: 2,
    titel: "Prüfung einer Schraubenlieferung",
    bild: "08-schrauben",
    text: t`Eine Firma liefert Schrauben, von denen 5 % fehlerhaft sind. Der Kunde prüft zehn zufällig gewählte Schrauben. Er nimmt die Lieferung an, wenn höchstens eine davon fehlerhaft ist.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit wird die Lieferung angenommen?`,
        erg: 0.9139,
        loesung: [
          t`X:\ \text{Anzahl der fehlerhaften Schrauben},\quad n = 10,\ p = 0{,}05`,
          t`P(X\le 1) = 0{,}95^{10} + \binom{10}{1}\cdot 0{,}05\cdot 0{,}95^9 \approx 0{,}5987 + 0{,}3151 = 0{,}9139`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit wird sie abgelehnt?`,
        erg: 0.0861,
        loesung: [t`P(X\ge 2) = 1 - P(X\le 1) \approx 1 - 0{,}9139 = 0{,}0861`],
      },
      {
        frage: t`Deute das Ergebnis aus Sicht der Firma.`,
        loesung: [
          t`p:Obwohl die Lieferung genau so gut ist wie versprochen, wird sie in etwa 8,6 % der Fälle abgelehnt, also ungefähr jede zwölfte Lieferung. Das ist das Risiko der Firma bei dieser Prüfregel.`,
        ],
      },
    ],
  },
  {
    nr: 8,
    stufe: 2,
    titel: "Defekte Akkus",
    bild: "05-akkus",
    text: t`Ein Hersteller weiß: 3 % seiner Smartphone-Akkus sind defekt. Ein Händler bekommt eine Kiste mit 50 Akkus.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit ist kein Akku defekt?`,
        erg: 0.2181,
        loesung: [
          t`X:\ \text{Anzahl der defekten Akkus},\quad n = 50,\ p = 0{,}03`,
          t`P(X=0) = 0{,}97^{50} \approx 0{,}2181`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind höchstens zwei Akkus defekt?`,
        erg: 0.8108,
        loesung: [
          t`P(X\le 2) = 0{,}97^{50} + \binom{50}{1}\cdot 0{,}03\cdot 0{,}97^{49} + \binom{50}{2}\cdot 0{,}03^2\cdot 0{,}97^{48}`,
          t`\approx 0{,}2181 + 0{,}3372 + 0{,}2555 = 0{,}8108`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mehr als zwei Akkus defekt?`,
        erg: 0.1892,
        loesung: [t`P(X > 2) = 1 - P(X\le 2) \approx 1 - 0{,}8108 = 0{,}1892`],
      },
    ],
  },
  {
    nr: 9,
    stufe: 2,
    titel: "Umfrage auf dem Schulhof",
    bild: "09-umfrage",
    text: t`Laut einer Studie nutzen 40 % der Jugendlichen eine bestimmte Video-App täglich. Für die Schülerzeitung werden acht Jugendliche zufällig befragt.`,
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit nutzt genau die Hälfte die App täglich?`,
        erg: 0.2322,
        loesung: [
          t`X:\ \text{Anzahl der täglichen Nutzer},\quad n = 8,\ p = 0{,}4`,
          t`P(X=4) = \binom{8}{4}\cdot 0{,}4^4\cdot 0{,}6^4 = 70\cdot 0{,}0256\cdot 0{,}1296 \approx 0{,}2322`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind es mehr als sechs?`,
        erg: 0.0085,
        loesung: [
          t`P(X > 6) = P(X=7) + P(X=8) = \binom{8}{7}\cdot 0{,}4^7\cdot 0{,}6 + 0{,}4^8`,
          t`\approx 0{,}0079 + 0{,}0007 = 0{,}0085`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit ist es höchstens einer?`,
        erg: 0.1064,
        loesung: [t`P(X\le 1) = 0{,}6^8 + \binom{8}{1}\cdot 0{,}4\cdot 0{,}6^7 \approx 0{,}0168 + 0{,}0896 = 0{,}1064`],
      },
    ],
  },
  {
    nr: 10,
    stufe: 3,
    titel: "Lose an der Losbude",
    bild: "10-lose",
    text: t`An der Losbude auf dem Schulfest steht: „Jedes fünfte Los gewinnt!“ In der Trommel liegen sehr viele Lose, deshalb kann man jedes Los als unabhängigen Versuch mit \(p = 0{,}2\) ansehen.`,
    teile: [
      {
        frage: t`Paul kauft zehn Lose. Mit welcher Wahrscheinlichkeit gewinnt er gar nichts?`,
        erg: 0.1074,
        loesung: [
          t`X:\ \text{Anzahl der Gewinne},\quad n = 10,\ p = 0{,}2`,
          t`P(X=0) = 0{,}8^{10} \approx 0{,}1074`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit gewinnt er mindestens zweimal?`,
        erg: 0.6242,
        loesung: [
          t`P(X\ge 2) = 1 - P(X=0) - P(X=1) = 1 - 0{,}8^{10} - \binom{10}{1}\cdot 0{,}2\cdot 0{,}8^9`,
          t`\approx 1 - 0{,}1074 - 0{,}2684 = 0{,}6242`,
        ],
      },
      {
        frage: t`Wie viele Lose muss man mindestens kaufen, damit man mit einer Wahrscheinlichkeit von mindestens 90 % wenigstens einmal gewinnt?`,
        erg: 11,
        ganzzahl: true,
        tipp: t`Stelle eine Ungleichung für \(P(X\ge 1) = 1 - 0{,}8^n\) auf und löse sie mit dem Logarithmus.`,
        loesung: [
          t`1 - 0{,}8^n \ge 0{,}9 \iff 0{,}8^n \le 0{,}1`,
          t`n \ge \frac{\ln 0{,}1}{\ln 0{,}8} \approx 10{,}32`,
          t`p:Beim Teilen durch \(\ln 0{,}8 < 0\) dreht sich das Ungleichheitszeichen um.`,
          t`p:Also braucht man mindestens 11 Lose. Probe: \(1 - 0{,}8^{10} \approx 0{,}893 < 0{,}9\) und \(1 - 0{,}8^{11} \approx 0{,}914 \ge 0{,}9\).`,
        ],
      },
    ],
  },
  {
    nr: 11,
    stufe: 3,
    titel: "Überbuchtes Flugzeug",
    bild: "06-flugzeug",
    text: t`Ein Flugzeug hat 50 Plätze. Erfahrungsgemäß erscheinen nur 90 % der Fluggäste mit Ticket. Die Fluglinie verkauft deshalb 52 Tickets.`,
    teile: [
      {
        frage: t`Nenne die Annahmen, unter denen man die Anzahl der erscheinenden Fluggäste als Bernoulli-Kette beschreiben kann. Beurteile, ob sie hier passen.`,
        loesung: [
          t`p:Jeder Fluggast erscheint mit derselben Wahrscheinlichkeit \(p = 0{,}9\), unabhängig von den anderen; \(n = 52\).`,
          t`p:Die Unabhängigkeit ist fraglich: Familien und Reisegruppen erscheinen meist gemeinsam oder gar nicht. Das Modell ist also nur eine Näherung.`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit erscheinen mehr Fluggäste, als Plätze da sind?`,
        erg: 0.0283,
        loesung: [
          t`X:\ \text{Anzahl der erscheinenden Fluggäste},\quad n = 52,\ p = 0{,}9`,
          t`P(X\ge 51) = \binom{52}{51}\cdot 0{,}9^{51}\cdot 0{,}1 + 0{,}9^{52} \approx 0{,}0241 + 0{,}0042 = 0{,}0283`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit bleibt mindestens ein Platz leer?`,
        erg: 0.9034,
        tipp: t`Mindestens ein Platz bleibt leer, wenn höchstens 49 Fluggäste erscheinen. Nutze das Gegenereignis.`,
        loesung: [
          t`P(X\le 49) = 1 - P(X=50) - P(X=51) - P(X=52)`,
          t`P(X=50) = \binom{52}{50}\cdot 0{,}9^{50}\cdot 0{,}1^2 = 1326\cdot 0{,}9^{50}\cdot 0{,}01 \approx 0{,}0683`,
          t`P(X\le 49) \approx 1 - 0{,}0683 - 0{,}0241 - 0{,}0042 = 0{,}9034`,
        ],
      },
    ],
  },
  {
    nr: 12,
    stufe: 3,
    titel: "Wann passt das Modell?",
    bild: "12-schulhof",
    text: t`Für ein Interview werden fünf Personen ausgelost. Es geht darum, wie viele Mädchen dabei sind.`,
    teile: [
      {
        frage: t`In einer Klasse mit 30 Kindern, davon 12 Mädchen, werden fünf Namen gezogen (ohne Zurücklegen). Erkläre, warum das keine Bernoulli-Kette ist.`,
        loesung: [
          t`p:Ohne Zurücklegen ändert sich die Wahrscheinlichkeit von Zug zu Zug: beim ersten Zug \(\tfrac{12}{30} = 0{,}4\), nach einem gezogenen Mädchen nur noch \(\tfrac{11}{29} \approx 0{,}38\).`,
          t`p:Die Trefferwahrscheinlichkeit ist also nicht auf jeder Stufe gleich.`,
        ],
      },
      {
        frage: t`An der ganzen Schule (1200 Kinder, davon 480 Mädchen) werden fünf ausgelost. Berechne näherungsweise mit einer Bernoulli-Kette die Wahrscheinlichkeit für genau zwei Mädchen.`,
        erg: 0.3456,
        loesung: [
          t`p = \tfrac{480}{1200} = 0{,}4,\quad n = 5`,
          t`P(X=2) = \binom{5}{2}\cdot 0{,}4^2\cdot 0{,}6^3 = 10\cdot 0{,}16\cdot 0{,}216 = 0{,}3456`,
        ],
      },
      {
        frage: t`Ohne Zurücklegen gerechnet ergeben sich genau: Schule \(0{,}3463\), Klasse \(0{,}3779\). Beurteile damit, wann die Bernoulli-Kette ein gutes Modell ist.`,
        loesung: [
          t`p:Schule: \(0{,}3456\) statt \(0{,}3463\), kaum ein Unterschied. Bei 1200 Kindern ändert ein Zug die Anteile fast nicht.`,
          t`p:Klasse: \(0{,}3456\) statt \(0{,}3779\), ein deutlicher Unterschied.`,
          t`p:Die Bernoulli-Kette passt gut, wenn die Gruppe groß ist im Vergleich zur Zahl der Ziehungen.`,
        ],
      },
    ],
  },
];
