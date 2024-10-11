document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const itemInput = document.getElementById('item');
    const itemText = itemInput.value.trim();

    if (itemText) {
        addItemToList(itemText);
        itemInput.value = ''; // Clear the input after adding
        document.getElementById('lblsuccess').innerText = "Item added successfully!";
        document.getElementById('lblsuccess').style.display = "block";
    }
});

function addItemToList(item) {
    const list = document.getElementById('items');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = item;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        list.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

function toggleButton(input, buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = input.value.trim() === '';
}
