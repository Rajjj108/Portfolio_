function toggleAnswer(question) {
    // Get the next element, which is the answer div
    var answer = question.nextElementSibling;

    // Toggle the 'active' class to expand/collapse the answer
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}
