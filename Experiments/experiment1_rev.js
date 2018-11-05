//////////////////
//Helper functions
///////////////////

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.
function randomInteger(n) {
	return Math.floor(Math.random()*n);
}

function randomElement(array) {
  return array[randomInteger(array.length)];
}

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

//shuffle an array
function shuffleArray(a) {

    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

function randomElement(array) {
  return array[randomInteger(array.length)];
}

//I should now work on the randomization
var rando = randomInt(0,3);
var first_word ='', second_word='', first_obj='', first_obj='';

if (rando ==0) {
//Dog-ABA, Cat-ADA    
//Dog is the standard
first_word="ABA";
second_word="ADA";
first_obj="Dog";
second_obj="Cat";
    
var ConStim = ['dog1','dog2','dog3','dog4', 'dog5'];   
var SounStim = ['aba01','aba03','aba05','aba07', 'aba09'];
    
var ConStim_preTask=['dog1','dog1', 'dog5','dog5'];
var SounStim_preTask = ['aba01','aba01','aba09','aba09'];
}

if (rando ==1) {
//Dog-ADA, Cat-ABA
//Dog is the standard
first_word="ADA";
second_word="ABA";
first_obj="Dog";
second_obj="Cat";
    
var ConStim = ['dog1','dog2','dog3','dog4', 'dog5'];   
var SounStim = ['aba09','aba07','aba05','aba03', 'aba01'];
    
var ConStim_preTask=['dog1','dog1', 'dog5','dog5'];
var SounStim_preTask = ['aba09','aba09','aba01','aba01'];
    
}
if (rando ==2) {
//Dog-ADA, Cat-ABA
//Cat is the standard
first_word="ABA";
second_word="ADA";
first_obj="Cat";
second_obj="Dog";
    
var ConStim = ['dog5','dog4','dog3','dog2', 'dog1'];   
var SounStim = ['aba01','aba03','aba05','aba07', 'aba09'];
    
var ConStim_preTask=['dog5','dog5', 'dog1','dog1'];
var SounStim_preTask = ['aba01','aba01','aba09','aba09'];   
    
}
if (rando ==3) {
//Dog-ABA, Cat-ADA
//Cat is the standard
first_word="ADA";
second_word="ABA";
first_obj="Cat";
second_obj="Dog";
    
var ConStim = ['dog5','dog4','dog3','dog2', 'dog1'];   
var SounStim = ['aba09','aba07','aba05','aba03', 'aba01'];
    
var ConStim_preTask=['dog5','dog5', 'dog1','dog1'];
var SounStim_preTask = ['aba09','aba09','aba01','aba01'];
}


////////////////////////////////////////////////
//Instructions for the Task and preTask training
///////////////////////////////////////////////

     
    var preTask_instruct="This first part of the experiment serves as a training for the task that you will perform later. Please take enough time to read and understand the following instructions. <br><br> An alien will be naming to his friend two objects from the planet Earth: a "+first_obj+" and a "+second_obj+". The alien will not be speaking in English, but in an alien language. In this language, a "+first_obj+" is called "+first_word+" and a "+second_obj+" is called "+second_word+". <br><br> In each situation, the alien will be naming two objects: the first object will show on the left, and will always be a "+first_obj+"-"+first_word+". The second object will show on the right and will be either another "+first_obj+"-"+first_word+", or a "+second_obj+"-"+second_word+".<br><br> Your task is to help the other alien decide if the second item is another "+first_obj+"-"+first_word+" (by choosing 'same') or a "+second_obj+"-"+second_word+" (by choosing 'different') <br><br> Click continue for further instructions!";

    var Task_instruct="Now you will start the real experiment. Please take enough time to read and understand the following instructions. Your perfromance  should reflect this understanding:<br><br> Similar to the training, the first item will always involve the same "+first_obj+"-"+first_word+", however the second item will now bring two difficuties: <br><br> 1) The first difficulty is that there will be slight differences in the pronounciation, and it can sometimes be hard to distinguish "+first_word+" from "+second_word+". <br><br> 2) The second difficulty is that "+second_obj+"s and "+first_obj+"s now come in similar shapes, and it can sometimes be difficult to distinguish the picture of a "+second_obj+" from the picture of a "+first_obj+".<br><br> Click continue for instructions on how to overcome these difficulties!"

    var Joint_instructions= "In this part of the experiment, the other alien will be able to see the objects and hear the words.<br><br> You should help him decide if the second item is another "+first_obj+"-"+first_word+" (by choosing 'same') or a "+second_obj+"-"+second_word+" (by choosing 'different'). <br><br> <b> Remember that both the pictures and the sounds can be ambiguous. <br><br> To overcome these difficulties, you should base your decision on BOTH the sounds and the pictures.</b><br><br><b><font color='red'>IMPORTANT: Every situation is different, and the correct answer will change from one situation to another depending on both the sounds and the pictures, so do not base your answers on the pictures alone or the sounds alone.</b></font> <br><br> If you are not sure, use your intuition and give the answer that is more likely to be true!";

    var Sound_instructions= "In this part of the experiment, the other alien will only be able to hear the words, he will not be able to see the objects.<br><br> You should help him decide if the second item is another "+first_obj+"-"+first_word+" (by choosing 'same') or a "+second_obj+"-"+second_word+" (by choosing 'different'). <br><br> <b>Remember that the sounds can be ambiguous. To overcome this difficulty, you should base your decision on the similarity of the sounds.</b><br><br> If you are not sure, use your intuition and give the answer that is more likely to be true!";

    var Concept_instructions= "In this part of the experiment, the other alien will only be able to see the objects, he will not be able to hear the words.<br><br> You should help him decide if the second item is another "+first_obj+"-"+first_word+" (by choosing 'same') or a "+second_obj+" -"+second_word+" (by choosing 'different'). <br><br> <b>Remember that the pictures can be ambiguous. To overcome this difficulty, you should base your decision on the similarity of the pictures.</b><br><br> If you are not sure, use your intuition and give the answer that is more likely to be true!";


    var preJoint_instructions= "In this part of the training, the other alien will be able to see the objects and hear the words that his friend is saying.<br><br> You should help him decide if the second item is another "+first_obj+"-"+first_word+" (by choosing 'same') or a "+second_obj+"-"+second_word+" (by choosing 'different').";

    var preSound_instructions= "In this part of the training, the other alien will only be able to hear the words, he will not be able to see the objects.<br><br> You should help him decide if the second item is another "+first_obj+"-"+first_word+" (by choosing 'same') or a "+second_obj+"-"+second_word+" (by choosing 'different').";

    var preConcept_instructions= "In this part of the training, the other alien will only be able to see the objects, he will not be able to hear the words.<br><br> You should help him decide if the second item is another "+first_obj+"-"+first_word+" (by choosing 'same') or a "+second_obj+"-"+second_word+" (by choosing 'different')";

    var Pause= "<center><font size='5'>This is a small pause.</br></br>When you are ready, click to continue the task!</font></center>";




$(".f_o").text(first_obj);
$(".f_w").text(first_word);
$(".s_o").text(second_obj);
$(".s_w").text(second_word);

    
///////////////////////
//Preload the stimuli
///////////////////////

//empty white picture used to hide the left picture
var $empty_l = new $('<img>').attr('src','images/empty.jpg').height(170).width(250);

var $empty_r = new $('<img>').attr('src','images/empty.jpg').height(170).width(250);

//empty grey picture used to hide the pictures in the sound only condition
var $grey_l = new $('<img>').attr('src','images/grey.jpg').height(170).width(250);
var $grey_r = new $('<img>').attr('src','images/grey.jpg').height(170).width(250);

//Silence of the same length of the sound stim, used in the concept only condition
var $silence_l = new $('<audio>').attr('src','sounds/silence.mp3').attr("preload", "auto");

var $silence_r = new $('<audio>').attr('src','sounds/silence.mp3').attr("preload", "auto");

//Preloading the alien picture used for illustration: 

var $alien = new Array();
$alien.push($('<img>').attr('src','images/alien2.png').height(170).width(250));
$alien.push($('<img>').attr('src','images/alien1.png').height(170).width(250));

//preload the task illustration
var $mytask = new $('<img>').attr('src','images/'+first_obj+'_'+first_word+'.jpg').height(180).width(600);

//The pictures for each conditon
var $joint_pic = new $('<img>').attr('src','images/joint.jpg').height(170).width(250);
var $sound_pic = new $('<img>').attr('src','images/sound.jpg').height(170).width(250);
var $concept_pic = new $('<img>').attr('src','images/concept.jpg').height(170).width(250);

//we randomize two things:
//1- the mapping between the aba/ada and cat/dog
//2-randomize the standard: cat or dog



//preloading preTask stim (0: left, 1: right)
var $concept_pre_0 = new $('<img>').attr('src','images/'+ConStim_preTask[0]+'.jpg').height(170).width(170);

var $concept_pre_1 = new Array();
for (i=0; i < ConStim_preTask.length; i++){
$concept_pre_1.push($('<img>').attr('src','images/'+ConStim_preTask[i]+'.jpg').height(170).width(170));
}

var $sound_pre_0 = new Array();
for (i=0; i < SounStim_preTask.length; i++){
$sound_pre_0.push($('<audio>').attr('src','sounds/'+SounStim_preTask[0]+'.mp3').attr("preload", "auto"));
}

var $sound_pre_1 = new Array();
for (i=0; i < SounStim_preTask.length; i++){
$sound_pre_1.push($('<audio>').attr('src','sounds/'+SounStim_preTask[i]+'.mp3').attr("preload", "auto"));
}
    

//Preloading Task stim (0: left, 1: right)

var $concept_0 = new $('<img>').attr('src','images/'+ConStim[0]+'.jpg').height(170).width(170);

var $concept_1 = new Array();
for (i=0; i < ConStim.length; i++){
$concept_1.push($('<img>').attr('src','images/'+ConStim[i]+'.jpg').height(170).width(170));
}

var $sound_0 = new Array(); 
for (i=0; i < SounStim.length; i++){
$sound_0.push($('<audio>').attr('src','sounds/'+SounStim[0]+'.mp3').attr("preload", "auto"));
} 

var $sound_1 = new Array();
for (i=0; i < SounStim.length; i++){
$sound_1.push($('<audio>').attr('src','sounds/'+SounStim[i]+'.mp3').attr("preload", "auto"));
}


// 0 is code for "same" and 1 code for "different"
var myKeyBindings = {"S": 0, "D": 1};
   

$(".same-key").text("S");
$(".different-key").text("D");

///////////////////////
//Build trial sequence:
////////////////////////



    

//Here we separete the sequences fo each condition in order to be able to randomize theur order for each subject
var myTrials=[];



//preTask traning
//////////////////

//General instructions for preTask training


myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "preTask_instructions",
        block:'',
        chunk:'',   
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        
        });

