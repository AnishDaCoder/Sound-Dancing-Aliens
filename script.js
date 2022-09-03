function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BVh_flLHx/', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}