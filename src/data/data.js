let data = {
    notes: [
        {text: "Вам поставили лайк", id: 1},
        {text: "Вам поставили дизлайк", id: 2},
        {text: "Вам поставили 5+", id: 3},
    ],
    dialogs: [{
        name: "Vika", id: 1, messages: [
            {text: "Hey, what are you doing?", name: "Danila", id: 1},
            {text: "I am cooking now", name: "Vika", id: 2},
            {text: "img", name: "Vika", id: 3},
            {text: "Looks good", name: "Danila", id: 4},
            {text: "It's pie ", name: "Vika", id: 5},
            {text: "And what is inside?", name: "Danila", id: 6},
            {text: "Apples", name: "Vika", id: 7},
        ]
    },
        {
            name: "Leonid", id: 2, messages: [
                {text: "I hate C++ Builder", name: "Danila", id: 1},
                {text: "Me too", name: "Leonid", id: 2},
            ]
        },
        {
            name: "Dima", id: 3, messages: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "At blanditiis doloribus quibusdam quod ratione rerum, voluptatum! Adipisci at dolor nemo " +
                        "neque nesciunt nulla qui quidem. Enim eos fugiat laudantium tempora.",
                    name: "Danila",
                    id: 1
                },
                {text: "Me too", name: "Dima", id: 2},
            ]
        },
        {
            name: "Kolya", id: 4, messages: [
                {text: "I hate C++ Builder", name: "Danila", id: 1},
                {text: "Me too", name: "Kolya", id: 2},
            ]
        },
    ],
    userName: "Danila"
}

export default data;
