export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Geo;
    country: string;
}

export interface Company {
    department: string;
    name: string;
    title: string;
    address: Address;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    address: Address;
    company: Company;
    role: string;
}
