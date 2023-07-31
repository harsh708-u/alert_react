// PascalCasing
function Message(){
    // JSX : JavaScript XML-using here
   const name ='harsh';
   if(name)
     return <h1>hello {name}</h1>;//here we used js in the brackets
    return <h1>hello world</h1>;
}
export default Message;//these export helps to provide this function for other files where they can use import to call it.