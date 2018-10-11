export default {
  Query : {
    theft: (id) => [
      {
        id: 1,
        make: "Suzuki",
        model: "Bandit 1200"
      }
    ],
    thefts: () => [
      {
        make: "Suzuki",
        model: "Bandit 1200"
      }, {
        make: "KTM",
        model: "1090 Adventure"
      }
    ]
  }
}