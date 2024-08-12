  //Constantes definidas

  const arrayHtml = document.getElementById('arrayHtml');
  const emojis = ['😀', '😂', '🥺', '😍', '🤖', '👻', '🍕', '🚀', '🌈', '⚽'];
  let screenArray = [];

  function updateArrayHtml() {
      arrayHtml.innerHTML = screenArray.join(' ');
  }

  function pushElement() {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      screenArray.push(randomEmoji);
      updateArrayHtml();
  }

  function unshiftElement() {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      screenArray.unshift(randomEmoji);
      updateArrayHtml();
  }

  function popElement() {
      screenArray.pop();
      updateArrayHtml();
  }

  function shiftElement() {
      screenArray.shift();
      updateArrayHtml();
  }

  function insertElementAt() {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      const insertIndex = Math.floor(Math.random() * screenArray.length);
      screenArray.splice(insertIndex, 0, randomEmoji);
      updateArrayHtml();
  }

  function removeElementAt() {
      const removeIndex = Math.floor(Math.random() * screenArray.length);
      screenArray.splice(removeIndex, 1);
      updateArrayHtml();
  }

  function addPosition() {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      let position = parseInt(prompt("Enter the position to add the emoji:"));
      if (isNaN(position) || position < 0 || position > screenArray.length) {
          alert("Invalid position!");
          return;
      }
      screenArray.splice(position, 0, randomEmoji);
      updateArrayHtml();
  }