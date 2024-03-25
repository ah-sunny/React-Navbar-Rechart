import { Area, Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";

const CustomChart = () => {
    const studentsData = [
        { "id": 1, "name": "Student 1", "math_marks": 85, "physics_marks": 75, "chemistry_marks": 30, "english_marks": 90 },
        { "id": 2, "name": "Student 2", "math_marks": 70, "physics_marks": 65, "chemistry_marks": 55, "english_marks": 80 },
        { "id": 3, "name": "Student 3", "math_marks": 92, "physics_marks": 85, "chemistry_marks": 92, "english_marks": 95 },
        { "id": 4, "name": "Student 4", "math_marks": 60, "physics_marks": 55, "chemistry_marks": 65, "english_marks": 70 },
        { "id": 5, "name": "Student 5", "math_marks": 78, "physics_marks": 72, "chemistry_marks": 80, "english_marks": 85 },
        { "id": 6, "name": "Student 6", "math_marks": 88, "physics_marks": 80, "chemistry_marks": 45, "english_marks": 90 },
        { "id": 7, "name": "Student 7", "math_marks": 72, "physics_marks": 68, "chemistry_marks": 85, "english_marks": 78 },
        { "id": 8, "name": "Student 8", "math_marks": 95, "physics_marks": 90, "chemistry_marks": 92, "english_marks": 98 },
        { "id": 9, "name": "Student 9", "math_marks": 81, "physics_marks": 78, "chemistry_marks": 72, "english_marks": 88 },
        { "id": 10, "name": "Student 10", "math_marks": 65, "physics_marks": 60, "chemistry_marks": 50, "english_marks": 75 }
    ]


    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <ComposedChart data={studentsData} >
                <CartesianGrid></CartesianGrid>

                <XAxis dataKey='name' ></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Area type='monotone' dataKey='physics_marks'fill="#8884d8" ></Area>
                <Bar dataKey='english_marks'  fill="green" ></Bar>
                <Line type='monotone' dataKey='math_marks' stroke="red" ></Line>
                <Scatter dataKey='chemistry_marks' fill="yellow" shape='star'  ></Scatter>
                </ComposedChart>
            </ResponsiveContainer>

        </div>
    );
};

export default CustomChart;