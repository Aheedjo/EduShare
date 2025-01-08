import React from 'react';

interface TeamMemberProps {
  name: string;
  phone: string;
  email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, regNumber, phone, email }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-700 mb-1"><strong>Email:</strong> <a href={`mailto:${email}`} className="text-primary-green underline">{email}</a></p>
    </div>
  );
};

export default TeamMember;
