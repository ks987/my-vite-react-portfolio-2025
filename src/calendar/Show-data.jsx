import './Show-data.css';


export default function FrontEndDatabase() {


    const database1 = [
        {
            'date': 'February 3, 2024',
            'dayOfWeek': 'Saturday',
            'time': '10:00 AM - 11:30 AM',
            'taskTitle': 'Go grocery shopping',
            'taskDescription': {
                'descriptionType': 'checkboxes',
                'descriptionContents': [
                    '2 containers of tomatoes',
                    '1 container of spinach',
                    'cauliflower',
                    '2 bags of potatoes',
                    'oats',
                    'whole wheat bread',
                    'sourdough bread',
                    '4 avocadoes',
                    'blueberries',
                    'bananas',
                    'apples',
                    'raisins',
                    'medjool dates',
                    'pumpkin seeds',
                    'almond butter',
                    'dried cayenne pepper']
            }
        },

        {
            'date': 'February 4, 2024',
            'dayOfWeek': 'Sunday',
            'time': '3:00 PM - 8:00 PM',
            'taskTitle': 'Meet with friends',
        },

        {
            'date': 'February 5, 2024',
            'dayOfWeek': 'Monday',
            'time': '8:00 AM - 9:00 AM',
            'taskTitle': 'Zoom meeting',

        },

        {
            'date': 'February 6, 2024',
            'dayOfWeek': 'Tuesday',
            'time': '11:00 AM - 12:00 PM',
            'taskTitle': 'Dental cleaning appt.',
        },


        {
            'date': 'February 7, 2024',
            'dayOfWeek': 'Wednesday',
            'time': '6:00 PM - 10:00 PM',
            'taskTitle': 'Bake cookies',

        }


    ];








    return (
        <div className="ShowData">
            <div>
                Front-end database
                <br></br>

                <div className="database-itself">
                    {database1.map((task, index) => (
                        <div key={index} className="single-task-styles">
                            <p><strong>{task.taskTitle}</strong></p>
                            <p>{task.dayOfWeek}, {task.date}</p>
                            <p>{task.time}</p>
                            {task.taskDescription && (
                                <ol>
                                    {task.taskDescription.descriptionContents.map((subTask) => (
                                        <li>{subTask}</li>
                                    ))}

                                </ol>
                            )}


                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}