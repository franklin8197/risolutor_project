import { useEffect } from "react";

const DummyJson = [
  {
    bookings: [
      {
        bookingDetails: {
          movie: "Avatar",
          deviceInfo: { primary: { type: "Mobile", os: "iOS" } },
          tickets: { regular: 2, premium: 1 },
          timestamp: "2025-02-12T09:30:00",
          userId: "U001",
        },
      },
      {
        bookingDetails: {
          movie: "Inception",
          deviceInfo: { primary: { type: "Desktop", os: "Windows" } },
          tickets: { regular: 1, premium: 1 },
          timestamp: "2025-02-12T10:15:00",
          userId: "U002",
        },
      },
      {
        bookingDetails: {
          movie: "The Dark Knight",
          deviceInfo: { primary: { type: "Tablet", os: "Android" } },
          tickets: { regular: 2, premium: 2 },
          timestamp: "2025-02-12T11:00:00",
          userId: "U003",
        },
      },
      {
        bookingDetails: {
          movie: "Interstellar",
          deviceInfo: { primary: { type: "Mobile", os: "Android" } },
          tickets: { regular: 3, premium: 1 },
          timestamp: "2025-02-12T12:30:00",
          userId: "U004",
        },
      },
      {
        bookingDetails: {
          movie: "Titanic",
          deviceInfo: { primary: { type: "Laptop", os: "MacOS" } },
          tickets: { regular: 2, premium: 0 },
          timestamp: "2025-02-12T13:45:00",
          userId: "U005",
        },
      },
      {
        bookingDetails: {
          movie: "The Matrix",
          deviceInfo: { primary: { type: "Desktop", os: "Linux" } },
          tickets: { regular: 1, premium: 1 },
          timestamp: "2025-02-12T14:00:00",
          userId: "U006",
        },
      },
      {
        bookingDetails: {
          movie: "Joker",
          deviceInfo: { primary: { type: "Mobile", os: "iOS" } },
          tickets: { regular: 2, premium: 2 },
          timestamp: "2025-02-12T15:15:00",
          userId: "U007",
        },
      },
      {
        bookingDetails: {
          movie: "Shutter Island",
          deviceInfo: { primary: { type: "Tablet", os: "iOS" } },
          tickets: { regular: 1, premium: 1 },
          timestamp: "2025-02-12T16:00:00",
          userId: "U008",
        },
      },
      {
        bookingDetails: {
          movie: "Avengers: Endgame",
          deviceInfo: { primary: { type: "Laptop", os: "Windows" } },
          tickets: { regular: 4, premium: 2 },
          timestamp: "2025-02-12T17:30:00",
          userId: "U009",
        },
      },
      {
        bookingDetails: {
          movie: "Spider-Man: No Way Home",
          deviceInfo: { primary: { type: "Desktop", os: "MacOS" } },
          tickets: { regular: 2, premium: 1 },
          timestamp: "2025-02-12T18:45:00",
          userId: "U010",
        },
      },
      {
        bookingDetails: {
          movie: "Doctor Strange",
          deviceInfo: { primary: { type: "Mobile", os: "Android" } },
          tickets: { regular: 3, premium: 2 },
          timestamp: "2025-02-12T19:15:00",
          userId: "U011",
        },
      },
      {
        bookingDetails: {
          movie: "The Lord of the Rings",
          deviceInfo: { primary: { type: "Tablet", os: "Windows" } },
          tickets: { regular: 2, premium: 2 },
          timestamp: "2025-02-12T20:30:00",
          userId: "U012",
        },
      },
    ],
  },
];

const Task3 = () => {
  const aggregateTicketsByDevice = (data) => {
    return data[0].bookings.reduce((acc, { bookingDetails }) => {
      const { type } = bookingDetails.deviceInfo.primary;
      const totalTickets =
        bookingDetails.tickets.regular + bookingDetails.tickets.premium;

      if (acc[type]) {
        acc[type] += totalTickets;
      } else {
        acc[type] = totalTickets;
      }

      return acc;
    }, {});
  };

  useEffect(() => {
    const result = aggregateTicketsByDevice(DummyJson);
    console.log(result);
  }, []);

  return (
    <>
      <p>Reducer</p>
    </>
  );
};

export default Task3;