//shuffle the preTask training order of exposure for each condtion 

var Trials_pre_joint=shuffleArray([0,1,2,3]);
var Trials_pre_sound=shuffleArray([0,1,2,3]);
var Trials_pre_concept=shuffleArray([0,1,2,3]);

var correct= [0,0,1,1];

var total_pre_joint= Trials_pre_joint.length;
var total_pre_sound= Trials_pre_sound.length;
var total_pre_concept= Trials_pre_concept.length;



// preTask Joint condition 
myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "preJoint_instructions",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        
        });

//For the preTask trials, I give the correct answer in  "trial order"

/*
for (i=0; i < total_pre_joint; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:correct[Trials_pre_joint[i]],
        trial_type: "preTask",
        block:1,
        chunk:'',
        concept_l:$concept_pre_0,
        concept_r:$concept_pre_1[Trials_pre_joint[i]],
        concept_dist:'',
        sound_l:$sound_pre_0[Trials_pre_joint[i]],
        sound_r:$sound_pre_1[Trials_pre_joint[i]],
        sound_dist:'',
        conditon:'joint'
    }
   myTrials.push(myTrial);
}

//preTask Sound condition
myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "preSound_instructions",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        
        });
 
for (i=0; i < total_pre_sound; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:correct[Trials_pre_sound[i]],
        trial_type: "preTask",
        block:1,
        chunk:'',
        concept_l:$grey_l,
        concept_r:$grey_r,
        concept_dist:'',
        sound_l:$sound_pre_0[Trials_pre_sound[i]],
        sound_r:$sound_pre_1[Trials_pre_sound[i]],
        sound_dist:'',
        conditon:'sound'
    }
   myTrials.push(myTrial);
}

//preTask Concept condition
myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "preConcept_instructions",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        
        });

for (i=0; i < total_pre_concept; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:correct[Trials_pre_concept[i]],
        trial_type: "preTask",
        block:1,
        chunk:'',
        concept_l:$concept_pre_0,
        concept_r:$concept_pre_1[Trials_pre_concept[i]],
        concept_dist:'',
        sound_l:$silence_l,
        sound_r:$silence_r,
        sound_dist:'',
        conditon:'concept'
    }
   myTrials.push(myTrial);
}

*/

