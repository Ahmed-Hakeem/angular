/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview
 * This file contains various signal `model()` patterns and ensures
 * the resulting types match our expectations (via comments asserting the `.d.ts`).
 */

import {WritableSignal} from '@angular/core';

import {model} from '../../src/authoring/model/model';
// import preserved to simplify `.d.ts` emit and simplify the `type_tester` logic.
import {ModelSignal} from '../../src/authoring/model/model_signal';

export class InputSignatureTest {
  /** string | undefined */
  noInitialValueExplicitRead = model<string>();

  /** boolean */
  initialValueBooleanNoType = model(false);

  /** string */
  initialValueStringNoType = model('bla');

  /** number */
  initialValueNumberNoType = model(0);

  /** string[] */
  initialValueObjectNoType = model([] as string[]);

  /** number */
  initialValueEmptyOptions = model(1, {});

  /** RegExp */
  nonPrimitiveInitialValue = model(/default regex/);

  /** string | undefined */
  withNoInitialValue = model<string>();

  /** string */
  requiredNoInitialValue = model.required<string>();

  /** string | undefined */
  requiredNoInitialValueExplicitUndefined = model.required<string|undefined>();

  /** unknown */
  noInitialValueNoType = model();

  /** string */
  requiredNoInitialValueNoType = model.required<string>();

  /** @internal */
  __shouldErrorIfInitialValueWithRequired = model.required({
    // @ts-expect-error
    initialValue: 0,
  });
}
