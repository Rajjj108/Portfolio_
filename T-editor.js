const messageInput = document.getElementById('message');
const fontFamilySelect = document.querySelector('select[name="font-family"]');
const textColorInput = document.getElementById('text-color');
const addTextButton = document.getElementById('add-text');
const editModeCheckbox = document.getElementById('edit');
const textContainer = document.getElementById('paper-area');
const textList = document.getElementById('text-elem');

let draggingElement;
let initialX;
let initialY;
let editingElement;

function addTextElement(message, fontFamily, color, size) {
    const textElement = document.createElement('div');
    textElement.className = 'draggable';
    textElement.style.fontFamily = fontFamily;
    textElement.style.color = color;
    textElement.innerText = message;
    textContainer.appendChild(textElement);
    const textListItem = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.innerText = message;
    textListItem.appendChild(textSpan);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function() {
        textContainer.removeChild(textElement);
        textList.removeChild(textListItem);
        
        textElement.style.fontSize = size + 'px';
    });
    textListItem.appendChild(removeButton);

    textList.appendChild(textListItem);

    textElement.addEventListener('mousedown', function(e) {
        if (editModeCheckbox.checked) {
            editingElement = this;
            messageInput.value = this.innerText;
            fontFamilySelect.value = this.style.fontFamily;
            textColorInput.value = this.style.color;
        } else {
            draggingElement = this;
            initialX = e.clientX - this.offsetLeft;
            initialY = e.clientY - this.offsetTop;
        }
    });

    textElement.addEventListener('mousemove', function(e) {
        if (draggingElement === this) {
            this.style.left = e.clientX - initialX + 'px';
            this.style.top = e.clientY - initialY + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        draggingElement = null;
    });
}

addTextButton.addEventListener('click', function() {
    const message = messageInput.value;
    const fontFamily = fontFamilySelect.value;
    const color = textColorInput.value;
    const size = document.getElementById('text-size').value;

    addTextElement(message, fontFamily, color);
    messageInput.value = '';
});

document.getElementById('apply-text').addEventListener('click', function() {
    if (editingElement) {
        editingElement.innerText = messageInput.value;
        editingElement.style.fontFamily = fontFamilySelect.value;
        editingElement.style.color = textColorInput.value;
        editingElement.style.fontSize = document.getElementById('text-size').value + 'px';
        editingElement = null;
    }
});

editModeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        textContainer.classList.add('edit-mode');
    } else {
        textContainer.classList.remove('edit-mode');
    }
});
function changePaperSize() {
    var size = document.getElementById("size").value;
    var customSizeDiv = document.getElementById("custom-size");

    if (size === "custom") {
        customSizeDiv.style.display = "flex";
    } else {
        customSizeDiv.style.display = "none";
        setFixedPaperSize(size);
    }
}

function setFixedPaperSize(size) {
    var paper = document.getElementById("paper");

    switch (size) {
        case "Normal":
            paper.style.width = "50vw";
            paper.style.height = "70vh";
            break;
        case "Paper":
            paper.style.width = "30vw";
            paper.style.height = "70vh";
            break;
    }
}

function applyCustomSize() {
    var customWidth = document.getElementById("custom-width").value;
    var customHeight = document.getElementById("custom-height").value;

    var paper = document.getElementById("paper");
    paper.style.width = customWidth + "px";
    paper.style.height = customHeight + "px";
}

function updateContent() {
}