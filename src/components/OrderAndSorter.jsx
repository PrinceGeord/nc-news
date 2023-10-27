const OrderAndSorter = ({ order, setOrder, setSortBy }) => {
  const toggleOrder = (event) => {
    event.preventDefault();
    if (order === 0) {
      setOrder(1);
    } else setOrder(0);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
  };
  const sortByObj = {
    date: ["Newest to oldest", "Oldest to newest"],
    comment_count: [
      "Most commented to least commented",
      "Least commented to most commented",
    ],
    votes: ["Most hoots given 🦉", "Most booted 👟"],
  };

  return (
    <section>
      <select onChange={handleChange}>
        <option value="date">{sortByObj.date[order]}</option>
        <option value="comment_count">
          {sortByObj.comment_count[order]}
        </option>
        <option value="votes">{sortByObj.votes[order]}</option>
      </select>
      <button onClick={toggleOrder}>Toggle order</button>
    </section>
  );
};

export default OrderAndSorter;
