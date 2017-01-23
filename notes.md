#Notes

##Assignment 1

Used bigocheatsheet.com to find the Big O. The built-in sort method is really nice and concise, but it comes at a price. The Big-O is most likely Ω(n log(n)) for the built-in sort method. While the second method in a sense is manually building out our own sort method, it drops all the bells and whistles and uses only what we need. With one FOR loop, the Big O is only O(n). The second loop without the log is simpler and faster.

##Assignment 2

I made this one more complicated in the beginning that it had to be. I was focused on breaking the problem down and using single responsibility methods (ie. my checkValidity() method to make sure the string input is an acceptable string.) Check the attached scanned image of my notes for more.

##Assignment 3

This one I struggled with. I feel that I understood the code perfectly, but I didn't understand the concept behind the math. Particularly the constants 7 and 37. Check out the REPL I was using to help wrap my head around the problem. <https://repl.it/FRSh/0>. I tried messing around with Mozilla's Docs on Int64 and its methods to recreate the string number representations. I learned why you would want to do this and that's because JS as a language loses precision with bigger numbers. Int64 is a library that extends more of the data-heavy C functionality needed to correctly manipulate the numbers. I came across hex codes that represent '0X####' numbers which I've equated with the string representations you were using. (The letters are just placeholders for set/index values.) I feel that I wasn't attacking the problem with the correct Google searches. I left the specs pending for my attempted recreation.

If there is a resource you can point me to that you think might aid me in solving this, I would love to give it another shot and resubmit it to you. I want to get this right!
