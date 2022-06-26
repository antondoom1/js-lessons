import React from 'react'
import './lesson_4'
import {handlePromise} from './lesson_4'

const onCreatePromise = () => {
  handlePromise.promise = new Promise((res, rej) => {
    handlePromise.resolve = res
    handlePromise.reject = rej
  })
  handlePromise.promise
    .then(handlePromise.onSuccess)
    .catch(handlePromise.onError)
}

const onResolvePromise = () => {
  handlePromise.resolve && handlePromise.resolve('resolved promise data')
}

const onRejectPromise = () => {
  handlePromise.resolve && handlePromise.reject('rejected promise error')
}

const Lesson4 = () => {
  return (
    <div>
      <button id="btn-create-promise" onClick={onCreatePromise}>Create Promise</button>
      <button id="btn-resolve-promise" onClick={onResolvePromise}>Resolve Promise</button>
      <button id="btn-reject-promise" onClick={onRejectPromise}>Reject Promise</button>
    </div>
  )
}

export default Lesson4