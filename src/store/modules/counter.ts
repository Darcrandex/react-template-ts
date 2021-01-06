import { makeAutoObservable, runInAction, observable, action } from 'mobx'

class Counter {
  @observable
  count = 0

  @action
  add = () => {
    this.count++
  }

  @action
  sub = async () => {
    await sleep()
    runInAction(() => {
      this.count--
    })
  }
}

function sleep() {
  return new Promise<void>((r) => {
    setTimeout(r, 2000)
  })
}

export default makeAutoObservable(new Counter())
