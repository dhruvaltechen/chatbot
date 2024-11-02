document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return; // Prevent sending empty messages
    addMessageToChat('<span class="icon user-icon">👤</span> ' + userInput);
    document.getElementById('user-input').value = '';

    // Show loading indicator
    const loadingMessage = addLoaderMessage();

    // Simulate a delay of 3 seconds before responding
    setTimeout(() => {
        // Remove the loading message
        loadingMessage.remove();
        
        const botResponse = getBotResponse(userInput);
        addMessageToChat('<span class="icon bot-icon">🤖</span> ' + botResponse);
    }, 3000);
}

function sendPredefinedMessage(message) {
    document.getElementById('user-input').value = message;
    sendMessage();
}

function addMessageToChat(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message; // Use innerHTML to support loader
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
    return messageElement; // Return the message element for removal later
}

function addLoaderMessage() {
    const chatBox = document.getElementById('chat-box');
    const loaderElement = document.createElement('p');
    loaderElement.innerHTML = '<span class="icon bot-icon">🤖</span> <span class="loader"><span></span><span></span><span></span></span>';
    chatBox.appendChild(loaderElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
    return loaderElement; // Return the loader element for removal later
}
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (input.includes('how are you')) {
        return 'I am just a bot, but thanks for asking!';
    } else if (input.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else if (input.includes('ayush')) {
        return 'Ayush! The master of memes! What’s the funniest meme you’ve seen lately?';
    } else if (input.includes('mann')) {
        return 'Mann! The king of jokes! Tell me a joke or I’ll share one with you!';
    } else if (input.includes('nakul')) {
        return 'nakul! The artist! Share your latest doodle with the class!';
    } else if (input.includes('naman')) {
        return 'Naman! The philosopher! "The only limit to our realization of tomorrow is our doubts of today." What goal are you working towards?';
    } else if (input.includes('devansh')) {
        return 'Devansh! The speedster! Did you know the cheetah is the fastest land animal? What’s your favorite animal?';
    } else if (input.includes('dhyan')) {
        return 'dhyan! The homework champion! What’s your secret? Here’s a riddle for you: "I speak without a mouth and hear without ears."';
    } else if (input.includes('monisha')) {
        return 'Monisha! The creative genius! If you could invent anything, what would it be?';
    } else if (input.includes('dhanvin')) {
        return 'Dhanvin! The tech wizard! What app would you create if you could?';
    } else {
        return 'I am not sure how to respond to that. Can you tell me more?';
    }
}
