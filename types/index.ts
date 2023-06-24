import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit' | 'reset';
}

export interface SearchTeamProps{
    team: string;
    setTeam: (team: string) => void;
}

export interface CustomFilterProps{
    title: string;
}


