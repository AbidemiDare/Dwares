function Bar({ openBar }) {
  return (
    <div>
      <button onClick={openBar} className="header-bar">
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}

export default Bar;
