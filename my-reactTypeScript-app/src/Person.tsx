import { useState } from "react";

interface Props {
    name: string;
    email: string;
    age: number,
    isMarried: boolean,
    friends: string[] // yada Props[]
    // country?: string; // ? required props olmadigini gosterir. ? kullanmassak required propstur kullanmak ve gondermek zorundayiz
    country?:Country // sadece Country icerisindeki valuelerden biri olabilir. Erisebilmek icin export edip kullanmak gerekiyor
}

export enum Country{
    Brazil='Brazil',
    Turkey='Turkey',
    Canada='Canada'
}


export const Person = (props: Props) => {
    const [name, setName] = useState<string>("")
    return (
        <div className="col-12">
            <h4>Name: {props.name} </h4>
            <h4>Email: {props.email} </h4>
            <h4>Age: {props.age} </h4>
            <h4>This person {props.isMarried ? "is" : "is not"} MARRIED </h4>
            {props.friends.map((friend: string) => {
                return <h4 key={friend}> {friend} </h4>;
            })}
            <h4>Country: {props.country} </h4>
        </div>
    );
}