const PageNotFound = ({ error }) => {
  if (error === "No Article") {
    return (
      <h2>
        Either its a slow news day or this article does not exist.
        Click home to return to the homepage
      </h2>
    );
  }
  return (
    <h2>
      Oops we seem to have gotten a bit lost. Click home so we can
      find our way back!
    </h2>
  );
};

export default PageNotFound;
