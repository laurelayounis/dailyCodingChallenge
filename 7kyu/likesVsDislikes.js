/*
Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.


P array: potentially with multiple arr items in it
R an arr with one item in it either "Dislike", "Nothing", or "Like"
E    assert.strictEqual( likeOrDislike([Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([Like,Like]), Nothing );
    assert.strictEqual( likeOrDislike([Dislike,Like]), Like );
    assert.strictEqual( likeOrDislike([Like,Dislike,Dislike]), Nothing );
P
need to grab the last the arr index (-1) and use the value from that, 
need to grab the last 2 index of the arr : could use slice, if they're both equal to each other return nothing, otherwise use the last index of 
the arr (-1) and return the value from that

https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript
*/

function likeVsDislike(arr){

}