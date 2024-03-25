import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import CustomChart from './CustomChart';

const Linechart = () => {

        const studentsData = [
          {"id": 1, "name": "Student 1", "math_marks": 85, "physics_marks": 75, "chemistry_marks": 80, "english_marks": 90},
          {"id": 2, "name": "Student 2", "math_marks": 70, "physics_marks": 65, "chemistry_marks": 75, "english_marks": 80},
          {"id": 3, "name": "Student 3", "math_marks": 92, "physics_marks": 85, "chemistry_marks": 90, "english_marks": 95},
          {"id": 4, "name": "Student 4", "math_marks": 60, "physics_marks": 55, "chemistry_marks": 65, "english_marks": 70},
          {"id": 5, "name": "Student 5", "math_marks": 78, "physics_marks": 72, "chemistry_marks": 80, "english_marks": 85},
          {"id": 6, "name": "Student 6", "math_marks": 88, "physics_marks": 80, "chemistry_marks": 85, "english_marks": 90},
          {"id": 7, "name": "Student 7", "math_marks": 72, "physics_marks": 68, "chemistry_marks": 75, "english_marks": 78},
          {"id": 8, "name": "Student 8", "math_marks": 95, "physics_marks": 90, "chemistry_marks": 92, "english_marks": 98},
          {"id": 9, "name": "Student 9", "math_marks": 81, "physics_marks": 78, "chemistry_marks": 82, "english_marks": 88},
          {"id": 10, "name": "Student 10", "math_marks": 65, "physics_marks": 60, "chemistry_marks": 70, "english_marks": 75}
        ]
      

    return (
        <div className=''>
            <LChart  width={900} height={400} data={studentsData}>
                <Line type="monotone" dataKey="math_marks">

                </Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis  ></YAxis>
                <Tooltip></Tooltip>
            </LChart>

            <h1 className='text-4xl font-bold mx-auto text-center text-red-600 mb-20'>practise chart </h1>
        <CustomChart></CustomChart>
            
        </div>
    );
};

export default Linechart;