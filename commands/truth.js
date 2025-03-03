const truths = [
    "What's your biggest fear?",
    "What was your most embarrassing moment?",
    "If you could be invisible for a day, what would you do?",
    "Who was your first crush?",
    "What’s one thing you’ve never told anyone?"
    "I once accidentally sent a 'reply all' email to the entire company.",
    "I have a secret stash of chocolate that I hide from everyone.",
    "I sometimes talk to myself in the mirror.",
    "I've re-watched my favorite movie way too many times to admit.",
    "I've pretended to understand something in a meeting when I had no clue.",
    "I've used a website's 'chat support' just to have someone to talk to.",
    "I've Googled myself... more than once.",
    "I've worn the same pair of socks for more than one day in a row.",
    "I've judged someone based on their font choice.",
    "I've sung in the shower, and it wasn't pretty.",
    "I have a favorite mug, and I get upset when someone else uses it.",
    "I've tried to fix something by hitting it, and it worked.",
    "I've accidentally liked an old post while stalking someone on social media.",
    "I've used a filter on a photo that made me look completely different.",
    "I've pretended to be busy to avoid talking to someone.",
    "I've eaten food that fell on the floor (the five-second rule!).",
    "I've had a crush on a fictional character.",
    "I've laughed at my own jokes when no one else did.",
    "I've worn pajamas to the grocery store.",
    "I've had a conversation with my pet and expected a response."
]

];

async function truthCommand(sock, chatId) {
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    await sock.sendMessage(chatId, { text: `🔮 Truth: ${randomTruth}` });
}

module.exports = { truthCommand };
