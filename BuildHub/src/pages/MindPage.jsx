
import React, { useState, useEffect } from 'react';
import './MindPage.css'; 

const MindPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-3-yhcs.onrender.com/mindData');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mind-page">
       <div className='top'>
        <button>Mindfulness</button>
      </div>
      <h2 className='h2'>Mindfulness Library</h2>
      <p className='h2'>Access our pre-recorded meditation sessions, at your convenience</p>
      <div className="mind-container">
        {data.map(item => (
          <div key={item.id} className="mind-item">
            <div className="image">
              <img src={item.image.imageUrl} alt={item.text.title} />
            </div>
            <div className="text">
              <h2>{item.text.title}</h2>
              <p>{item.text.description}</p>
              <p>{item.text.additionalInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindPage;