/*
[IMPORTANT]
You are free to create any number of helper function you want.
We know the problem could be seached online, and we are aware of those solutions.
So please site sources if you took help from any online resource.
*/



//IDs for all the table elements. You get the cell element just by using document.getElementById("A1")
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9.
Usaged: This is to store the state to the tictactoe board.
When a move is made
(Example player 1 (who is X) move at Cell 'A1' --- The board_state[0] will be made 1 )
Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2] will be made 0 )
We store the move of player 1 as '1' and player 2 as '0'. So after the above two moves the state should look like
[1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]


// A flag to keep track of the status of the game, false means the game is not started. The default value is set to false
var started = false

/*
A variable to keep track of each players turn. Since the game always starts with player 1 - The default value is set to '1'
1 means player_1
0 means player_2
*/
var turn = 1

/*
 @Return boolean
 @Param _str - A string variable - Note the type is not checked in the implementation
 The methods @Returns true is the _str is null or it has a length of 0, otherwise, the methods returns false
*/
function isEmpty(_str)
{
	return (!_str || 0 === _str.length)
}

/*
@Return int This return the turn variable. Please note that
turn = 1 is for player_1 and
turn = 0 is for player_2
@Param - No param
*/
function whose_move()
{
	return this.turn
}

/*
@Return void
@Param
This methods toggles the 'turn' variable.
if the turn is set to 1 it will make it 0
if the turn is set to 0 it will make it 1
*/
function toggle_move()
{
	this.turn = !this.turn
}

/*
@Return boolean
@Param
The method returns the value of the 'started' flag.
true means the game has started
false means the game has not started
When the game has not started the flag is set to false. As soon as the game starts the flag must be set to true.
Once the game has finished or user has clicked on reset_play the flag must be set to false.
*/
function game_started()
{
	return this.started
}

/*
TODO - Rule 1
This is the first method you'll implement. This method is called when the Begin Play button is clicked.
The method should do all the validations as stated in rule 1.
1. Verify if the player names are empty or not. Raise an alert if they are empty.
2. If the field are empty don't start the game. This just means the function will return and do nothing. The 'started' flag will not be modified.
3. If all verification is successful, disable the name fields and update the player moves as shown in the image.
4. If all verification is successful, update the turn information on the page. (See the source code and image). And set the started flag to true.(this will help you track at any instant if the game is in start state or not.)
5. Once game has started, Handle multiple clicks on begin play.
*/

function begin_play()
{
	// Variables for elements used
	player1 = document.getElementById("player1_id");
	player2 = document.getElementById("player2_id");
	turnText = document.getElementById("turn_info");

	// Check if the game has begun
	if(game_started())
	{
		// If the game has begun, throw and alert and return
		alert("Already started. Please Reset Play to start again.");
		return;
	}

	// Check if either name field is isEmpty
	if(isEmpty(player1.value) || isEmpty(player2.value))
	{
		// If either name field is empty, throw an alert and return
		alert("Two player game, both the fields are mandatory.");
		return;
	}

	// If the inputs are valid, set game to started
	this.started = true;

	// Disable the input fields after starting
	player1.disabled = true;
	player2.disabled = true;

	// Append the move types to the names player 1 (X), player 2 (O)
	player1.value = player1.value.concat(' (X)');
	player2.value = player2.value.concat(' (O)');

	// Set the turn to X
	turnText.innerHTML = "Turn for: <b>X</b>";
}

/*
TODO - Rule 2
This is the second method you'll implement. This method is called when the Reset Play button is clicked.
The method should do all the things as stated in rule 2.
1. The reset play button should reset the whole game.(At any time when reset is clicked - All the three text boxes should be cleared and Turn should be set to the default message.)
2. The text boxes for entering name should be enablled back.
3. The Tic Tac Toe Grid should be set to its default entries.
4. Clicking reset play again and again shall have the same effect.(or no effect when clicked multiple times)
Remember to set the started flag as false
*/
function reset_play()
{
	// Variables for elements used
	player1 = document.getElementById("player1_id");
	player2 = document.getElementById("player2_id");
	turnText = document.getElementById("turn_info");
	move = document.getElementById("move_text_id");

	// Reset the turn text to the default
	turnText.innerHTML = "Game has not begun.";

	// Reset the game started status and clear/enable the three input textboxes
	this.started = false;
	player1.value = "";
	player2.value = "";
	move.value = "";
	player1.disabled = false;
	player2.disabled = false;
	move.disabled = false;

	// Reset the TicTacToe grid
	board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
	document.getElementById("A1").innerHTML = "A1";
	document.getElementById("A2").innerHTML = "A2";
	document.getElementById("A3").innerHTML = "A3";
	document.getElementById("B1").innerHTML = "B1";
	document.getElementById("B2").innerHTML = "B2";
	document.getElementById("B3").innerHTML = "B3";
	document.getElementById("C1").innerHTML = "C1";
	document.getElementById("C2").innerHTML = "C2";
	document.getElementById("C3").innerHTML = "C3";
}

