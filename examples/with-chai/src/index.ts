import extendedMatchers from '@exceljs-test-matchers/chai';
import chaiJestSnapshot from 'chai-jest-snapshot';

import * as chai from 'chai';
import { before, beforeEach } from 'mocha';

chai.use(extendedMatchers);
chai.use(chaiJestSnapshot);

before(function() {
    chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function() {
    chaiJestSnapshot.configureUsingMochaContext(this);
});
