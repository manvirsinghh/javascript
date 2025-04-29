# jQuery Cheatsheet

This is a jQuery cheatsheet that covers the most common jQuery functions and concepts. It's a quick reference to help you with commands, methods, and syntax.

---

## 1. jQuery Basics

- **Include jQuery**:
    ```html
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    ```

- **Document Ready**:
    ```javascript
    $(document).ready(function() {
        // Code here runs when the DOM is fully loaded
    });
    ```

---

## 2. Selecting Elements

- **By ID**:
    ```javascript
    $('#id') // Selects element with ID 'id'
    ```

- **By Class**:
    ```javascript
    $('.class') // Selects all elements with class 'class'
    ```

- **By Element**:
    ```javascript
    $('div') // Selects all <div> elements
    ```

- **Attribute Selectors**:
    ```javascript
    $('input[name="email"]') // Selects input elements with name="email"
    ```

- **Chaining**:
    ```javascript
    $('div').css('color', 'red').text('Hello');
    ```

---

## 3. Events

- **Click Event**:
    ```javascript
    $('#button').click(function() {
        alert('Button clicked!');
    });
    ```

- **Hover Event** (Mouse enter and leave):
    ```javascript
    $('#box').hover(function() {
        // Mouse enter
        $(this).css('background-color', 'yellow');
    }, function() {
        // Mouse leave
        $(this).css('background-color', 'white');
    });
    ```

- **Submit Event**:
    ```javascript
    $('#form').submit(function(e) {
        e.preventDefault();
        alert('Form submitted!');
    });
    ```

- **Keydown Event**:
    ```javascript
    $(document).keydown(function(event) {
        alert('Key pressed: ' + event.key);
    });
    ```

---

## 4. DOM Manipulation

- **Text**:
    ```javascript
    $('#element').text('New Text'); // Set text
    var text = $('#element').text(); // Get text
    ```

- **HTML**:
    ```javascript
    $('#element').html('<p>New HTML Content</p>');
    ```

- **CSS**:
    ```javascript
    $('#element').css('color', 'blue'); // Set CSS property
    var color = $('#element').css('color'); // Get CSS property
    ```

- **Add Class**:
    ```javascript
    $('#element').addClass('new-class');
    ```

- **Remove Class**:
    ```javascript
    $('#element').removeClass('old-class');
    ```

- **Toggle Class**:
    ```javascript
    $('#element').toggleClass('active');
    ```

---

## 5. Effects and Animations

- **Hide**:
    ```javascript
    $('#element').hide(); // Hide element
    ```

- **Show**:
    ```javascript
    $('#element').show(); // Show element
    ```

- **Fade In**:
    ```javascript
    $('#element').fadeIn(500); // Fade in over 500 milliseconds
    ```

- **Fade Out**:
    ```javascript
    $('#element').fadeOut(500); // Fade out over 500 milliseconds
    ```

- **Slide Up**:
    ```javascript
    $('#element').slideUp();
    ```

- **Slide Down**:
    ```javascript
    $('#element').slideDown();
    ```

- **Animate**:
    ```javascript
    $('#element').animate({
        left: '250px',
        opacity: '0.5'
    }, 1000); // Animation over 1 second
    ```

---

## 6. Manipulating HTML Elements

- **Append**:
    ```javascript
    $('#container').append('<p>New paragraph</p>'); // Add content inside the container
    ```

- **Prepend**:
    ```javascript
    $('#container').prepend('<p>First paragraph</p>'); // Add content to the beginning
    ```

- **Before**:
    ```javascript
    $('#element').before('<p>Before element</p>'); // Add content before the element
    ```

- **After**:
    ```javascript
    $('#element').after('<p>After element</p>'); // Add content after the element
    ```

- **Remove**:
    ```javascript
    $('#element').remove(); // Remove the element from DOM
    ```

---

## 7. Working with Forms

- **Get Value of Input**:
    ```javascript
    var value = $('#input').val(); // Get value of an input field
    ```

- **Set Value of Input**:
    ```javascript
    $('#input').val('New Value'); // Set value of an input field
    ```

- **Check if Checkbox is Checked**:
    ```javascript
    var isChecked = $('#checkbox').prop('checked');
    ```

- **Disable/Enable Input**:
    ```javascript
    $('#input').prop('disabled', true); // Disable
    $('#input').prop('disabled', false); // Enable
    ```

---

## 8. AJAX Requests

- **Basic AJAX GET Request**:
    ```javascript
    $.get('url', function(response) {
        console.log(response);
    });
    ```

- **AJAX POST Request**:
    ```javascript
    $.post('url', { key: 'value' }, function(response) {
        console.log(response);
    });
    ```

- **AJAX with JSON**:
    ```javascript
    $.ajax({
        url: 'url',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log(response);
        }
    });
    ```

---

## 9. Utility Functions

- **each()** (Iterate over a jQuery object or array):
    ```javascript
    $('li').each(function(index) {
        console.log('Item ' + index + ': ' + $(this).text());
    });
    ```

- **map()** (Create a new array based on a jQuery object):
    ```javascript
    var texts = $('li').map(function() {
        return $(this).text();
    }).get(); // Convert to a regular array
    ```

- **eq()** (Select element at a specific index):
    ```javascript
    $('#list li').eq(2).css('color', 'red'); // Select third item in list
    ```

- **parent()**:
    ```javascript
    $('#child').parent(); // Get the parent element of the selected one
    ```

- **find()**:
    ```javascript
    $('#parent').find('.child'); // Find child element(s) within the parent
    ```

---

## 10. DOM Traversing

- **next()**:
    ```javascript
    $('#current').next(); // Get the next sibling
    ```

- **prev()**:
    ```javascript
    $('#current').prev(); // Get the previous sibling
    ```

- **siblings()**:
    ```javascript
    $('#current').siblings(); // Get all siblings of the selected element
    ```

- **first()**:
    ```javascript
    $('#list').first(); // Get the first child element
    ```

- **last()**:
    ```javascript
    $('#list').last(); // Get the last child element
    ```

---

## 11. jQuery Plugins

- **Using a Plugin**:
    ```javascript
    // Assuming a plugin has been included
    $('#element').pluginName(options); // Initialize the plugin
    ```

- **Example**: Using a date picker plugin:
    ```javascript
    $('#datepicker').datepicker(); // Initialize datepicker
    ```

---

## 12. Deferred & Promises

- **Deferred**:
    ```javascript
    var dfd = $.Deferred();
    dfd.done(function() {
        alert('Deferred action completed');
    });

    setTimeout(function() {
        dfd.resolve(); // Trigger the deferred action
    }, 2000);
    ```

- **Promises**:
    ```javascript
    $.ajax('url').done(function(data) {
        alert('Request successful!');
    }).fail(function() {
        alert('Request failed');
    });
    ```

---

