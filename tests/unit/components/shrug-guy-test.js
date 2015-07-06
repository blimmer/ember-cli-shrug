import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('shrug-guy', 'Unit | Component | shrug guy', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');

  assert.equal(this.$().text().trim(), "¯\\_(ツ)_/¯");
});
