import "./index.css";

export default function Footer() {
  return (
    <footer className="p-5">
      <div className="footer max-width-inhibitor">
        <h5>WeatherAPP {`${new Date().getFullYear()}`} &copy;</h5>
        <span className="italic font-medium">Powered by weatherstack</span>
      </div>
    </footer>
  );
}
