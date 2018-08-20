import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | shrug guy', function(hooks) {
  setupTest(hooks);

  test('it renders', function(assert) {
    // Creates the component instance
    var component = this.owner.factoryFor('component:shrug-guy').create();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');

    assert.equal(this.$().text().trim(), "¯\\_(ツ)_/¯");
  });
});
