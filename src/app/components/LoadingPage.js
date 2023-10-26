function LoadingPage() {
  return (
    <>
      <iframe
        src="/elements/loader/loader1.html"
        style={{
          position: "absolute",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          border: "none",
          filter: "invert(1)",
        }}
      />
    </>
  );
}

export default LoadingPage;
