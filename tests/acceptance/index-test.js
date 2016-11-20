import { test } from 'qunit';
import moduleForAcceptance from 'peepchat/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.ok($('h6'));
  });
});
