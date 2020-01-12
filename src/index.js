document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoItems = []

function sortItems() {
  return todoItems.sort(function(item1, item2) {
    return item1.priority - item2.priority
  })
}

function printDOMItem(item, parent) {
  console.log('getting to print')
  const li = document.createElement('li')
  const button = document.createElement('button')
  const editButton = document.createElement('button')

  switch (item.priority) {
    case '1':
      li.style = 'color: red'
      break;
    case '2':
      li.style = 'color: orange'
      break;
    case '3':
      li.style = 'color: yellow'
      break
    case '4':
      li.style = 'color: green'
      break
  }

  li.textContent = `${item.description} Time: ${item.time}`
  button.textContent = '❌'
  editButton.textContent = 'Edit Task 📝'

  editButton.addEventListener('click', function(e) {
    const input = document.querySelector('#new-task-description')
    const values = li.firstChild.nodeValue.split(" Time: ")
    const dropdownInput = document.querySelector('#dropdown')
    const priorityInput = document.querySelector('#priority-dropdown')

    input.value = values[0]
    dropdownInput.value = values[1]
    console.log(li.style.color)
  
    switch (li.style.color) {
      case 'red':
        priorityInput.value = '1'
        break;
      case 'orange':
        priorityInput.value = '2'
        break;
      case 'yellow':
        priorityInput.value = '3'
        break;
      case 'green':
        priorityInput.value = '4'
        break;
    }

    
    li.remove()
    const index = todoItems.indexOf(item)
    todoItems.splice(index, 1)
    
  })

  button.addEventListener('click', function(e) {
    li.remove()
    const index = todoItems.indexOf(item)
    todoItems.splice(index, 1)
  })

  li.appendChild(editButton)
  li.appendChild(button)
  parent.appendChild(li)
}

function displayItems(items) {
  const ul = document.querySelector('#tasks')
  ul.innerHTML = ""
  for (item of items) {
    printDOMItem(item, ul)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()

    const ul = document.querySelector('#tasks')
    const input = document.querySelector('#new-task-description')
    const dropdownInput = document.querySelector('#dropdown')
    const priorityInput = document.querySelector('#priority-dropdown')
    const sortButton = document.querySelector('#sort-button')

    

    const item = {
      'description': input.value,
      'priority': priorityInput.value,
      'time': dropdownInput.value
    }
    todoItems.push(item)

    printDOMItem(item, ul)

    input.value = ''

    

    sortButton.addEventListener('click', function(e) {
      const sorted = sortItems();
      displayItems(sorted)
    })

    
    console.log(input.value)
  })
});
});
