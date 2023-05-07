import React from 'react';

export interface IQuestions {
    id: number;
    questionText: string;
    answerText: string;
    categoryID: number;
    typeID: number;
    complexityID: number;
}

export interface IComplexity {  
    id: number;  
    name: string;
}

export interface ITypes {
    id: number;
    name: string;
}

export interface IStaff {
    id: number;
    name: string;
}
export interface ICategories {
    id: number;
    name: string;
}