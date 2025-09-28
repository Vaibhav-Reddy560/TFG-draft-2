import React, { useState } from 'react';

const scheduleData = {
  day1: [
    { time: '9:00 AM - 9:30 AM', event: 'Registration' },
    { time: '9:30 AM - 10:00 AM', event: 'Inauguration and Welcome address' },
    { time: '10:00 AM - 10:30 AM', event: 'Keynote Talk 1' },
    { time: '10:30 AM - 11:00 AM', event: 'Keynote Talk 2' },
    { time: '11:00 AM - 11:15 AM', event: 'Tea Break' },
    { time: '11:15 AM - 12:30 PM', event: 'IdeaCraft: It All Starts With a ‘What If?’' },
    { time: '12:30 PM - 1:00 PM', event: 'Ice Breaking Session' },
    { time: '1:00 PM - 2:00 PM', event: 'Lunch and Networking Session' },
    { time: '2:00 PM - 3:00 PM', event: 'Panel Discussion' },
    { time: '3:00 PM - 3:30 PM', event: 'Benefits of IEEE membership' },
    { time: '3:30 PM - 4:00 PM', event: 'Closing Remarks' },
  ],
  day2: [
    { time: '9:30 AM - 10:00 AM', event: 'Registration' },
    { time: '10:00 AM - 11:00 AM', event: 'Inauguration and Commencement of Hackathon' },
    { time: '1:30 PM - 2:30 PM', event: 'Lunch Break' },
    { time: '4:30 PM - 5:00 PM', event: 'High Tea' },
    { time: '8:30 PM - 9:30 PM', event: 'Dinner', description: 'Hackathon continues overnight...' },
  ],
  day3: [
    { time: '5:00 AM', event: 'Round 1 Submissions' },
    { time: '7:00 AM - 9:00 AM', event: 'First Round Evaluation' },
    { time: '8:00 AM - 9:00 AM', event: 'Breakfast' },
    { time: '9:30 AM - 11:30 AM', event: 'Final Round Presentations' },
    { time: '11:30 AM - 12:00 PM', event: 'Results and Closing Ceremony' },
  ],
};

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <section id="schedule" className="bg-background-color py-20">
      <div className="container mx-auto px-5">
        <h2 className="section-title text-center text-4xl font-bold mb-12 relative" data-aos="fade-up">Event Schedule</h2>
        <div className="flex justify-center mb-8 bg-surface-color rounded-full p-2" data-aos="fade-up" data-aos-delay="200">
          <button className={`tab-btn ${activeTab === 'day1' ? 'active' : ''}`} onClick={() => setActiveTab('day1')}>Day 1 (Oct 10)</button>
          <button className={`tab-btn ${activeTab === 'day2' ? 'active' : ''}`} onClick={() => setActiveTab('day2')}>Day 2 (Oct 11)</button>
          <button className={`tab-btn ${activeTab === 'day3' ? 'active' : ''}`} onClick={() => setActiveTab('day3')}>Day 3 (Oct 12)</button>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          {scheduleData[activeTab].map((item, index) => (
            <div key={index} className="schedule-item flex items-center gap-6 bg-surface-color p-6 rounded-lg mb-4 border-l-4 border-primary-color">
              <div className="text-primary-color font-bold w-40">{item.time}</div>
              <div>
                <h4 className="font-bold text-lg">{item.event}</h4>
                {item.description && <p className="text-sm italic">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
