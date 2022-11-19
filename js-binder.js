; // Initialize the model that will hold the object state
const jsBinder = (() => {
    // Update view when current state of object changes
    const updateView = (obj, prop) => {
        // Get all elements which is binded to the obj prop that got changed
        const elements = document.querySelectorAll(`[data-bind=${prop}]`);
        // Loop through all elements & sync view with the model
        elements.forEach(element => {
            const nodeType = element.nodeName;
            if (nodeType === 'INPUT') {
                element.value = obj[prop];
            } else {
                element.textContent = obj[prop];
            }
        });
    };

    // Define a object to hold the state
    const obj = {};

    // Get all elements which value needs to be updated back to model
    const models = document.querySelectorAll('[data-model]');
    models.forEach(model => {
        const attributeValue = model.getAttribute('data-model');
        obj[attributeValue] = '';
        // Add event listener on view elements for syncing back to model
        model.addEventListener('input', (evt) => {
            jsBinder[evt.target.dataset.model] = evt.target.value;
        });
    });

    // Create a proxy & attach handler to it
    return new Proxy(obj, {
        set: (target, property, value) => {
            target[property] = value;

            // Sync View With Model
            updateView(target, property);
            return true;
        },
    });
})();