//the real Task
//////////////////


// Do everything again and double by 4? Thus I would have 8 point per item per subject 

//Also, do it with 4 separate chuncks, that is should I just make a loop of 4 steps

//Here define the big table



for (b=1; b < 3 ; b++){
    
var myTrials_sound=[];
var myTrials_concept=[];
var myTrials_joint=[]
  
var chunk1 = "<center><font size='5'>You are now going to start: </br></br>The testing chunk number <b>"; 
    
var chunk2= "</b> (out of <b>4</b>)</br></br>The task is the same in all the chunks.</br></br>You may take a small pause before the start.</br></br>Please stay focused till the end of the chunck!</font></center>";
    
    
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "chunk",
        block:b,
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        
        });


myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "Task_instructions",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        
        });

//Sound condition

myTrials_sound.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "Sound_instructions",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        });


//
//shuffle order of exposure for two consecutive blocks
var Trials_S_1=shuffleArray([0,1,2,3,4]);
var Trials_S_2=shuffleArray([0,1,2,3,4]);

var total_sound= Trials_S_1.length;

//first block
for (i=0; i < total_sound; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials_S_1[i]+1,
        trial_type: "Task",
        block:1,
        chunk:b,
        concept_l:$grey_l,
        concept_r:$grey_r,
        concept_dist:0,
        sound_l:$sound_0[Trials_S_1[i]],
        sound_r:$sound_1[Trials_S_1[i]],
        sound_dist: Trials_S_1[i],
        conditon:'sound'
    }
    
    myTrials_sound.push(myTrial);
}

    //Pause between two blocks
