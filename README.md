## Template project for deploying your TensorFlow models with Webpack

I spent too much time puzzling out how to go from a Keras model written in Python, to having something deployed as a website with GitHub Pages. I will walk through what ended up working so you save time where I couldn't :smile:

### 1. Save model in Python
```python
# ... the model variable should hold your trained model
import tensorflowjs as tfjs
tfjs.converters.save_keras_model(model, 'saved-model')
```
This will put a ```model.json``` file into the ```saved-model``` folder, along with shards that hold the weights. You will use this folder in a moment.

### 2. Clone this repository
```
git clone https://github.com/tadeaspaule/tfjs-webpack-template.git
```

### 3. Install dependencies
```
npm install
```
Check ```package.json``` if you want to see what's being installed. Basically, it's just ```@tensorflow/tfjs``` and then the required modules for webpack to run.

### 4. Add your model
1. Copy-paste your model into ```build/assets/{directory-name}```. You can see an example with ```build/assets/mnist-classifier```
2. Change the code in ```index.js```. Again, you can see it using the path to the example MNIST classifier.
3. You're good to go! Add some code that uses your trained model, like ```model.predict``` etc

### Running on localhost
```npm start```

### Deploying to GitHub pages
You can check out ```deploy-example.bat``` and ```deploy-example.sh```, and modify them so that they point to your repository. GitHub pages will run automatically, you just have to change the SSH url.
