import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit' | 'reset';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchTeamProps {
    matches: MatchProps[];
    team: string;
    setTeam: (team: string) => void;
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[]
}

export interface FilterProps{
    matchDay: string,
    market: string,
    limit: number
}

export interface MatchProps {
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

export interface PackageProps {
    title: string;
    duration: string;
    matches: number;
    price: number
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
}

export interface CustomPackageFilterProps {
    title: string;
    options: PackageProps[]
}

