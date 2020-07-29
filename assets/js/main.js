particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hallo, ich bin Suhas")
    .pauseFor(1000)
    .deleteAll()
    .typeString('Technischer Architekt')
    .pauseFor(500)
    .deleteChars(21)
    .typeString('Technischer Projektmanagr')
    .pauseFor(500)
    .deleteChars(25)
    .typeString('Kreativer Verrückter')
    .pauseFor(1000)
    .deleteChars(20)
    .typeString('Ich schreibe auch, verwalte verschiedene Blogs und habe immer Ideen, die ich immer umzusetzen versuche.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Am besten schreiben Sie mir einfach eine E-Mail an suhas.saheer@alefeducation.com')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Dort können Sie mich fast rund um die Uhr erreichen, es sei denn, ich bin gerade mit meiner Familie unterwegs.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Bis dann!')
    .pauseFor(1000)
    .deleteAll()
    .start();