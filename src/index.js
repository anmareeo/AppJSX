//import react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom'; //note that "React" is just a variable. we can name it anything, but it is best practice to name it the same as the path. Essentially what we are telling the computer to do is to go to import the dependencies called 'react' and react-dom from the dependencies (node modules)
/*
function getButtonText(){
    return 'Click on Me!'
}
//create a react component
const App = () => {
//const buttonText = 'Click Me' 

//we are creating a variable for the button. We can use this variable in place of any button text. this is particularly useful if we want all buttons to say the same thing. When we reference the variable in jsx, we put it in curly braces, so it would look like this"<button style = {{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>". Those braces don't indicate that it is an object, but that we are using a js variable.

//Instead of using a const variable we can use a function instead, and when that function is called, it will return whatever the function tells it to. Look on line five to see the function, and then we will call the function below between the curly braces in the button tag. I have commented out the const buttonText, since we are now using the function getButtonText instead.
    return (
        <div>
            <label className ="Label" for="Name">
                Enter name:
            </label>
            <input id ="name" type ="text" />
            <button style = {{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button> 
            
        </div>
    )
   
}*/
//====Below we are using the same general code from above to show some of the limitations of JSX



//create a react component
const App = () => {
//note below that we can change the const buttonText to almost anything. All four examples below are valid.
//const buttonText = 'Click Me' 
//const buttonText = 12345 
//const buttonText = ['apple ','orange ','apricot '] 
//const buttonText = [10, ' hi']    

//if we try to change the const to a javascript object with a property of "text: 'Click Me.'
const buttonText = {text: 'Click Me.'}
//the above will not work unless we add ".text".See the following details. React does not know how to use a javascript object. So we cannot take a javascript object and reference it inside of our jsx text, specifically where we would normally show text. This is the error we receive "Error: Objects are not valid as a React child (found: object with keys {text}). If you meant to render a collection of children, use an array instead." we cannot show a javascript object as an attribute on an element (the button element, for example)

//this can easily be fixed if we change {buttonText}(below in the return statement) to {buttonText.text}
        return (
            <div>
                <label className ="Label" htmlFor="Name">
                    Enter name:
                </label>
                <input id ="name" type ="text" />
                <button style = {{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button> 
                
            </div>
        )
       
    }
// below is another way we can do the same thing as above. I changed const App to const App1, and added the render for it below the other one. I also had to add a new <div> for the App1 on the index.html file. Otherwise both versions would not appear on the screen.Also in the App1  version below I will show that we can do multiple interpolations inside a text block. See below that we have turned the label text into a variable. So the first says 'Enter name' and the second says 'Enter Your Name,' because that is the name I gave to the variable labelText.
const App1 = () => {
const buttonText = {text: 'Click Me.'}
const style = {backgroundColor: 'blue', color: 'white'}
const labelText = 'Enter Your Name'

return (
    <div>
        <label className ="Label" htmlFor="Name">
            {labelText}
        </label>
        <input id ="name1" type ="text1" />
        <button style = {style}>{buttonText.text}</button> 
        
    </div>
)

}


//take the react component and show it on the screen

ReactDOM.render (
  <App />,
   document.querySelector('#root') //this is referencing the index.html file in the public folder.//this is a built-in function that is native to all browsers, so we don't have to import anything.
) //note that these are two parameters. They are in parentheses and have a comma between them.
ReactDOM.render (
    <App1 />,
    document.querySelector('#root1')
)

// More Notes
//Differences between JSX and HTML: 
//Adding custom styling to an element uses different syntax
//Adding a class to an element uses different syntax
//JSX can reference JS variables.
//To find more differences, right click on the page and go to the console in Chrome. JS is smart enough lately to pick up on what we are trying to tell it, but see for example the following from the return statement above:
/*return (
    <div>
        <label className ="Label" for="Name">
            {labelText}
        </label>
        <input id ="name" type ="text" />
        <button style = {style}>{buttonText.text}</button> 
        
    </div>
)*/

//notice the word "for". to not get it confused with for that is used in for loops, we should really change that to htmlFor. Again, it likely won't cause an error, but be aware of that.It is a good practice to keep the console open so that you can see any mistakes you might be making.