myTrials_sound.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "pause",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        });
 /*
//second block
for (i=0; i < total_sound; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials_S_2[i]+1,
        trial_type: "Task",
        block:2,
        chunk:b,
        concept_l:$grey_l,
        concept_r:$grey_r,
        concept_dist:0,
        sound_l:$sound_0[Trials_S_2[i]],
        sound_r:$sound_1[Trials_S_2[i]],
        sound_dist: Trials_S_2[i],
        conditon:'sound'
    }
    
    myTrials_sound.push(myTrial);
}

 

//Concept condition
myTrials_concept.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "Concept_instructions",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        });


var Trials_C_1=shuffleArray([0,1,2,3,4]);
var Trials_C_2=shuffleArray([0,1,2,3,4]);

var total_concept= Trials_C_1.length;

//first block
for (i=0; i < total_concept; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials_C_1[i]+1,
        trial_type: "Task",
        block:1,
        chunk:b,
        concept_l:$concept_0,
        concept_r:$concept_1[Trials_C_1[i]],
        concept_dist:Trials_C_1[i],
        sound_l:$silence_l,
        sound_r:$silence_r,
        sound_dist: 0,
        conditon:'concept'
    }
    
    myTrials_concept.push(myTrial);
}

//second block
for (i=0; i < total_concept; i++){
    myTrial = {
       trial_number: i+1,
        trial_order:Trials_C_2[i]+1,
        trial_type: "Task",
        block:2,
        chunk:b,
        concept_l:$concept_0,
        concept_r:$concept_1[Trials_C_2[i]],
        concept_dist:Trials_C_2[i],
        sound_l:$silence_l,
        sound_r:$silence_r,
        sound_dist: 0,
        conditon:'concept'
    }
    
    myTrials_concept.push(myTrial);
}

//Joint condition


myTrials_joint.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "Joint_instructions",
        block:0,
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        });


var Trials_J_1=shuffleArray([ [0,0],[0,1],[0,2],[0,3],[0,4],
                              [1,0],[1,1],[1,2],[1,3],[1,4],
                              [2,0],[2,1],[2,2],[2,3],[2,4],
                              [3,0],[3,1],[3,2],[3,3],[3,4],
                              [4,0],[4,1],[4,2],[4,3],[4,4]  
                            ]);

var Trials_J_2=shuffleArray([ [0,0],[0,1],[0,2],[0,3],[0,4],
                              [1,0],[1,1],[1,2],[1,3],[1,4],
                              [2,0],[2,1],[2,2],[2,3],[2,4],
                              [3,0],[3,1],[3,2],[3,3],[3,4],
                              [4,0],[4,1],[4,2],[4,3],[4,4]
                            ]);

var total_joint=Trials_J_1.length

//first block
for (i=0; i < total_joint; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:0,
        trial_type: "Task",
        block:1,
        chunk:b,
        concept_l:$concept_0,
        concept_r:$concept_1[Trials_J_1[i][0]],
        concept_dist:Trials_J_1[i][0],
        sound_l:$sound_0[Trials_J_1[i][1]],
        sound_r:$sound_1[Trials_J_1[i][1]],
        sound_dist: Trials_J_1[i][1],
        conditon:'joint'
    }
    
    myTrials_joint.push(myTrial);
}

//Pause between two blocks
myTrials_joint.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "pause",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        });

//second block
for (i=0; i < total_joint; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:0,
        trial_type: "Task",
        block:2,
        chunk:b,
        concept_l:$concept_0,
        concept_r:$concept_1[Trials_J_2[i][0]],
        concept_dist:Trials_J_2[i][0],
        sound_l:$sound_0[Trials_J_2[i][1]],
        sound_r:$sound_1[Trials_J_2[i][1]],
        sound_dist: Trials_J_2[i][1],
        conditon:'joint'
    }
    
    myTrials_joint.push(myTrial);
}

*/

