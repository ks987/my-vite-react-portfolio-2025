import {useState} from "react";

export default function AllTasks() {




    const arrayAllTasks = [[
        ["to-do list Feb 4, 2025"],
        ["go grocery shopping"],
        ["code a to-do app"],
        ["read a nonfiction book"],
        ['go on a walk'],
        ["meet with friends at 6pm"]
    ],

    [
        ["groceries July 1, 2024"],
        ["two boxes of cherry tomatoes"],
        ["five lemons"],
        ["seven zucchinis"],
        ['three mangoes'],
        ["three grapefruits"]
        ["two pineapples"],
        ["watermelon"]
    ],


];

    return(
        <div>
            <div>
                {arrayAllTasks}
            </div>
        </div>
    )

}



