
//function test(){
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
p=document.createElement('p');
p.style.color='red';
p.textContent='Hey im red!';
h3=document.createElement('h3');
h3.style.color='blue'
h3.textContent='Hi am a blue h3!'

blackDiv=document.createElement('div')
blackDiv.style.cssText='background-color:pink;border-color:black';
h1=document.createElement('h1');
h1.textContent='Im in a div!';
p2=document.createElement('p');
p2.textContent='ME TOO!'
blackDiv.appendChild(h1);
blackDiv.appendChild(p2);

container.appendChild(content);
container.appendChild(p);
container.appendChild(blackDiv);
//}