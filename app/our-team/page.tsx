import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

const teamMembers = [
  {
    name: 'Maishanu Ahidjo',
    regNumber: 'U17CO1010',
    phone: '08143410800',
    email: 'maishanu.ahijo@yahoo.com',
  },
  // {
  //   name: 'Abdulrahman Yakub Alada',
  //   regNumber: 'U18CO2029',
  //   phone: '07015500652',
  //   email: 'aladarahman18@gmail.com',
  // },
  // {
  //   name: 'Hassan Ibrahim',
  //   regNumber: 'U17CO1016',
  //   phone: '08104040728',
  //   email: 'alhassani.y1k@gmail.com',
  // },
  // {
  //   name: 'Omodiagbe Daniel',
  //   regNumber: 'U18CO2030',
  //   phone: '08052571786',
  //   email: 'nosetale2017@gmail.com',
  // },
  // {
  //   name: 'Feyambai Toumar',
  //   regNumber: 'U18CO2020',
  //   phone: '07060535408',
  //   email: 'feyambaitoumar@gmail.com',
  // },
  // {
  //   name: 'Hauwa Jalingo',
  //   regNumber: 'U18CO2020',
  //   phone: '07060535408',
  //   email: 'feyambaitoumar@gmail.com',
  // }
];

const OurTeamPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 px-10 pb-20 pt-32">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-gray-700">Meet the talented individuals who make our team great.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.regNumber}
              name={member.name}
              regNumber={member.regNumber}
              phone={member.phone}
              email={member.email}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurTeamPage;
