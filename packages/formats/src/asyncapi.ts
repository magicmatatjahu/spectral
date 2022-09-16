import type { Format } from '@stoplight/spectral-core';
import { isPlainObject } from '@stoplight/json';

type MaybeAAS2 = { asyncapi: unknown } & Record<string, unknown>;

const aas2Regex = /^2\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/;
const aas2_0Regex = /^2\.0(?:\.[0-9]*)?$/;
const aas2_1Regex = /^2\.1(?:\.[0-9]*)?$/;
const aas2_2Regex = /^2\.2(?:\.[0-9]*)?$/;
const aas2_3Regex = /^2\.3(?:\.[0-9]*)?$/;
const aas2_4Regex = /^2\.4(?:\.[0-9]*)?$/;

const isAas2 = (document: unknown): document is { asyncapi: string } & Record<string, unknown> =>
  isPlainObject(document) && 'asyncapi' in document && aas2Regex.test(String((document as MaybeAAS2).asyncapi));

export const aas2: Format = isAas2;
aas2.displayName = 'AsyncAPI 2.x';

// for backward compatibility
export const asyncApi2 = aas2;
export const asyncapi2 = aas2;

export const aas2_0: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_0Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_0.displayName = 'AsyncAPI 2.0.x';

export const aas2_1: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_1Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_1.displayName = 'AsyncAPI 2.1.x';

export const aas2_2: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_2Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_2.displayName = 'AsyncAPI 2.2.x';

export const aas2_3: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_3Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_3.displayName = 'AsyncAPI 2.3.x';

export const aas2_4: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_4Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_4.displayName = 'AsyncAPI 2.4.x';

export const all_aas2: Format[] = [aas2_0, aas2_1, aas2_2, aas2_3, aas2_4];
export const from_aas2_1: Format[] = [aas2_1, aas2_2, aas2_3, aas2_4];
export const from_aas2_2: Format[] = [aas2_2, aas2_3, aas2_4];
export const from_aas2_3: Format[] = [aas2_3, aas2_4];
export const from_aas2_4: Format[] = [aas2_4];
