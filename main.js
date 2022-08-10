Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#Camera");

function Shutter(){
    Webcam.snap(function(data_uri){
        document.getElementById("Snapshot").innerHTML = "<img id='iCloud_Photos' src='"+data_uri+"'>";
    });
    
}
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EcqMEpnNm/model.json", ModleActiviated);

 function ModleActiviated(){
    console.log("Model has been Activated");
 }

 function Scan(){
    img = document.getElementById("iCloud_Photos");
    classifier.classify(img, gotResults);
 }

 function speak(){
    synth = window.speechSynthesis;
    voice ="This hand sign means" + answer;
    utterThis = new SpeechSynthesisUtterance(voice);
    synth.speak(utterThis);
 }

 function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results)
        document.getElementById("HandGesture_Name").innerHTML = results[0].label
        answer= results[0].label;
        speak()
    }
 }