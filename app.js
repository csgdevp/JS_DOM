// <html>
console.log(document.documentElement);
console.dir(document.documentElement);

// <head>
console.dir(document.head);

// <body>
console.dir(document.body);

// retrieve the constructor name
console.log(document.body.constructor.name);

// looking at the prototype chain
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

/*
  - NodeTypes
  1: Element
  2: Attribute
  3: Text
  4: CDATASection
  5: EntityReference
  6: Entity
  7: ProcessingInstruction
  8: Comment
  9: Document
  10: DocumentType
  11: DocumentFragment
  12: Notation
*/

console.log(document.body.nodeType);
console.log(document.nodeType);

// nodeName for any Node types
console.log(document.nodeName);
// tagName for any Element types
console.log(document.tagName);

//Creating DOM nodes
const app = document.getElementById("app");

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul>
  <li>1</li>
</ul>
<div>Replace Me!</div>
`;

//const div = document.createElement("div");
const text = document.createTextNode("DOM!");
const comment = document.createComment("No comment");

// div.append(comment);
// div.append(text);
// app.append(div);

// console.log(app, div);

const h1 = document.createElement("h1");
h1.innerText = "DOM is crucial,";
h1.innerText += "Learning JS DOM";
// h1.style.display = 'none';
app.append(h1);

console.log(app.innerHTML);
console.log(app.innerText); // Elements
console.log(app.textContent); // Nodes

// Using document.createElement()
function createInputDOM({ label, type = "text" }) {
  const labelEl = document.createElement("label");
  const inputEl = document.createElement("input");

  inputEl.type = type;
  labelEl.innerText = label;
  labelEl.append(inputEl);

  return labelEl;
}

const inputFromDOM = createInputDOM({ label: "Name" });
console.log(inputFromDOM.querySelector("input"));
app.append(inputFromDOM);

// Using string templates
function createInputTemplate({ label, type = "text" }) {
  return `
    <label>
      ${label}
      <input type="${type}">
    </label>
    `;
}

const inputFromTemplate = createInputTemplate({
  label: "Email",
  type: "email",
});
app.innerHTML += inputFromTemplate;

const data = ["Earth", "Fire", "Water", "Air"];

const fragment = document.createDocumentFragment();
// console.dir(fragment);
data.forEach((name) => {
  const li = document.createElement("li");
  li.innerText = name;
  fragment.append(li);
});
// console.dir(fragment);
app.append(fragment);

//Inserting DOM Elements
const div1 = document.createElement("div");
const span = document.createElement("span");
const p = document.createElement("p");
const i = document.createElement("i");
const b = document.createElement("b");

div1.append(span);
div1.prepend(p);
// p.before(i);
p.after(i);

// Before: old way using insertBefore
// i.parentNode.insertBefore(b, i);

// After: old way using insertBefore + nextSibling
i.parentNode.insertBefore(b, i.nextSibling);

console.log(div1);

const ul = app.querySelector("ul");

ul.insertAdjacentHTML("beforebegin", "<p>Before</p>");
ul.insertAdjacentHTML("afterbegin", "<li>First</li>");
ul.insertAdjacentHTML("beforeend", "<li>Last</li>");
ul.insertAdjacentHTML("afterend", "<p>After</p>");

const div = app.querySelector("div");

const newDiv = document.createElement("div");
newDiv.innerText = `I have been replaced`;

div.replaceWith(newDiv);

// old way
const anotherDiv = document.createElement("div");
anotherDiv.innerText = "I replace all";

setTimeout(() => {
  newDiv.parentNode.replaceChild(anotherDiv, newDiv);
}, 2000);

//cloning
const div2 = document.createElement("div");
const span1 = document.createElement("span");
span1.innerText = `can you clone me?`;

div2.appendChild(span1);
app.appendChild(div2);

//only clones top element(Clone node = false)
const clone = div2.cloneNode();
console.log(clone);

//clone all elements(Clone node = true)
const newClone = div2.cloneNode(true);
console.log(newClone);

//Removing DOM
const h5 = document.createElement(`h5`);
h5.innerText = `I am a message!`;

app.appendChild(h5);

//new and easy way
setTimeout(() => {
  h5.remove();
}, 2500);

//oldway
// setTimeout(() => {
//   h5.parentNode.removeChild(h5);
// }, 2500);
