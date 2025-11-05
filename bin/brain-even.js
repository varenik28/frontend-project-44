#!/usr/bin/env node

import greeting from '../src/greeting.js'
import hello from '../src/cli.js'
import evenGame from '../src/isEven.js'

greeting()
const name = hello()
evenGame(name)
