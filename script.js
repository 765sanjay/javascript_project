let outputscreen = document.getElementById('output-screen');
function display(num) {
    outputscreen.value +=num;
    
}
function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value).toFixed(0);
    }

    catch(err){
        alert("invalid");
    }
}
function Clear(){
    outputscreen.value ="";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);//last one number disappear
}
const question = [
    {
        question: 'What is 2+2',
        answer: [{ text: '4', correct: true },
        { text: '22', correct: false }
        ]
    }
];
