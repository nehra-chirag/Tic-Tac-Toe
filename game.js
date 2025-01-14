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
      count = 0;
      enableBox();
      msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turnO){  //player O
            box.innerText = "O";
            turnO = false;
        }
        else{    //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true ;   //ek player ki turn hone ke baad woh value ko change nhi kar sakta
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
        
    });
});

const gameDraw = () => {
    msg.innerText = "Game Draw";
    msgContainer.classList.remove("hide");
    disableBox();
};

const disableBox = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBox = () =>
{
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
};

const ShowWinner = (winner) =>
{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

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
                return true;

            }
        }

    }
};


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
