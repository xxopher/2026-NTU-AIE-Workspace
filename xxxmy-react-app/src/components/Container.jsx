function Container({ children }) {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      {children}
    </div>
  );
}
export default Container;