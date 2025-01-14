let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

let count = 0;

const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
] ;

const resetGame = () =>  {
      turnO = true;
      enableBox();
      msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        count++ ;
        if(count === 9)
        {
            msg.innerText = "Draw";
            msgContainer.classList.remove("hide");

        }
        
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true ; //ek player ki turn hone ke baad woh value ko change nhi kar sakta

        checkWinner();
    });
});

const disableBox = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBox = () =>
{
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
}

const ShowWinner = (winner) =>
{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner = () =>{
    for (let pattern of winPatterns)
    {
          
      
       let posVal1 = boxes[pattern[0]].innerText;
       let posVal2 = boxes[pattern[1]].innerText;
       let posVal3 = boxes[pattern[2]].innerText;

       if(posVal1 != "" && posVal2 != "" && posVal3 != "")   //agar theeno empty nhi huve tabhi winning pattern check karenge
        {
            if (posVal1 === posVal2 && posVal2 === posVal3){
                ShowWinner(posVal1);

            }
        }


        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    }
}


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);