import {
  module,
  test
} from 'qunit';
import {
  setupRenderingTest
} from 'ember-qunit';
import {
  render
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | shrug-guy', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs `<ShrugGuy />`);

    assert.equal(this.element.textContent.trim(), '¯\\_(ツ)_/¯');
  });

  test('it yields to block content', async function (assert) {
    await render(hbs `
      {{#shrug-guy}}
        <div data-test-yielded-content>Hello!</div>
      {{/shrug-guy}}
    `);

    assert.equal(this.element.querySelector('div[data-test-yielded-content]').textContent.trim(), 'Hello!');
  });
});
