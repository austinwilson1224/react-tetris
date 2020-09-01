import React, { useState } from "react";

// import { createStage } from "../gameHelpers";

// Styled componenets
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Customs Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


// components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
    const [dropTime, SetDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);



    console.log('re-render');
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage = { stage }/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={ gameOver } text="Game Over" />

                    ): (
                        <div>
                            <Display text="Score"/>
                            <Display text="Rows"/>
                            <Display text="Level"/>
                        </div>
                    )}
                    
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};
export default Tetris;