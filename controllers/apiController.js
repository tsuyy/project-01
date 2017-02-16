function index(req, res) {
  res.json({
    message: "Welcome",
    documentation_url: "https://github.com/sf-wdi-labs/immersive-exhibitions",
    base_url: "localhost:3000",
    endpoints: [
      {
        method: "GET", path: "/api", description: "Describes available endpoints"
      }
    ]
  });
}

module.exports = {
  index: index
}
