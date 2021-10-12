const messages = {
    quotes: ['Love For All, Hatred For None.', 'Change the world by being yourself.', 'Every moment is a fresh beginning.'],
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

const generateRandomMessage = topic => {
    if(messages[topic] === undefined){
        console.log(`The topic '${topic}' is not availible.`);
    }
    const topicMessage = messages[topic];
    const randIndex = Math.floor(Math.random() * topicMessage.length);
    return topicMessage[randIndex];
}

const formatWisdom = () => {
    for(const topic in messages) {
        switch (topic) {
            case 'quotes':
                console.log(`Your personal quotes is '${generateRandomMessage(topic)}'.`);
                break;
            case 'signInfo':
                console.log(`Your sign right now is '${generateRandomMessage(topic)}'.`);
                break;
            case 'fortuneOutput':
                console.log(`Your fortune today is '${generateRandomMessage(topic)}'.`);
                break;
            case 'advice':
                console.log(`Your advice is '${generateRandomMessage(topic)}'.`);
                break;
            default:
                console.log('There is not enough info.')
        }
    }
}

formatWisdom()