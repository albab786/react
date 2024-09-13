export function CurrentTime() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <p>
      Current Date: {formattedDate} <br />
      Current Time: {formattedTime}
    </p>
  );
}
