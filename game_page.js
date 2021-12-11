player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
 player1_score = 0;
 player2_score = 0;

 document.getElementById("player1_name").innerHTML = player1_name + " : ";
 document.getElementById("player2_name").innerHTML = player2_name + " : ";

 document.getElementById("player1_score").innerHTML = player1_score;
 document.getElementById("player2_score").innerHTML = player2_score;

 document.getElementById("player_question").innerHTML = "Question turn : " + player1_name;
 document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_name;

 function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    char_at1 = word.charAt(1);
    console.log(char_at1);

    length_divide_1 = Math.floor(word.length/2);
    char_at2 = word.charAt(length_divide_1);
    console.log(char_at2);

    length_minus_1 = word.length - 1;
    char_at3 = word.charAt(length_minus_1);
    console.log(char_at3);
     
    remove_char_at1 = word.replace(char_at1, "_");
    remove_char_at2 = remove_char_at1.replace(char_at2, "_");
    remove_char_at3 = remove_char_at2.replace(char_at3, "_");

    question_word = "<h4 id = 'word_display' >Q. " + remove_char_at3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
 }
 question_turn = "player1";
 answer_turn = "player2";
 function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
   console.log("answer in lower case " + answer);
   if(answer == word){
      if(answer_turn == "player1"){
         player1_score = player1_score + 1;
         document.getElementById("player1_score").innerHTML = player1_score;
      }
      else{
         player2_score = player2_score + 1;
         document.getElementById("player2_score").innerHTML = player2_score;
      }
   }
    if(answer_turn == "player1"){
       answer_turn = "player2";
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;  
    }
    else{
       answer_turn = "player1";
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    if(question_turn == "player1"){
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;  
   }
   else{
      question_turn = "player1";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
   }
   document.getElementById("output").innerHTML = " ";
 }