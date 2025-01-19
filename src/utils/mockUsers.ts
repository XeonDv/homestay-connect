export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'student' | 'family' | 'provider' | 'admin';
}

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'student@example.com',
    password: 'password123',
    name: 'John Student',
    role: 'student'
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