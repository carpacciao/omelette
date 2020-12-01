import { wait } from './utils.js'

export default class Pan {
  constructor(content = []) {
    this.content = content
  }

  async cook () {
    await wait(4)
  }
}