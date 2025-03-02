 <script>
    // Globale Variablen
    let currentCategory = '';
    let currentSubcategory = 'Standard';
    let currentDifficulty = '';
    let currentQuestionIndex = 0;
    let teams = [];
    let currentTeamIndex = 0;
    let jokerUsedThisRound = false;

    const questions = {
      "BSK": {
        "Standard": {
          "Leicht": [
            {
              question: "Was bezeichnet der Begriff „Umsatz“?",
              answers: ["Gesamtertrag ohne Abzüge", "Summe der verkauften Waren und Dienstleistungen", "Reingewinn", "Summe der Kosten"],
              correct: 1
            },
            {
              question: "Was ist eine Bilanz?",
              answers: ["Übersicht von Einnahmen und Ausgaben", "Gegenüberstellung von Vermögen und Schulden", "Steuererklärung", "Gewinn- und Verlustrechnung"],
              correct: 1
            },
            {
              question: "Was bedeutet der Begriff „ROI“?",
              answers: ["Return on Investment", "Rate of Inflation", "Return on Income", "Rate of Interest"],
              correct: 0
            },
            {
              question: "Was sagt der ROI aus?",
              answers: ["Rentabilität einer Investition im Verhältnis zu den Kosten", "Höhe des Gewinns allein", "Umsatzsteigerung", "Marktanteil"],
              correct: 0
            },
            {
              question: "Was gehört zu den 4 P's des Marketing-Mix?",
              answers: ["Produkt, Preis, Platz, Promotion", "Produkt, Prozess, Personal, Planung", "Preis, Planung, Produktion, Positionierung", "Produkt, Preis, Politik, Positionierung"],
              correct: 0
            },
            {
              question: "Was ist Branding?",
              answers: ["Aufbau einer Markenidentität", "Preisfestlegung", "Logistikplanung", "Personalmanagement"],
              correct: 0
            }
          ],
          "Mittel": [
            {
              question: "Was versteht man unter dem Begriff „Break-even Point“?",
              answers: ["Punkt der maximalen Produktion", "Punkt, an dem Einnahmen und Kosten gleich sind", "Zeitpunkt der Gewinnmaximierung", "Zeitpunkt der Steuerzahlung"],
              correct: 1
            },
            {
              question: "Was beschreibt der Begriff „Rückstellung“?",
              answers: ["Ein Betrag für unerwartete Kosten", "Ein Betrag den man sich für Garantiefälle zurücklegt", "Gesamtkosten eines Produkts", "Summe aller Einnahmen"],
              correct: 1
            },
            {
              question: "Was ist eine Kalkulation?",
              answers: ["Berechnung von Preisen und Kosten", "Erstellung einer Bilanz", "Analyse von Markttrends", "Planung von Marketingkampagnen"],
              correct: 0
            },
            {
              question: "Was bezeichnet die Amortisation?",
              answers: ["Die Wertminderung von Anlagen", "Die Rückzahlung von Investitionskosten durch Erträge", "Die Aufteilung von Kosten", "Die Steuerberechnung"],
              correct: 1
            },
            {
              question: "Wieso kann ein Unternehmen trotz Gewinn in die Insolvenz gehen?",
              answers: ["Aufgrund mangelnder Rentabilität in den Produkten.", "Wegen unzureichender Liquidität und Zahlungsunfähigkeit.", "Weil das Unternehmen keine Gewinnsteuern zahlt.", "Aufgrund von zu hohen Marketingausgaben."],
              correct: 1
            },
            {
              question: "Was ist auf der Aktiva Seite?",
              answers: ["Mittel Nutzung", "Mittel Herkunft", "Handelswaren"],
              correct: 0
            }
          ],
          "Schwer": [
            {
              question: "Was ist der Unterschied zwischen fixen und variablen Kosten?",
              answers: ["Fixe Kosten bleiben konstant, variable Kosten ändern sich mit der Produktionsmenge", "Fixe Kosten ändern sich, variable Kosten bleiben konstant", "Beide Kostenarten bleiben konstant", "Beide Kostenarten ändern sich linear"],
              correct: 0
            },
            {
              question: "Was bedeutet Liquidität in der Finanzbuchhaltung?",
              answers: ["Fähigkeit, kurzfristige Verbindlichkeiten zu begleichen", "Gesamteinnahmen eines Unternehmens", "Langfristige Finanzplanung", "Gewinnmarge"],
              correct: 0
            },
            {
              question: "Was versteht man unter einer Kalkulationsziffer?",
              answers: ["Verhältniszahl zur Ermittlung von Selbstkosten", "Steuerkennzahl", "Zinssatzberechnung", "Gewinnprognose"],
              correct: 0
            },
            {
              question: "Was beschreibt der Return on Investment (ROI) genauer?",
              answers: ["Verhältnis von Gewinn zu Investitionskosten", "Absolute Gewinnhöhe", "Umsatzwachstum", "Kostenreduzierung"],
              correct: 0
            },
            {
              question: "Welche Aussage trifft auf den Break-even Point zu?",
              answers: ["Er gibt den Punkt an, ab dem ein Unternehmen profitabel arbeitet.", "Er ist der Punkt, an dem ein Unternehmen Gewinn erzielt.", "Er ist der Punkt, an dem Einnahmen und Kosten identisch sind.", "Er beschreibt den maximalen Umsatz."],
              correct: 2
            },
            {
              question: "Was ist eine Finanzanalyse?",
              answers: ["Untersuchung der wirtschaftlichen Lage anhand finanzieller Kennzahlen", "Planung von Marketingstrategien", "Erstellung von Personalplänen", "Marktsegmentierung"],
              correct: 0
            }
          ]
        }
      },
      "Allgemeinwissen": {
        "Standard": {
          "Leicht": [
            {
              question: "Wie viele Kontinente gibt es auf der Erde?",
              answers: ["5", "6", "7", "8"],
              correct: 2
            },
            {
              question: "Welche Farbe entsteht, wenn man Blau und Gelb mischt?",
              answers: ["Grün", "Orange", "Lila", "Braun"],
              correct: 0
            },
            {
              question: "Welcher Planet liegt der Erde am nächsten?",
              answers: ["Venus", "Mars", "Merkur", "Jupiter"],
              correct: 0
            },
            {
              question: "Was ist die Hauptstadt von Frankreich?",
              answers: ["Lyon", "Marseille", "Paris", "Bordeaux"],
              correct: 2
            },
            {
              question: "Welches Land ist flächenmäßig das größte?",
              answers: ["Kanada", "Russland", "China", "USA"],
              correct: 1
            },
            {
              question: "Welche Sprache spricht man hauptsächlich in Brasilien?",
              answers: ["Spanisch", "Portugiesisch", "Englisch", "Französisch"],
              correct: 1
            }
          ],
          "Mittel": [
            {
              question: "Welcher Fluss gilt als der längste der Welt?",
              answers: ["Nil", "Amazonas", "Mississippi", "Yangtze"],
              correct: 0
            },
            {
              question: "Wie viele Sterne befinden sich auf der Flagge der USA?",
              answers: ["48", "49", "50", "51"],
              correct: 2
            },
            {
              question: "Wer schrieb „Hamlet“?",
              answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Goethe"],
              correct: 1
            },
            {
              question: "Welches Land hat die höchste Bevölkerungsdichte?",
              answers: ["Indien", "Singapur", "China", "Monaco"],
              correct: 3
            },
            {
              question: "In welchem Jahr endete der Zweite Weltkrieg?",
              answers: ["1943", "1944", "1945", "1946"],
              correct: 2
            },
            {
              question: "Welche chemische Verbindung bildet die Grundlage allen Lebens?",
              answers: ["H₂O", "CO₂", "CH₄", "O₂"],
              correct: 0
            }
          ],
          "Schwer": [
            {
              question: "Welcher ist der größte Berg im Sonnensystem?",
              answers: ["Mount Everest", "Olympus Mons", "K2", "Denali"],
              correct: 1
            },
            {
              question: "Wie viele Knochen hat ein erwachsener Mensch?",
              answers: ["196", "206", "216", "226"],
              correct: 1
            },
            {
              question: "Wer entwickelte die Relativitätstheorie?",
              answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
              correct: 1
            },
            {
              question: "Welches Land besitzt die längste Küstenlinie?",
              answers: ["Australien", "Kanada", "Norwegen", "Russland"],
              correct: 1
            },
            {
              question: "In welchem Jahr erfolgte die erste Mondlandung?",
              answers: ["1965", "1967", "1969", "1971"],
              correct: 2
            },
            {
              question: "Wer schrieb „Krieg und Frieden“?",
              answers: ["Leo Tolstoi", "Fjodor Dostojewski", "Anton Tschechow", "Maxim Gorki"],
              correct: 0
            }
          ]
        }
      },
      "Naturwissenschaften": {
        "Standard": {
          "Leicht": [
            {
              question: "Welche chemische Verbindung hat die Formel H₂O?",
              answers: ["Wasser", "Wasserstoffperoxid", "Sauerstoff", "Methan"],
              correct: 0
            },
            {
              question: "Was misst ein Thermometer?",
              answers: ["Luftfeuchtigkeit", "Temperatur", "Druck", "Geschwindigkeit"],
              correct: 1
            },
            {
              question: "Was ist der Hauptbestandteil der Sonne?",
              answers: ["Wasserstoff", "Sauerstoff", "Helium", "Kohlenstoff"],
              correct: 0
            },
            {
              question: "Wie viele Planeten hat unser Sonnensystem?",
              answers: ["7", "8", "9", "10"],
              correct: 1
            },
            {
              question: "Was passiert mit Wasser, wenn es siedet?",
              answers: ["Es wird fest", "Es verdampft", "Es bleibt flüssig", "Es wird gasförmig"],
              correct: 1
            },
            {
              question: "Welches Gas dominiert die Erdatmosphäre?",
              answers: ["Sauerstoff", "Stickstoff", "Kohlendioxid", "Helium"],
              correct: 1
            }
          ],
          "Mittel": [
            {
              question: "Wie schnell ist das Licht?",
              answers: ["300.000 km/s", "150.000 km/s", "500.000 km/s", "1.000.000 km/s"],
              correct: 0
            },
            {
              question: "Wie lautet der chemische Name von H₂SO₄?",
              answers: ["Wasserstoffperoxid", "Schwefelsäure", "Salzsäure", "Kohlensäure"],
              correct: 1
            },
            {
              question: "Welche Art von Strahlung wird bei Röntgenuntersuchungen verwendet?",
              answers: ["Ultraviolett", "Infrarot", "Röntgenstrahlung", "Gamma-Strahlung"],
              correct: 2
            },
            {
              question: "Welchen pH-Wert hat reines Wasser?",
              answers: ["5", "6", "7", "8"],
              correct: 2
            },
            {
              question: "Welches Element hat das Symbol Fe?",
              answers: ["Zink", "Eisen", "Kupfer", "Silber"],
              correct: 1
            },
            {
              question: "Wie nennt man die Wissenschaft, die sich mit Fossilien beschäftigt?",
              answers: ["Archäologie", "Paläontologie", "Anthropologie", "Geologie"],
              correct: 1
            }
          ],
          "Schwer": [
            {
              question: "Was beschreibt die Entropie in der Thermodynamik?",
              answers: ["Temperatur", "Unordnung eines Systems", "Druck", "Volumen"],
              correct: 1
            },
            {
              question: "Was ist Sublimation?",
              answers: ["Übergang von fest zu flüssig", "Übergang von flüssig zu gasförmig", "Übergang von fest zu gasförmig", "Übergang von gasförmig zu flüssig"],
              correct: 2
            },
            {
              question: "Wer formulierte die Theorie der natürlichen Selektion?",
              answers: ["Albert Einstein", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"],
              correct: 1
            },
            {
              question: "Was ist das Periodensystem?",
              answers: ["Eine Auflistung chemischer Elemente", "Eine Sammlung physikalischer Gesetze", "Ein System zur Zeitmessung", "Ein Diagramm der Planetenbahnen"],
              correct: 0
            },
            {
              question: "Welcher Bestandteil befindet sich im Atomkern?",
              answers: ["Elektronen", "Protonen und Neutronen", "Ionen", "Photonen"],
              correct: 1
            },
            {
              question: "Was ist Quantenmechanik?",
              answers: ["Lehre der Planetenbewegungen", "Physik subatomarer Phänomene", "Methode zur Steuerberechnung", "Zweig der Biologie"],
              correct: 1
            }
          ]
        }
      },
      "Sport": {
        "Standard": {
          "Leicht": [
            {
              question: "Welcher Sport verwendet den Begriff „Touchdown“?",
              answers: ["American Football", "Basketball", "Baseball", "Rugby"],
              correct: 0
            },
            {
              question: "Welche Sportart wird bei Wimbledon gespielt?",
              answers: ["Tennis", "Fußball", "Golf", "Cricket"],
              correct: 0
            },
            {
              question: "Wie viele Spieler stehen in einem Basketballteam auf dem Feld?",
              answers: ["5", "6", "7", "8"],
              correct: 0
            },
            {
              question: "Wer gilt als schnellster Mensch der Welt?",
              answers: ["Usain Bolt", "Tyson Gay", "Michael Johnson", "Carl Lewis"],
              correct: 0
            },
            {
              question: "Wie viele Runden hat ein typischer Profiboxkampf?",
              answers: ["8", "10", "12", "15"],
              correct: 2
            },
            {
              question: "Welche Sportart wird oft als „König der Sportarten“ bezeichnet?",
              answers: ["Fußball", "Leichtathletik", "Schwimmen", "Basketball"],
              correct: 1
            }
          ],
          "Mittel": [
            {
              question: "In welchem Jahr fanden die ersten modernen Olympischen Spiele statt?",
              answers: ["1896", "1900", "1912", "1920"],
              correct: 0
            },
            {
              question: "Welches Land gewann die erste Fußball-Weltmeisterschaft 1930?",
              answers: ["Brasilien", "Deutschland", "Uruguay", "Argentinien"],
              correct: 2
            },
            {
              question: "Wie lange dauert ein reguläres Fußballspiel (ohne Verlängerung)?",
              answers: ["80 Minuten", "90 Minuten", "100 Minuten", "110 Minuten"],
              correct: 1
            },
            {
              question: "Wer hält den Rekord für die meisten Goldmedaillen bei Olympischen Spielen?",
              answers: ["Carl Lewis", "Michael Phelps", "Usain Bolt", "Mark Spitz"],
              correct: 1
            },
            {
              question: "In welcher Sportart wird der Begriff „alley-oop“ verwendet?",
              answers: ["Basketball", "Volleyball", "American Football", "Baseball"],
              correct: 0
            },
            {
              question: "Wie viele Runden sind in einem typischen Profiboxkampf vorgesehen?",
              answers: ["10", "12", "15", "20"],
              correct: 1
            }
          ],
          "Schwer": [
            {
              question: "Welcher Fußballspieler hat die meisten Tore in der Champions League erzielt?",
              answers: ["Lionel Messi", "Cristiano Ronaldo", "Raul", "Robert Lewandowski", "Antony"],
              correct: 1
            },
            {
              question: "Wer hält den Rekord für die meisten 100-Meter-Weltrekorde?",
              answers: ["Usain Bolt", "Tyson Gay", "Michael Johnson", "Asafa Powell"],
              correct: 0
            },
            {
              question: "In welchem Jahr wurde die erste Rugby-Weltmeisterschaft ausgetragen?",
              answers: ["1987", "1991", "1995", "1999"],
              correct: 0
            },
            {
              question: "Welcher Sportler gewann 23 Goldmedaillen bei einer einzigen Olympiade?",
              answers: ["Michael Phelps", "Mark Spitz", "Carl Lewis", "Usain Bolt"],
              correct: 0
            },
            {
              question: "Welche Nation dominierte die Leichtathletik bei den Olympischen Spielen 2016?",
              answers: ["USA", "Jamaika", "Russland", "China"],
              correct: 1
            },
            {
              question: "Wie viele Weltrekorde hält Usain Bolt im 200-Meter-Lauf?",
              answers: ["1", "2", "3", "4"],
              correct: 1
            }
          ]
        }
      },
      "Gaming": {
        "Standard": {
          "Leicht": [
            {
              question: "Welches Spiel ist das meistverkaufte aller Zeiten?",
              answers: ["Minecraft", "Grand Theft Auto V", "Fortnite", "The Sims"],
              correct: 0
            },
            {
              question: "Welches Spiel wurde von Epic Games entwickelt?",
              answers: ["Minecraft", "Roblox", "PUBG", "Fortnite"],
              correct: 3
            },
            {
              question: "Welche Figur ist das Maskottchen von Nintendo?",
              answers: ["Sonic", "Mario", "Link", "Pikachu"],
              correct: 1
            },
            {
              question: "In welchem Spiel steuert man die „Pikmin“?",
              answers: ["The Legend of Zelda", "Pikmin", "Super Mario", "Donkey Kong"],
              correct: 1
            },
            {
              question: "Welches Genre wird bei Fortnite gespielt?",
              answers: ["Battle Royale", "Rollenspiel", "Simulation", "Strategie"],
              correct: 0
            },
            {
              question: "Welche Konsole wurde 2001 von Microsoft veröffentlicht?",
              answers: ["Xbox", "PlayStation 2", "Nintendo GameCube", "Sega Dreamcast"],
              correct: 0
            }
          ],
          "Mittel": [
            {
              question: "Welches Spiel führte den Battle-Royale-Modus populär?",
              answers: ["Fortnite", "PUBG", "Apex Legends", "Call of Duty: Warzone"],
              correct: 1
            },
            {
              question: "Welches Spiel gilt als Wegbereiter des First-Person-Shooters?",
              answers: ["Doom", "Quake", "Wolfenstein 3D", "Half-Life"],
              correct: 0
            },
            {
              question: "Wer entwickelte „Dark Souls“?",
              answers: ["FromSoftware", "PlatinumGames", "Bethesda", "Capcom"],
              correct: 0
            },
            {
              question: "Welche Art von Spiel ist „The Legend of Zelda“?",
              answers: ["Rollenspiel", "Action-Adventure", "Strategiespiel", "Simulation"],
              correct: 1
            },
            {
              question: "In welchem Spiel übernimmt man die Rolle eines Helden in einer offenen Welt?",
              answers: ["The Witcher 3", "Final Fantasy", "Call of Duty", "Minecraft"],
              correct: 0
            },
            {
              question: "Welches Spiel wurde 1998 veröffentlicht und prägte das FPS-Genre?",
              answers: ["Half-Life", "Doom", "Quake", "Counter-Strike"],
              correct: 0
            }
          ],
          "Schwer": [
            {
              question: "Welches Spiel von Valve wurde 1998 veröffentlicht?",
              answers: ["Half-Life", "Portal", "Left 4 Dead", "Team Fortress 2"],
              correct: 0
            },
            {
              question: "In welchem Jahr erschien „The Legend of Zelda“ erstmals?",
              answers: ["1985", "1986", "1987", "1988"],
              correct: 0
            },
            {
              question: "Welche Spielreihe basiert auf griechischer und nordischer Mythologie?",
              answers: ["God of War", "Assassin’s Creed", "Final Fantasy", "Dark Souls"],
              correct: 0
            },
            {
              question: "Wer entwickelte „Red Dead Redemption 2“?",
              answers: ["Ubisoft", "Rockstar Games", "Electronic Arts", "Naughty Dog"],
              correct: 1
            },
            {
              question: "Welches Spiel ist bekannt für seine komplexe offene Welt und Story?",
              answers: ["The Witcher 3", "Minecraft", "Fortnite", "Overwatch"],
              correct: 0
            },
            {
              question: "Welches Spiel prägte das Genre der Ego-Shooter in den 90ern?",
              answers: ["Doom", "Quake", "Wolfenstein 3D", "Counter-Strike"],
              correct: 0
            }
          ]
        }
      },
      "Musik": {
        "Standard": {
          "Leicht": [
            {
              question: "Welches Instrument hat 88 Tasten?",
              answers: ["Klavier", "Gitarre", "Violine", "Orgel"],
              correct: 0
            },
            {
              question: "Wer sang das Lied „Thriller“?",
              answers: ["Michael Jackson", "Prince", "Elvis Presley", "Madonna"],
              correct: 0
            },
            {
              question: "Mit welcher Musikrichtung werden die Beatles hauptsächlich assoziiert?",
              answers: ["Rock 'n' Roll", "Pop", "Jazz", "Klassik"],
              correct: 1
            },
            {
              question: "Welches Instrument ist typisch elektrisch in Rockbands?",
              answers: ["E-Gitarre", "Klavier", "Geige", "Saxophon"],
              correct: 0
            },
            {
              question: "Wie viele Noten umfasst eine Oktave in der diatonischen Tonleiter (mit Wiederholung der Tonika)?",
              answers: ["5", "7", "8", "12"],
              correct: 2
            },
            {
              question: "Welcher Künstler gilt als „King of Pop“?",
              answers: ["Michael Jackson", "Prince", "Elvis Presley", "Justin Bieber"],
              correct: 0
            }
          ],
          "Mittel": [
            {
              question: "Wer war der Lead-Sänger der Band Queen?",
              answers: ["Freddie Mercury", "Mick Jagger", "Robert Plant", "Steven Tyler"],
              correct: 0
            },
            {
              question: "Welcher Komponist schrieb die „Mondscheinsonate“?",
              answers: ["Mozart", "Beethoven", "Bach", "Schubert"],
              correct: 1
            },
            {
              question: "Welche Musikrichtung zeichnet sich durch Improvisation und Swing aus?",
              answers: ["Klassik", "Jazz", "Rock", "Pop"],
              correct: 1
            },
            {
              question: "Welcher Musiker ist bekannt für den Song „Purple Rain“?",
              answers: ["Prince", "Michael Jackson", "Stevie Wonder", "David Bowie"],
              correct: 0
            },
            {
              question: "Aus welchem Land stammt die Oper traditionell?",
              answers: ["Italien", "Deutschland", "Frankreich", "Spanien"],
              correct: 0
            },
            {
              question: "Welche Musikform ist typischerweise instrumental und improvisiert?",
              answers: ["Pop", "Jazz", "Oper", "Schlager"],
              correct: 1
            }
          ],
          "Schwer": [
            {
              question: "Wer komponierte die „Vier Jahreszeiten“?",
              answers: ["Vivaldi", "Bach", "Mozart", "Beethoven"],
              correct: 0
            },
            {
              question: "Was bedeutet das musikalische Symbol „f“ in der Notation?",
              answers: ["Laut", "Leise", "Schnell", "Langsam"],
              correct: 0
            },
            {
              question: "Welcher Komponist schrieb das „Requiem“ in D-Moll?",
              answers: ["Mozart", "Verdi", "Fauré", "Brahms"],
              correct: 0
            },
            {
              question: "In welchem Jahr erschien das erste Beatles-Album?",
              answers: ["1962", "1965", "1967", "1970"],
              correct: 0
            },
            {
              question: "Welcher Musiker gilt als Pionier des Progressive Rock?",
              answers: ["Peter Gabriel", "David Bowie", "Ozzy Osbourne", "Bon Scott"],
              correct: 0
            },
            {
              question: "Wer schrieb die „Sinfonie Nr. 9“ und gilt als einer der bedeutendsten Komponisten der Klassik?",
              answers: ["Beethoven", "Schubert", "Brahms", "Bruckner"],
              correct: 0
            },
            {
              question: "Was heißt Crescendo?",
              answers: ["Ein plötzlicher Lautstärkeabfall.", "Ein allmählicher Anstieg der Lautstärke.", "Ein schnelleres Tempo.", "Ein langsamerer Rhythmus."],
              correct: 1
            }
          ]
        }
      }
    };

 function chooseCategory(category, buttonElement) {
  currentCategory = category;
  // Deaktiviere den ausgewählten Button
  buttonElement.disabled = true;
  // Verberge den Kategorie-Container und zeige den Schwierigkeits-Container an
  document.getElementById('category-container').style.display = 'none';
  document.getElementById('difficulty').style.display = 'block';
}

function chooseDifficulty(difficulty, buttonElement) {
  currentDifficulty = difficulty;
  // Deaktiviere den ausgewählten Button
  buttonElement.disabled = true;
  // Verberge den Schwierigkeits-Container
  document.getElementById('difficulty').style.display = 'none';
  // Starte den Spielrunden-Prozess
  startGameRound();
}

  
    // Funktionen
    function startSoloGame() {
      teams = [{ name: "Spieler 1", score: 0, joker: true }];
      document.getElementById('play-alone').style.display = 'none';
      showCategorySelection();
    }

    function startTeamGame() {
      document.getElementById('play-alone').style.display = 'none';
      document.getElementById('team-selection').style.display = 'block';
    }

    function createTeams() {
      const teamCount = document.getElementById('team-count').value;
      if (teamCount < 1 || teamCount > 10) {
        alert("Bitte eine gültige Anzahl an Teams eingeben.");
        return;
      }
      teams = [];
      document.getElementById('team-selection').style.display = 'none';
      document.getElementById('team-names').style.display = 'block';
      document.getElementById('team-inputs').innerHTML = 
        Array.from({length: teamCount}, (_, i) => 
          `<input type="text" id="team-name-${i}" placeholder="Teamname ${i + 1}" /><br>`
        ).join('');
    }

    function startGame() {
      const teamCount = document.getElementById('team-count').value;
      teams = Array.from({length: teamCount}, (_, i) => {
        const name = document.getElementById(`team-name-${i}`).value || `Team ${i + 1}`;
        return { name: name, score: 0, joker: true };
      });
      document.getElementById('team-names').style.display = 'none';
      startRandomizer();
    }

    function startRandomizer() {
      document.getElementById('randomizer').style.display = 'block';
      document.getElementById('randomizerResult').style.display = 'none';
      document.getElementById('auslosenButton').disabled = false;
    }

    function auslosen() {
      document.getElementById("auslosenButton").disabled = true;
      document.getElementById("randomizerText").innerText = "Auslosen...";
      setTimeout(() => {
        currentTeamIndex = Math.floor(Math.random() * teams.length);
        document.getElementById("resultText").innerText = 
          `🎲 Das Team "${teams[currentTeamIndex].name}" beginnt!`;
        document.getElementById("randomizerResult").style.display = "block";
      }, 2000);
    }

    function startAfterRandom() {
      document.getElementById('randomizer').style.display = 'none';
      showCategorySelection();
      updateTeamDisplay();
    }

    function showCategorySelection() {
      document.getElementById('category-container').style.display = 'block';
      updateTeamDisplay();
    }

    function updateTeamDisplay() {
      const displayText = `Aktuelles Team: ${teams[currentTeamIndex].name}`;
      document.getElementById('current-team-display').textContent = displayText;
      document.getElementById('currentTeamDisplay').textContent = displayText;
    }

    function chooseCategory(category) {
      currentCategory = category;
      document.getElementById('category-container').style.display = 'none';
      document.getElementById('difficulty').style.display = 'block';
    }

    function chooseDifficulty(difficulty) {
      currentDifficulty = difficulty;
      document.getElementById('difficulty').style.display = 'none';
      startGameRound();
    }

    function startGameRound() {
      document.getElementById('game').style.display = 'block';
      jokerUsedThisRound = false;
      updateTeamDisplay();
      updateScoreDisplay();
      loadQuestion();
    }

    function loadQuestion() {
      const questionData = questions[currentCategory][currentSubcategory][currentDifficulty][currentQuestionIndex];
      document.getElementById('question').textContent = questionData.question;
      const answersContainer = document.getElementById('answers');
      answersContainer.innerHTML = questionData.answers
        .map((answer, index) => 
          `<button onclick="checkAnswer(${index}, ${questionData.correct})">${answer}</button>`
        ).join('');
      toggleJokerButton();
    }

    function checkAnswer(selected, correct) {
      const points = { Leicht: 200, Mittel: 400, Schwer: 600 }[currentDifficulty];
      const multiplier = currentCategory === "BSK" ? 2 : 1;
      
      if (selected === correct) {
        teams[currentTeamIndex].score += points * multiplier;
        showPopup("Richtig!", "correct");
      } else {
        teams[currentTeamIndex].score -= Math.floor(points * 0.5);
        showPopup("Falsch!", "wrong");
      }
      
      currentQuestionIndex++;
      updateScoreDisplay();
      
      setTimeout(currentQuestionIndex < questions[currentCategory][currentSubcategory][currentDifficulty].length 
        ? loadQuestion 
        : nextRound, 2000);
    }

    function nextRound() {
      currentQuestionIndex = 0;
      document.getElementById('game').style.display = 'none';
      currentTeamIndex = Math.floor(Math.random() * teams.length);
      
      if (teams.length > 1) {
        showRoundOverview();
      } else {
        showCategorySelection();
      }
    }

    function showRoundOverview() {
      document.getElementById('overview-content').innerHTML = `
        <table>
          <tr><th>Team</th><th>Punkte</th></tr>
          ${teams.map(t => `<tr><td>${t.name}</td><td>${t.score}</td></tr>`).join('')}
        </table>`;
      document.getElementById('round-overview').style.display = 'block';
    }

    function continueGame() {
      document.getElementById('round-overview').style.display = 'none';
      showCategorySelection();
    }

    function toggleJokerButton() {
      document.getElementById('jokerButton').style.display = 
        (teams[currentTeamIndex].joker && !jokerUsedThisRound) ? 'block' : 'none';
    }

    function jokerNutzen() {
      if (teams[currentTeamIndex].joker && !jokerUsedThisRound) {
        teams[currentTeamIndex].joker = false;
        jokerUsedThisRound = true;
        toggleJokerButton();
        alert(`Joker aktiviert! ${teams[currentTeamIndex].name} darf gemeinsam beraten.`);
      }
    }

    function updateScoreDisplay() {
      document.getElementById('score').textContent = teams[currentTeamIndex].score;
    }

    function showPopup(message, type) {
      const popup = document.getElementById('popup');
      popup.textContent = message;
      popup.className = `popup ${type}`;
      popup.style.display = 'block';
      setTimeout(() => popup.style.display = 'none', 2000);
    }

    function goBack(section) {
      document.querySelectorAll('#quiz-container > div').forEach(div => div.style.display = 'none');
      document.getElementById(section).style.display = 'block';
    }

    function nextQuestion() {
      loadQuestion();
    }
  </script>

