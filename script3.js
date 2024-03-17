document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('medicalRecordForm');
    const recordList = document.getElementById('recordList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('recordTitle').value;
        const content = document.getElementById('recordContent').value;

        if (title.trim() === '' || content.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        const recordItem = document.createElement('div');
        recordItem.classList.add('record-item');
        recordItem.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        recordList.appendChild(recordItem);

        // Clear form fields
        document.getElementById('recordTitle').value = '';
        document.getElementById('recordContent').value = '';
    });
});
