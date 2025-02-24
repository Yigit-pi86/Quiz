 <script>
    // Globale Variablen
    let currentCategory = '';
    let currentSubcategory = 'Standard';
    let currentDifficulty = '';
    let currentQuestionIndex = 0;
    let teams = [];
    let currentTeamIndex = 0;
    let jokerUsedThisRound = false;

  
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

