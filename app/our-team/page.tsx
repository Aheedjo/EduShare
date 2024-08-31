import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

const teamMembers = [
  {
    name: 'Alice Johnson',
    regNumber: '2024A001',
    phone: '123-456-7890',
    email: 'alice.johnson@example.com',
    role: 'Team Lead',
  },
  {
    name: 'Bob Smith',
    regNumber: '2024B002',
    phone: '234-567-8901',
    email: 'bob.smith@example.com',
    role: 'Developer',
  },
  {
    name: 'Charlie Davis',
    regNumber: '2024C003',
    phone: '345-678-9012',
    email: 'charlie.davis@example.com',
    role: 'Designer',
  },
  {
    name: 'Charlie Davis',
    regNumber: '2024C003',
    phone: '345-678-9012',
    email: 'charlie.davis@example.com',
    role: 'Designer',
  },
  {
    name: 'Charlie Davis',
    regNumber: '2024C003',
    phone: '345-678-9012',
    email: 'charlie.davis@example.com',
    role: 'Designer',
  },
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.regNumber}
              name={member.name}
              regNumber={member.regNumber}
              phone={member.phone}
              email={member.email}
              role={member.role}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurTeamPage;
