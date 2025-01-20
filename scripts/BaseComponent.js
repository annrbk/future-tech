class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error(
        "Unable to create an instance of the BaseComponent abstract class"
      );
    }
  }
  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }
        return true;
      },
    });
  }

  updateUI() {
    throw new Error("The updateUI method should be implemented");
  }
}

export default BaseComponent;
