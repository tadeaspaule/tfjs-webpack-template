import * as tf from '@tensorflow/tfjs'

async function loadModel() {
  const model = await tf.loadLayersModel(`assets/mnist-classifier/model.json`);
  return model
}
let model;
loadModel().then(m => {
  model = m
  console.log(model)
})
