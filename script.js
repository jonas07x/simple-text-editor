const t = document.getElementById("t");
const fc = document.getElementById("fc");
let note = 'Write a note here';
let c = 'empty';
let cb = 'empty';
let fb = 'empty';

initPage();

function initPage() {
}

function clearcontent() {
    t.value = '';
}

function importfile() {
    fc.click();
}

function exportfile() {
    const text = t.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'simple.txt';
    link.click();
    URL.revokeObjectURL(link.href);
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