/*
TODO - Rule 3
This is the last method you'll implement. This method is called everytime a move has been player( Play button was clicked).
The method should do all the things as stated in rule 2.
1. The moves should be validated can only be these ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
2. Invalid moves should be reported by an alert message.(You are encorraged to use Modal which you learned in HW1 - Usage is not mandatory.)
3. If the move is a valid move, the grid should be updated with the correct move (Player 1 is always - 'X', and Player 2 is always 'O' (This is not zero!)) - The turn information should also be updated
	Hint: Use the turn variable to figure out who is currently playing. Use to toggle method to change moves.
4. A move should always be a valid move. (Example: If say a move was made in already filled cell, it should be invalidated with an alert.)
5. If the game has not started, clicking on <b>Play</b> should give an alert "The game has not started."<br/>
6. After any move, the state of the table should be validated.(see the document attached in the homework)
   If the there is winner - Show it in an alert message - (Ex - Winner is X or O) - Displaying name is not important. <br/>
7. The game should reset itself once a winner is determined.<br/>
8. After all the moves have exhausted, you're not required to display any message. (It should be obvious to Reset play.)<br/>
*/
function play()
{
	// Variables for elements used
	player1 = document.getElementById("player1_id");
	player2 = document.getElementById("player2_id");
	turnText = document.getElementById("turn_info");
	move = document.getElementById("move_text_id");
	moveInput = move.value;
	moveIndex = -1;
	winMessage = "Winner is: "

	// Check if the game has started
	if(!game_started())
	{
		// If the game hasn't started, alert and return
		alert("The game has not started.");
		return;
	}

	// Validate the move input
	var valid = false;
	for(let i = 0;i < table_ids.length;i++)
	{
		if((moveInput === table_ids[i]) && (board_state[i] === -1))
		{
			valid = true;
			moveIndex = i;
		}
	}

	// Alert and return if input was invalid
	if(valid == false)
	{
		alert("Invalid input");
		return;
	}

	// If input was valid, update the board
	if(this.turn == 1)
	{
		// If it is player 1's turn, update board state and appearance with a 1 and an X
		board_state[moveIndex] = 1;
		document.getElementById(moveInput).innerHTML = "X";

		// Check if player 1 won by checking all win conditions
		if((board_state[0] == 1 && board_state[1] == 1 && board_state[2] == 1) ||
				(board_state[3] == 1 && board_state[4] == 1 && board_state[5] == 1) ||
				(board_state[6] == 1 && board_state[7] == 1 && board_state[8] == 1) ||
				(board_state[0] == 1 && board_state[3] == 1 && board_state[6] == 1) ||
				(board_state[1] == 1 && board_state[4] == 1 && board_state[7] == 1) ||
				(board_state[2] == 1 && board_state[5] == 1 && board_state[8] == 1) ||
				(board_state[0] == 1 && board_state[4] == 1 && board_state[8] == 1) ||
				(board_state[2] == 1 && board_state[4] == 1 && board_state[6] == 1))
		{
			// If player 1 has won, alert a win message and reset the board
			winMessage = winMessage.concat(player1.value);
			alert(winMessage);
			reset_play();
			return;
		}

		// Set the turn to O
		turnText.innerHTML = "Turn for: <b>O</b>";
	}
	else
	{
		// If it is player 2's turn, update board state and appearance with a 0 and an O
		board_state[moveIndex] = 0;
		document.getElementById(moveInput).innerHTML = "O";

		// Check if player 2 won by checking all win conditions
		if((board_state[0] == 0 && board_state[1] == 0 && board_state[2] == 0) ||
				(board_state[3] == 0 && board_state[4] == 0 && board_state[5] == 0) ||
				(board_state[6] == 0 && board_state[7] == 0 && board_state[8] == 0) ||
				(board_state[0] == 0 && board_state[3] == 0 && board_state[6] == 0) ||
				(board_state[1] == 0 && board_state[4] == 0 && board_state[7] == 0) ||
				(board_state[2] == 0 && board_state[5] == 0 && board_state[8] == 0) ||
				(board_state[0] == 0 && board_state[4] == 0 && board_state[8] == 0) ||
				(board_state[2] == 0 && board_state[4] == 0 && board_state[6] == 0))
		{
			// If player 1 has won, alert a win message and reset the board
			winMessage = winMessage.concat(player2.value);
			alert(winMessage);
			reset_play();
			return;
		}

		// Set the turn to X
		turnText.innerHTML = "Turn for: <b>X</b>";
	}

	// Toggle the turn variable
	toggle_move();
}

/*
Do not change this method.
*/
function moveEnter(event)
{
	if(event.keyCode == 13)
	{
		event.preventDefault();
		play();
	}

}
