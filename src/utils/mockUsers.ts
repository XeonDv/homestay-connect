export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'student' | 'family' | 'provider' | 'admin';
  startDate?: Date | string;
  endDate?: Date | string;
  // New student-specific fields
  destinationCity?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  phoneNumber?: string;
  originLanguage?: string;
  countryOfResidence?: string;
  accommodationType?: 'single' | 'share';
  mealPlan?: '3meals' | '2meals' | 'nomeals';
  preferences?: {
    acceptsSmokers: boolean;
    acceptsChildren: boolean;
    acceptsTeenagers: boolean;
    acceptsPets: boolean;
  };
  health?: {
    requiresMedication: boolean;
    hasMentalOrPhysicalCondition: boolean;
    details?: string;
  };
  emergencyContact?: {
    name: string;
    phoneNumber: string;
  };
}

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'student@example.com',
    password: 'password123',
    name: 'John Student',
    role: 'student',
    startDate: '2024-09-01',
    endDate: '2025-06-30',
    destinationCity: 'San Francisco',
    dateOfBirth: '1995-05-15',
    gender: 'male',
    phoneNumber: '+1234567890',
    originLanguage: 'Spanish',
    countryOfResidence: 'Mexico',
    accommodationType: 'single',
    mealPlan: '3meals',
    preferences: {
      acceptsSmokers: false,
      acceptsChildren: true,
      acceptsTeenagers: true,
      acceptsPets: true,
    },
    health: {
      requiresMedication: false,
      hasMentalOrPhysicalCondition: false,
    },
    emergencyContact: {
      name: 'Jane Doe',
      phoneNumber: '+0987654321',
    }
  },
  {
    id: '2',
    email: 'family@example.com',
    password: 'password123',
    name: 'Smith Family',
    role: 'family'
  },
  {
    id: '3',
    email: 'provider@example.com',
    password: 'password123',
    name: 'Provider Corp',
    role: 'provider'
  },
  {
    id: '4',
    email: 'admin@example.com',
    password: 'password123',
    name: 'Admin User',
    role: 'admin'
  }
];

export const findUser = (email: string, password: string): User | undefined => {
  return mockUsers.find(user => user.email === email && user.password === password);
};
