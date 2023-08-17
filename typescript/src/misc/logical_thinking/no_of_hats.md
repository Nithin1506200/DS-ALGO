# Puzzle 41 | (Guess Color of Hat)

## There are 20 people standing in a line, one behind the other. Each is made to wear a hat, which can either be white or black. There can be any number of white or black hats between 0 and 20. Each person can see the hat of all the persons ahead of him in the line, but not those of the people standing behind. Each person is required to guess (loudly) the color of his/her own hat. The objective is for the group to get as many correct guesses as possible. The group is allowed to discuss and form a strategy before the exercise. What is the best strategy? What is the maximum number of correct guesses in this strategy?

Solution:
The person who stands last in the queue, behind everyone else, will count the number of white hats on the heads of the 19 people present ahead of him. If this number is even, he (loudly) guesses the hat on his head as ‘Black’. if the number is odd, he guesses ‘White’. The probability of the hat on his head being what he guessed is 50%. There is no way this person can guess the hat on his head correctly. However, his guess functions as a message to others in front of him.

Suppose the 20th person guesses ‘Black’. Now, the person who is 19th in the queue knows that the number of white hats on the first 19 people (the 18 people in front of him and himself) is even. He then checks whether the number of white hats in front of him is even or odd. If the number is even, that means the hat on his head is black. If the number is odd, that means the hat on his head is white and calls that out (loudly). Therefore, the 19th person in the queue always guesses correctly, based on the message the 20th person passed on.

A similar strategy is followed by each person in turn. Therefore, everyone except the last (20th) person guesses correctly for sure. The answer to this puzzle, therefore, is 19.
