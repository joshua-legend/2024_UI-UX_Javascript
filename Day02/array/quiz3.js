const data = {
  airplane_name: "TW211",
  airplane_model: "B737-800",
  departure: {
    time: "08:35",
    airport: "ICN",
  },
  arrival: {
    time: "10:55",
    airport: "NRT",
  },
  flight_time: 150,
  flight_method: "직항",
  freight_list: [
    {
      freight_type: "이벤트운임",
      freight_info: {
        seat_grade: "이코노미",
        carry_on_baggage: "10KG",
        free_baggage: "없음",
      },
      frieght_price: {
        price_unit: "KRW",
        price: "140000",
        available_seat: "0",
      },
    },
    {
      freight_type: "스마트운임",
      freight_info: {
        seat_grade: "이코노미",
        carry_on_baggage: "10KG",
        free_baggage: "15KG",
      },
      frieght_price: {
        price_unit: "KRW",
        price: "161000",
        available_seat: "4",
      },
    },
    {
      freight_type: "일반운임",
      freight_info: {
        seat_grade: "이코노미",
        carry_on_baggage: "10KG",
        free_baggage: "20KG",
      },
      frieght_price: {
        price_unit: "KRW",
        price: "371000",
        available_seat: "9",
      },
    },
  ],
};
