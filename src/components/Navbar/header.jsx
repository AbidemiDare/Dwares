function Header({ openSignUpBar }) {
  return (
    <div>
      <button className="btn header-btn" onClick={openSignUpBar}>
        Create an account
      </button>
    </div>
  );
}

export default Header;
