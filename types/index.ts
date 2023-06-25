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

export interface MatchProps{
    sms_id?: number;
    kickoff_date: string;
    kickoff_time: string;
    home: string;
    away: string;
    prediction: string;
    odd?: number;
    probability?: number;
    result?: string;
    status?: string;
}


