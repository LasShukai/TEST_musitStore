import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer_link">
        <Link href="https://musit.net/">
          <a>
            <h2 className="logo">musit</h2>
          </a>
        </Link>
        <ul className="footer_sns">
          <Link href="https://twitter.com/musit7">
            <a target="_blank">
              <li>twitter</li>
            </a>
          </Link>
          <Link href="https://www.facebook.com/musit7.music.x.it/">
            <a target="_blank">
              <li>facebook</li>
            </a>
          </Link>
          <Link href="https://www.instagram.com/musit7/">
            <a target="_blank">
              <li>instagram</li>
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCInJO-cQf8A1KdsUHalr0jg">
            <a target="_blank">
              <li>Youtube</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="footer_copyright">
        <p>© All rights reserved by lasfactory.</p>
      </div>
      <style jsx>
        {`
          footer {
            margin-top: 100px;
            text-align: center;
          }
          .logo{
            display:inline-block;
            margin-top:0;
          }
          .footer_link {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            max-width: 1500px;
            height: 100%;
            margin: 0 auto;
            padding: 0 30px;
          }
          .footer_sns {
            display: flex;
            list-style: none;
            margin: 0;
          }
          .footer_sns a {
            vertical-align: middle;
          }
          .footer_sns li {
            padding-left: 10px;
          }
          .footer_copyright {
            display: block;
            font-size: 12px;
          }
          @media screen and (max-width: 480px) {
            footer{
                margin-top:40px;
            }
            .footer_sns {
              flex-direction: column;
              padding: 10px;
              line-height: 2;
            }
            .footer_link{
                padding:0 15px;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
