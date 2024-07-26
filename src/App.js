import './App.css';

const Form = function () {
  return (
    <form>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}

function App() {
  return (
    <>
      <header>
        <img src='/images/Logo.svg' alt='Little Lemon Logo' />
        <nav>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/menu">MENU</a></li>
            <li><a href="/reservations">RESERVATIONS</a></li>
            <li><a href="/online-order">ONLINE ORDER</a></li>
            <li><a href="/contact">LOGIN</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>My App</h1>
        <Form />
      </main>
      <footer>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/online-order">Online Order</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <ul>
            <li><a href="/address">Address</a></li>
            <li><a href="/phone">Phone</a></li>
            <li><a href="/email">Email</a></li>
          </ul>
          <ul id='social-media-links'><li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                X              </a>
            </li>


          </ul>
        </nav>
      </footer >
    </>
  );
}

export default App;
