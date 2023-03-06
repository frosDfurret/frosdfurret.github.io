const messages = ['burning the pancakes...','frying some eggs...','pushing buttons...','sending bits...','dozing off...','watching anime...','being stupid...','hang on a sec?',"where'd my banana go?",'toasting the...toast...','sleeping on the job...']
const message = messages[Math.floor(Math.random() * messages.length)];
document.getElementById('b4-loading').innerHTML = message;