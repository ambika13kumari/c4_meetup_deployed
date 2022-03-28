import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get("http://localhost:8080/meetups").then((res) => {
      setData([...res.data]);
    })
  }


  return (
    <div className="homeContainer">
      {[].filter((el) => {setData(el) }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addMeetUp`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {data
            .map((el) => {
              return (
                <Link to={`/events/${el.id}`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                   
                   the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                  <div key={el.id}>
                   <h1 className="title">{el.title}</h1>
                   <h1 className="theme" >{el.theme}</h1>
                   <h2 className="description">{el.description}</h2>
                   <h2 className="date">{el.date}</h2>
                   <h2 className="time">{el.time}</h2>
                   <h2 className="location">{el.location}</h2>
                   <img className="image" src={el.image} />
                   </div>
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
