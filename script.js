function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  toggleSidebar();
}

function countWords() {
  const text = document.querySelector('#word textarea').value.trim();
  const wordCount = text ? text.split(/\s+/).length : 0;
  document.getElementById('wordCountResult').textContent = `Words: ${wordCount}`;
}

function countSentences() {
  const text = document.querySelector('#sentence textarea').value;
  const sentenceCount = (text.match(/[.!?]+/g) || []).length;
  document.getElementById('sentenceCountResult').textContent = `Sentences: ${sentenceCount}`;
}

function countLines() {
  const text = document.querySelector('#line textarea').value;
  const lineCount = text.split('\n').filter(line => line.trim() !== "").length;
  document.getElementById('lineCountResult').textContent = `Lines: ${lineCount}`;
}
