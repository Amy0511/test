/**
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment node
 */

'use strict';

const CarbonIcons = require('@carbon/icons');

describe('@carbon/icons', () => {
  it('should not update exports without a semver change', () => {
    expect(Object.keys(CarbonIcons).sort()).toMatchSnapshot();
  });
});
