/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 * 
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

import type { DcId } from "../types";

export const MAIN_DOMAIN = 'webprojectmockup.com';

const App = {
  id: +process.env.API_ID,
  hash: process.env.API_HASH,
  version: process.env.VERSION,
  versionFull: process.env.VERSION_FULL,
  build: +process.env.BUILD,
  langPackVersion: '0.5.0',
  langPack: 'macos',
  langPackCode: 'en',
  domains: [MAIN_DOMAIN] as string[],
  baseDcId: 2 as DcId,
  isMainDomain: location.hostname === MAIN_DOMAIN,
  suffix: 'K'
};

if(App.isMainDomain) { // use Webogram credentials then
  App.id = 10398936;
  App.hash = 'ffe0ed6582688b17b9af17c4cb7fb236';
}

export default App;
