function addStuff() {
    var div = document.createElement("div");
    var innerText = document.createElement("p");
    cookie = cookies[Math.floor(Math.random() * 46) + 1  ];

    innerText.setAttribute("class", "w-full px-2 mx-auto h-auto text-2xl font-bold tracking-tighter text-black title-font");
    innerText.innerHTML = cookie;
    div.setAttribute("class", "h-auto w-full bg-blue-300 rounded-3xl mb-5 flex justify-center");
    div.appendChild(innerText);


    document.getElementById("stuff").appendChild(div);
}

let cookies = [
"Emulate what you respect in your friends.",
"Every flower blooms in its own sweet time.",
"Every wise man started out by asking many questions.",
"Everyday in your life is a special occasion.",
"Everywhere you choose to go, friendly faces will greet you.",
"Expect much of yourself and little of others.",
"Failure is the chance to do better next time.",
"Failure is the path of lease persistence.",
"Fear and desire – two sides of the same coin.",
"Fearless courage is the foundation of victory.",
"Feeding a cow with roses does not get extra appreciation.",
"First think of what you want to do; then do what you have to do.",
"Follow the middle path. Neither extreme will make you happy.",
"For hate is never conquered by hate. Hate is conquered by love.",
"For the things we have to learn before we can do them, we learn by doing them.",
"Fortune Not Found: Abort, Retry, Ignore?",
"From listening comes wisdom and from speaking repentance.",
"From now on your kindness will lead you to success.",
"Get your mind set – confidence will lead you on.",
"Get your mind set…confidence will lead you on.",
"Go for the gold today! You’ll be the champion of whatever.",
"Go take a rest; you deserve it.",
"Good news will be brought to you by mail.",
"Good news will come to you by mail.",
"Good to begin well, better to end well.",
"Happiness begins with facing life with a smile and a wink.",
"Happiness will bring you good luck.",
"Happy life is just in front of you.",
"Hard words break no bones, fine words butter no parsnips.",
"Have a beautiful day.",
"He who expects no gratitude shall never be disappointed.",
"He who knows he has enough is rich.",
"He who knows others is wise. He who knows himself is enlightened.",
"Help! I’m being held prisoner in a chinese bakery!",
"How many of you believe in psycho-kinesis? Raise my hand.",
"How you look depends on where you go.",
"I learn by going where I have to go.",
"If a true sense of value is to be yours it must come through service.",
"If certainty were truth, we would never be wrong.",
"If you continually give, you will continually have.",
"If you look in the right places, you can find some good offerings.",
"If you think you can do a thing or think you can’t do a thing, you’re right.",
"If you wish to see the best in others, show the best of yourself.",
"If your desires are not extravagant, they will be granted.",
"If your desires are not to extravagant they will be granted.",
"If you’re feeling down, try throwing yourself into your work."
]