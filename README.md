# MeBinder - A two way binding library

### Usage
> Put `data-model="some_key"` attribute to input elements in your page.

> Again put `data-bind="some_key"` attribute to some other html elements wherever you want that input data to be synced.

> Now, model with `some_key` is two way binded, so it will automatically try to update all the elements that has been binded using `data-bind="some_key"` attribute when the respective input value changes.

> If you want to access and update the model, you can access & update as given below, it will automatically sync the updated value wherever it has been used in view.

```javascript
meBinder['some_key'] = 'some_other_value';
```
### Sample Example

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Two way data binding</title>
</head>
<body>
  <input data-model="input_1" type="text">
  <div data-bind="input_1"></div>
  <script src="me-binder.js"></script>
</body>
</html>
```
