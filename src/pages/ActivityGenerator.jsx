import { useEffect,useState } from 'react'

export default function ActivityGenerator() {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({}); 
  const [savedButton, setSavedButton] = useState('Save');

  useEffect(() => {
    async function getActivities(){
        const url="https://activity-generator-dceb0-default-rtdb.europe-west1.firebasedatabase.app/activities.json"
        const response = await fetch(url);
        const data = await response.json();
        const activitiesArray = Object.keys(data).map(key=> ({id: key, ...data[key]}));

        // console.log(data);
        // console.log(activitiesArray);
        setActivities(activitiesArray);
    }
    getActivities();

  }, []);

  function RandomizeActivity(){
    let generatedID = Math.floor(Math.random() * 53);
    setActivity(activities[generatedID]);
  };

  // function SaveActivity() {
  //   const updatedActivities = activities.map((act) =>
  //     act.id === activity.id ? { ...act, saved: true } : act
  //   );
  //   setActivities(updatedActivities);
  //   setSavedButton('Saved');
  //   const updatedActivity = updatedActivities.find((act) => act.id === activity.id);
  //   setActivity(updatedActivity);
  // }

  return (
    <>
      <h1>Activity Generator</h1>
                <div className='activityPreview'>
                    <div>
                    <h2>{activity.activity}, #{activity.id}</h2>
                    {/* <button onClick={SaveActivity}>{savedButton}</button> */}
                    </div>
                    
                    <div>
                    <p>{activity.category}</p>
                    <p>{activity.duration}</p>
                    <a href={activity.link}>link</a>
                    </div>
                    <p>{activity.description}</p>
                </div>
    <button onClick={RandomizeActivity}>Generate Activity!</button>
    </>
  )
}

