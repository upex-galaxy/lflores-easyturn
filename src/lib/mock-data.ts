// lib/mock-data.ts

export interface Service {
  id: string;
  name: string;
  durationMinutes: number;
  price: number;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  description: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  services: Service[];
}

export const mockBusinesses: Business[] = [
  {
    id: "biz-123",
    name: "EasyTurn Barbershop",
    slug: "easy-turn-barbershop",
    logoUrl: "https://i.imgur.com/2Z4Z1Z2.png", // Placeholder image
    description: "Tu barbería de confianza para un corte perfecto y un afeitado clásico.",
    contactInfo: {
      address: "Calle Falsa 123, Springfield",
      phone: "+123 456 7890",
      email: "info@easyturnbarbershop.com",
    },
    services: [
      {
        id: "svc-001",
        name: "Corte de Pelo Clásico",
        durationMinutes: 30,
        price: 15.00,
      },
      {
        id: "svc-002",
        name: "Afeitado de Barba",
        durationMinutes: 20,
        price: 10.00,
      },
      {
        id: "svc-003",
        name: "Corte + Afeitado",
        durationMinutes: 50,
        price: 22.00,
      },
      {
        id: "svc-004",
        name: "Lavado y Peinado",
        durationMinutes: 15,
        price: 8.00,
      },
    ],
  },
  {
    id: "biz-456",
    name: "Laura's Beauty Salon",
    slug: "lauras-beauty-salon",
    logoUrl: "https://i.imgur.com/3Y3Y3Y3.png", // Another placeholder
    description: "Expertos en belleza y cuidado personal para realzar tu estilo.",
    contactInfo: {
      address: "Avenida Siempre Viva 742, Springfield",
      phone: "+123 987 6543",
      email: "contact@laurasbeautysalon.com",
    },
    services: [
      {
        id: "svc-005",
        name: "Manicura Clásica",
        durationMinutes: 45,
        price: 20.00,
      },
      {
        id: "svc-006",
        name: "Pedicura Spa",
        durationMinutes: 60,
        price: 35.00,
      },
      {
        id: "svc-007",
        name: "Corte y Peinado Mujer",
        durationMinutes: 60,
        price: 40.00,
      },
    ],
  },
];