//Briefing 


////////////////////////////////////////////
//Here Randomize the order of the conditions
////////////////////////////////////////////

var conditions=[[myTrials_joint,myTrials_sound,myTrials_concept],
 [myTrials_joint,myTrials_concept,myTrials_sound],
 [myTrials_sound,myTrials_concept,myTrials_joint],
 [myTrials_concept,myTrials_sound,myTrials_joint]
           ];

var myOrder = randomElement(conditions);
    
for (i=0; i < myOrder[0].length; i++){
    myTrials.push(myOrder[0][i]);
}

for (i=0; i < myOrder[1].length; i++){
    myTrials.push(myOrder[1][i]);
}

for (i=0; i < myOrder[2].length; i++){
    myTrials.push(myOrder[2][i]);
}
     
}
//The final slide for the briefing
myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "briefing",
        block:'',
        chunk:'',
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        conditon:''
        });

/////////////////////////////////////
//THIS IS WHERE THE EXPERIMENT STARTS
////////////////////////////////////

showSlide("instructions");

// ## The main event

var experiment = {
    
  
  brief:{
    age:[],
    gender:[],
    native:[],
    problem:[],
    ifproblem:[],
    comment:[]
  },
    
  data :{
    tri_number:[],
    tri_order:[],  
    tri_type:[],
    block:[],
    chunk:[],
    con_dist: [],  
    sou_dist: [],  
    answer:[],
    rt:[],
    condition:[],
    rando:[]
      
  },
  // Parameters for this sequence.
  trials: myTrials,
  // Experiment-specific parameters - which keys map to odd/even
  keyBindings: myKeyBindings,
  // The function that gets called when the sequence is finished.
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { 
        
            //Decrement 
            //if (turk.workerId.length > 0){
            //var xmlHttp = null;
            //xmlHttp = new XMLHttpRequest();
            //xmlHttp.open("GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            //xmlHttp.send(null);
            //}
        turk.submit(experiment) }, 1500);
  },
  // The work horse of the sequence - what to do on every trial.
  next: function() {
    // If the number of remaining trials is 0, we're done, so call the end function.
    if (experiment.trials.length == 0) {
      experiment.end();
      return;
    }
    
    // Get the current trial - <code>shift()</code> removes the first element of the array and returns it.
    var current_trial = experiment.trials.shift();
      
    if (current_trial.trial_type == "preTask_instructions")
        {
            showSlide("preTask_instructions");
            $("#MyPreTask").html(preTask_instruct);
            $("#task_pic").html($mytask);
        }
      
    if (current_trial.trial_type == "Task_instructions")
        {
            showSlide("Task_instructions");
            $("#MyTask").html(Task_instruct);
           
        }
      
    //Instruction for the Task
    if (current_trial.trial_type == "Sound_instructions")
        {
            showSlide("empty_slide");
            $("#my_empty_slide").html(Sound_instructions);
            $("#my_picture").html($sound_pic);
        }
      
    if (current_trial.trial_type == "Concept_instructions")
        {
            showSlide("empty_slide");
            $("#my_empty_slide").html(Concept_instructions);
            $("#my_picture").html($concept_pic);
        }
      
    if (current_trial.trial_type == "Joint_instructions")
        {
            showSlide("empty_slide");
            $("#my_empty_slide").html(Joint_instructions);
            $("#my_picture").html($joint_pic);
        }
      
    //Instruction for the preTask training
      if (current_trial.trial_type == "preSound_instructions")
        {
            showSlide("empty_slide"); $("#my_empty_slide").html(preSound_instructions);
            $("#my_picture").html($sound_pic);
        }
      
    if (current_trial.trial_type == "preConcept_instructions")
        {
            showSlide("empty_slide"); $("#my_empty_slide").html(preConcept_instructions);
            $("#my_picture").html($concept_pic);
        }
      
    if (current_trial.trial_type == "preJoint_instructions")
        {
            showSlide("empty_slide"); $("#my_empty_slide").html(preJoint_instructions);
            $("#my_picture").html($joint_pic);
        }
    //Pause
    if (current_trial.trial_type == "pause")
        {
            showSlide("empty_slide"); $("#my_empty_slide").html(Pause);
            $("#my_picture").html($empty_l);
            
        } 
    if (current_trial.trial_type == "chunk")
        {
            showSlide("empty_slide"); $("#my_empty_slide").html(chunk1+current_trial.block+chunk2);
            $("#my_picture").html($empty_l);
            
        } 
     if (current_trial.trial_type == "briefing")
        {
            showSlide("briefing");
            
            $( "#nextButton_brief" ).click(function() {
            
            experiment.brief.age.push(document.getElementById("age").value);
            experiment.brief.gender.push(document.getElementById("gender").value);
                
            experiment.brief.native.push(document.getElementById("native").value);
            experiment.brief.problem.push(document.getElementById("problem").value);
            experiment.brief.ifproblem.push(document.getElementById("ifproblem").value);
                
            experiment.brief.comment.push(document.getElementById("comment").value);
                
            });
        
        }
    
    if (current_trial.trial_type == "preTask" || current_trial.trial_type == "Task") 
    {
        
        var $current_concept_l= current_trial.concept_l;
      
        var $current_concept_r= current_trial.concept_r;
      
        var $current_sound_l= current_trial.sound_l;
      
        var $current_sound_r= current_trial.sound_r;
        
        
    showSlide("stage");
      
        
    //The following is how/when the sounds and objects are played/shown
    ///////////////////////////////////////////////////////////////////
        
    $("#pic_alien").html($alien[0]);
        
    //play the first sound
    $current_sound_l.get(0).play();
        
    //while the first sound is playing, show the first object and hide the second object!
    $current_sound_l.on('playing', function() {
    
    $("#pic_left").html($current_concept_l);
    $("#pic_right").html($empty_r); 
    $("#pic_alien").html($alien[1]);
        
    });
    
    //When the first sound ends, hide the first object and play the second sound
    $current_sound_l.on('ended', function() {
        
    $("#pic_left").html($empty_l);
    $("#pic_alien").html($alien[0]);
    
    setTimeout(function(){
    $current_sound_r.get(0).play();
    }, 500);   
        
    });
 
    //while the second sound is playing, hide the first object and show the second object!  
    $current_sound_r.on('playing', function() {

    $("#pic_right").html($current_concept_r); 
    $("#pic_alien").html($alien[1]);
        
    });

    //When the second sound ends, hide the second object 
    $current_sound_r.on('ended', function() {

    $("#pic_right").html($empty_l);
    $("#pic_alien").html($alien[0]);
        
    });
    
    
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
        
    var keyPressHandler = function(event) {
        
    var keyCode = event.which;
      
    if (keyCode != 83 && keyCode != 68) {
        // If a key that we don't care about is pressed, re-attach the handler (see the end of this script for more info)
        $(document).one("keydown", keyPressHandler);
        
      } else {
        // If a valid key is pressed (code 80 is p, 81 is q),
        // record the reaction time (current time minus start time), which key was pressed, and what that means (even or odd).
        var endTime = (new Date()).getTime(),
            key = (keyCode == 83) ? "S" : "D",
            userAnswer = experiment.keyBindings[key];
        
        experiment.data.tri_number.push(current_trial.trial_number);
        experiment.data.tri_order.push(current_trial.trial_order);  
        experiment.data.tri_type.push(current_trial.trial_type);
        experiment.data.block.push(current_trial.block);  
        experiment.data.block.push(current_trial.chunk); 
        experiment.data.con_dist.push(current_trial.concept_dist);
        experiment.data.sou_dist.push(current_trial.sound_dist);
        
        experiment.data.answer.push(userAnswer);
        
        experiment.data.rt.push(endTime - startTime);
        
        experiment.data.condition.push(current_trial.conditon);
       
        experiment.data.rando.push(rando);
                
        // Wait 500 milliseconds before starting the next trial.
        setTimeout(experiment.next, 500);
      }
    };
   
    setTimeout(function(){
    $(document).one("keydown", keyPressHandler);
    }, 1500);
    
        
    
    }
  }    
    
  }

