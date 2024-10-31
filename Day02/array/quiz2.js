const movie1 = "15 롱레그스 상영중 호러,스릴러/101분/2024.10.30 6관6층:92석";

const movie = {
  ageLimit: 15,
  title: "롱레그스",
  isShowing: true,
  genres: ["호러", "스릴러"],
  runningTime: "101분",
  releaseDate: "2024.10.30",
  theather: [
    {
      movieType: "2D",
      theatherNumber: "6",
      theatherFloor: 6,
      availableSeats: 92,
      showTimes: [{ startTime: "19:50", remainSeat: 91 }],
    },
    {
      movieType: "2D",
      theatherNumber: "8",
      theatherFloor: 6,
      availableSeats: 142,
      showTimes: [{ startTime: "22:10", remainSeat: 142 }],
    },
  ],
};
