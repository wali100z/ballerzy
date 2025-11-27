export async function sendMembership(data) {
  return fetch("https://smuknu-vomg9.ondigitalocean.app/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
