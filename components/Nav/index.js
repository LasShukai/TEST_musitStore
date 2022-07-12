import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="nav_container">
        <Link href="/">
          <a>
            <h1 className="nav_brand">musit store</h1>
          </a>
        </Link>
        <Link href="/About">
          <a>
            <p>About</p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
        nav{
            font-family: "sofia-pro";
            font-size: 22px;
            padding: 0.3em 2.3em;
            width: 100%;
            position: relative;
            left: 0;
            border-bottom: solid 1px #eee;
        }
          .nav_brand {
            font-family: "sofia-pro";
            font-weight: 300;
            font-size: 30px;
          }
          .nav_container {
            display: flex;
            max-width: 1500px;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
          }
          @media screen and (max-width: 480px) {
            nav {
                padding: 0 15px;
            }
        `}
      </style>
    </nav>
  );
};

export default Nav;
