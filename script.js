const t = document.getElementById("t");
const b = document.getElementById("b");
const f = document.getElementById("f");
const fc = document.getElementById("fc");
let note = 'Write a note here';
let c = 'empty';
let cb = 'empty';
let fb = 'empty';

initPage();

function setC(n, v) {
    document.cookie = `${n}=${v}; expires=Mon, 1 January 2050 12:00:00 UTC; path=/`;
}

function deleteC(n) {
    document.cookie = `${n}=none; expires=Mon, 1 January 1990 12:00:00 UTC; path=/`;
}

function getC(n) {
    c = decodeURIComponent(document.cookie);
    c = c.slice(c.indexOf('=') + 1);
    return c;
}

function initPage() {
    note = getC('note');
    t.value = note;
}

function save() {
    cb = t.value;
    setC('note', `${cb}`);
    f.textContent = f.textContent + '   successfully saved   ';
}

function importieren() {
    fc.click();
    f.textContent = f.textContent + '   successfully imported   ';
}

function exportieren() {
    const text = t.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'simple.txt';
    link.click();
    URL.revokeObjectURL(link.href);
    f.textContent = f.textContent + '   successfully exported   ';
}

fc.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('t').value = e.target.result;
        };
        reader.readAsText(file);
    }
});